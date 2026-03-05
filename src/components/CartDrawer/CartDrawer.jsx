import "./CartDrawer.css";

const CartDrawer = ({ isOpen, items, total, onClose, onUpdateQty, onClearCart }) => {
  return (
    <aside className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <div className="cart-drawer__head">
        <h3>Your cart</h3>
        <button type="button" onClick={onClose} className="btn btn-border-primary">
          Close
        </button>
      </div>
      {items.length === 0 ? (
        <p className="cart-empty">Cart is empty.</p>
      ) : (
        <>
          <div className="cart-drawer__list">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.product.image} alt={item.product.name} />
                <div className="cart-item__info">
                  <h4>{item.product.name}</h4>
                  <p>${item.product.price}</p>
                  <div className="cart-item__qty">
                    <button type="button" onClick={() => onUpdateQty(item.id, item.qty - 1)}>
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button type="button" onClick={() => onUpdateQty(item.id, item.qty + 1)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-drawer__footer">
            <strong>Total: ${total.toFixed(2)}</strong>
            <button type="button" className="btn btn-border-primary" onClick={onClearCart}>
              Clear cart
            </button>
          </div>
        </>
      )}
    </aside>
  );
};

export default CartDrawer;
