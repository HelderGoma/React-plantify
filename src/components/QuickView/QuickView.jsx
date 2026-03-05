import "./QuickView.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const QuickView = ({ product, isWishlisted, onClose, onAddToCart, onToggleWishlist }) => {
  if (!product) {
    return null;
  }

  return (
    <div className="quick-view-overlay" onClick={onClose}>
      <div className="quick-view-modal" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="quick-view-close" onClick={onClose}>
          x
        </button>
        <img src={product.image} alt={product.name} />
        <div className="quick-view-content">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <p>
            This plant likes <strong>{product.light}</strong> light and works best for{" "}
            <strong>{product.size}</strong> spaces.
          </p>
          <div className="quick-view-actions">
            <button type="button" className="btn btn-border-primary" onClick={() => onAddToCart(product.id)}>
              Add to cart
            </button>
            <button
              type="button"
              className="btn btn-border-primary"
              onClick={() => onToggleWishlist(product.id)}
            >
              {isWishlisted ? <FaHeart /> : <FaRegHeart />} Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
