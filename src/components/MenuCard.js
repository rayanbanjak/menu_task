 function MenuCard({ item, addToCart, darkMode })
 {
  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-4">
      <div
        className={`card h-100 shadow-sm ${
          darkMode ? "bg-secondary text-white" : ""
        }`}>
        <img
          src={item.image}
          alt={item.name}
          className="card-img-top"
          style={{ height: "220px", objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column">
          <span className="badge bg-secondary align-self-start mb-2">
            {item.category}
          </span>

          <h5 className="card-title">{item.name}</h5>
          <p className={`card-text ${
              darkMode ? "text-light" : "text-muted"
            }`}>
            {item.description}
          </p>

          <h5 className={darkMode ? "text-warning" : "text-success"}>
            {item.price}
          </h5>

          <button
            className="btn mt-auto"
            style={{
             backgroundColor: "#EC6530",
             color: "white",
              border: "none",
            }}
            onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;

