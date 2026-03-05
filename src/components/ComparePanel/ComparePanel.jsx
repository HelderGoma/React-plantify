import "./ComparePanel.css";

const ComparePanel = ({ compareIds, products, onToggleCompare }) => {
  const compareItems = compareIds
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);

  if (compareItems.length === 0) {
    return null;
  }

  return (
    <section className="section compare-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section__title">Compare plants</h2>
        </div>
        <div className="compare-grid">
          {compareItems.map((item) => (
            <article key={item.id} className="compare-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <ul>
                <li>Price: ${item.price}</li>
                <li>Light: {item.light}</li>
                <li>Size: {item.size}</li>
                <li>Beginner: {item.beginner ? "Yes" : "No"}</li>
                <li>Pet-friendly: {item.petFriendly ? "Yes" : "No"}</li>
              </ul>
              <button
                type="button"
                className="btn btn-border-primary"
                onClick={() => onToggleCompare(item.id)}
              >
                Remove
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparePanel;
