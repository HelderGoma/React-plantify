import { useEffect, useMemo, useState } from "react";
import {
  Header,
  Featured,
  Search,
  Colorful,
  Plant,
  Contact,
  Footer,
  CartDrawer,
  ComparePanel,
  Quiz,
  QuickView,
  ToastStack,
} from "./components";
import { products } from "./data/products";

const WISHLIST_KEY = "plantify_wishlist";
const CART_KEY = "plantify_cart";

function App() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    category: "all",
    maxPrice: 70,
    light: "all",
    size: "all",
    beginnerOnly: false,
    petFriendly: false,
  });
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedColors, setSelectedColors] = useState({});
  const [compareIds, setCompareIds] = useState([]);
  const [quickViewId, setQuickViewId] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const rawWishlist = localStorage.getItem(WISHLIST_KEY);
    const rawCart = localStorage.getItem(CART_KEY);
    if (rawWishlist) {
      setWishlist(JSON.parse(rawWishlist));
    }
    if (rawCart) {
      setCart(JSON.parse(rawCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    document.body.style.overflow = isCartOpen || Boolean(quickViewId) ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen, quickViewId]);

  const suggestions = useMemo(() => {
    if (!query.trim()) {
      return [];
    }
    const normalized = query.toLowerCase();
    return products
      .filter((product) => product.name.toLowerCase().includes(normalized))
      .slice(0, 5);
  }, [query]);

  const filteredProducts = useMemo(() => {
    const normalized = query.toLowerCase();
    return products.filter((product) => {
      const matchesQuery =
        !normalized || product.name.toLowerCase().includes(normalized);
      const matchesCategory =
        filters.category === "all" || product.category === filters.category;
      const matchesPrice = product.price <= filters.maxPrice;
      const matchesLight =
        filters.light === "all" || product.light === filters.light;
      const matchesSize = filters.size === "all" || product.size === filters.size;
      const matchesBeginner = !filters.beginnerOnly || product.beginner;
      const matchesPetFriendly = !filters.petFriendly || product.petFriendly;

      return (
        matchesQuery &&
        matchesCategory &&
        matchesPrice &&
        matchesLight &&
        matchesSize &&
        matchesBeginner &&
        matchesPetFriendly
      );
    });
  }, [filters, query]);

  const quickViewProduct =
    products.find((product) => product.id === quickViewId) ?? null;

  const cartDetailedItems = useMemo(() => {
    return cart
      .map((item) => {
        const product = products.find((productEntry) => productEntry.id === item.id);
        if (!product) {
          return null;
        }
        return { ...item, product };
      })
      .filter(Boolean);
  }, [cart]);

  const cartCount = cart.reduce((total, item) => total + item.qty, 0);
  const cartTotal = cartDetailedItems.reduce(
    (total, item) => total + item.product.price * item.qty,
    0
  );

  const toggleWishlist = (id) => {
    setWishlist((prev) => {
      const exists = prev.includes(id);
      pushToast(exists ? "Removed from wishlist" : "Added to wishlist", exists ? "info" : "success");
      return exists ? prev.filter((itemId) => itemId !== id) : [...prev, id];
    });
  };

  const addToCart = (id) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === id);
      const product = products.find((entry) => entry.id === id);
      if (existing) {
        pushToast(`${product?.name ?? "Item"} quantity updated`, "info");
        return prev.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      pushToast(`${product?.name ?? "Item"} added to cart`, "success");
      return [{ id, qty: 1 }, ...prev];
    });
    setIsCartOpen(true);
  };

  const updateCartQty = (id, qty) => {
    if (qty <= 0) {
      pushToast("Item removed from cart", "warning");
      setCart((prev) => prev.filter((item) => item.id !== id));
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  const toggleCompare = (id) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) {
        pushToast("Removed from compare", "info");
        return prev.filter((itemId) => itemId !== id);
      }
      if (prev.length >= 3) {
        pushToast("You can compare up to 3 items", "warning");
        return prev;
      }
      pushToast("Added to compare", "success");
      return [...prev, id];
    });
  };

  const clearCart = () => {
    setCart([]);
    pushToast("Cart cleared", "info");
  };

  const selectColor = (id, color) => {
    setSelectedColors((prev) => ({ ...prev, [id]: color }));
  };

  const dismissToast = (id) => {
    setToasts((prev) =>
      prev.map((toast) => (toast.id === id ? { ...toast, isLeaving: true } : toast))
    );
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((item) => item.id !== id));
    }, 190);
  };

  const pushToast = (message, type = "info", duration = 2200) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type, isLeaving: false }]);
    window.setTimeout(() => {
      dismissToast(id);
    }, duration);
  };

  return (
    <>
      <Header
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onSearchFocus={() => document.getElementById("search-section")?.scrollIntoView({ behavior: "smooth" })}
      />
      <Search
        query={query}
        onQueryChange={setQuery}
        suggestions={suggestions}
        onSelectSuggestion={(name) => setQuery(name)}
        filters={filters}
        onFiltersChange={setFilters}
      />
      <Featured
        products={filteredProducts}
        wishlist={wishlist}
        onToggleWishlist={toggleWishlist}
        onAddToCart={addToCart}
        selectedColors={selectedColors}
        onSelectColor={selectColor}
        onQuickView={setQuickViewId}
        compareIds={compareIds}
        onToggleCompare={toggleCompare}
      />
      <ComparePanel
        compareIds={compareIds}
        products={products}
        onToggleCompare={toggleCompare}
      />
      <QuickView
        product={quickViewProduct}
        isWishlisted={quickViewProduct ? wishlist.includes(quickViewProduct.id) : false}
        onClose={() => setQuickViewId(null)}
        onAddToCart={(id) => {
          addToCart(id);
          setQuickViewId(null);
        }}
        onToggleWishlist={toggleWishlist}
      />
      {(isCartOpen || quickViewProduct) && (
        <button
          type="button"
          className="screen-overlay"
          aria-label="Close overlay"
          onClick={() => {
            setQuickViewId(null);
            setIsCartOpen(false);
          }}
        />
      )}
      <CartDrawer
        isOpen={isCartOpen}
        items={cartDetailedItems}
        total={cartTotal}
        onClose={() => setIsCartOpen(false)}
        onUpdateQty={updateCartQty}
        onClearCart={clearCart}
      />
      <Colorful />
      <Plant />
      <Quiz products={products} />
      <Contact />
      <Footer />
      <ToastStack toasts={toasts} onDismiss={dismissToast} />
    </>
  );
}

export default App;
