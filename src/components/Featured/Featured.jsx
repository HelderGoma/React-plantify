import './Featured.css'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";

const Featured = ({
    products,
    wishlist,
    onToggleWishlist,
    onAddToCart,
    selectedColors,
    onSelectColor,
    onQuickView,
    compareIds,
    onToggleCompare,
}) => {
    return (
        <section className="section" id="catalog-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section__title">Interactive Catalog</h2>
                    <span className="section__link">{products.length} items</span>
                </div>
                <div className="section-body">
                    <div className="featured">
                        {products.map((product) => (
                            <article
                                className="featured-item reveal-card"
                                key={product.id}
                                style={{
                                    borderColor: selectedColors[product.id] ?? "#d6e2df",
                                }}
                            >
                                <button
                                    type="button"
                                    className="wishlist-button"
                                    onClick={() => onToggleWishlist(product.id)}
                                    aria-label="Toggle wishlist"
                                >
                                    {wishlist.includes(product.id) ? <FaHeart /> : <FaRegHeart />}
                                </button>
                                <img src={product.image} alt={product.name} className="featured-item__image" />
                                <div className="featured-item__info">
                                    <h3 className="featured-item__title">{product.name}</h3>
                                    <span className="featured-item__price">${product.price}</span>
                                </div>
                                <div className="featured-item__meta">
                                    <span>{product.light} light</span>
                                    <span>{product.size}</span>
                                    {product.petFriendly && <span>pet-friendly</span>}
                                </div>
                                <div className="featured-item__actions">
                                    <div className="color">
                                        <h4 className="color__title">Pot color</h4>
                                        <div className="color-items">
                                            {product.colors.map((color) => (
                                                <button
                                                    type="button"
                                                    key={color}
                                                    className={`color-item ${selectedColors[product.id] === color ? "active" : ""}`}
                                                    style={{ backgroundColor: color }}
                                                    onClick={() => onSelectColor(product.id, color)}
                                                    aria-label={`Select color ${color}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-border-primary" onClick={() => onAddToCart(product.id)}>buy</button>
                                </div>
                                <div className="featured-extra-actions">
                                    <button type="button" className="btn btn-border-primary" onClick={() => onQuickView(product.id)}>Quick view</button>
                                    <button
                                        type="button"
                                        className={`btn btn-border-primary compare-btn ${compareIds.includes(product.id) ? "active" : ""}`}
                                        onClick={() => onToggleCompare(product.id)}
                                    >
                                        <MdCompareArrows /> Compare
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                    {products.length === 0 && <p className="empty-result">No matches. Try resetting filters.</p>}
                </div>
            </div>
        </section>
    )
}

export default Featured