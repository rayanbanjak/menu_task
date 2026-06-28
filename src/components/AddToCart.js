import { useState } from "react";
import FilterCategory from "./FilterCategory";
import DarkMode from "./DarkMode";

function AddToCart() {
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price.replace("$", "")),
    0
  );

  return (
    <div
      className={`container mt-5 p-4 rounded ${
        darkMode ? "bg-dark text-white" : "bg-light text-dark"
      }`}>
      <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />

      
     <div className="alert" style={{
    backgroundColor: darkMode ? "#d85428" : "#EC6530",
    color: "white",
    border: "none", }}>
         Cart Items: <strong>{cart.length}</strong> | Total:{" "}
            <strong>${totalPrice}</strong>
        </div>
   

      <FilterCategory addToCart={addToCart} darkMode={darkMode} />
      {cart.length > 0 && (
        <div className="mt-5">
          <h3>Your Cart</h3>
          <ul className="list-group">
            {cart.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center">
              
                <div>
                  <strong>{item.name}</strong>
                  <br />
                  {item.price}
                </div>

                <button
                  className="btn mt-auto"
                  style={{
                  backgroundColor: "#EC6530",
                  color: "white",
                  border: "none",
                  }}
                  onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AddToCart;