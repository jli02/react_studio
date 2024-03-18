import "./App.css";
import { useEffect, useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import { BakeryItem } from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  // make state variable to hold the data
  const [data, setData] = useState(bakeryData);
  const [cart, setCart] = useState([]);

  const calculate_total_price = () => {
    // got thru cart and calc price
    var price = 0;
    for (let i = 0; i < cart.length; i++) {
      price = price + cart[i].price;
    }
    return <p class="body-text">Total: $ {price.toFixed(2)}</p>;
  };

  // run when component is first loaded
  // making copy of the data
  const loadData = () => {
    setData([...bakeryData]);
  };

  useEffect(() => loadData(), []);

  const addToCart = (name, price) => {
    const foodItem = {
      price: price,
      name: name,
    };
    setCart([...cart, foodItem]);
  };

  const buildElements = () => {
    const itemsList = bakeryData.map(
      (
        item,
        index // map bakeryData to BakeryItem components
      ) => (
        <BakeryItem
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
          alt="food image"
          addToCart={addToCart}
        ></BakeryItem>
      )
    );
    return itemsList;
  };

  const showCart = () => {
    if (cart.length === 0) {
      console.log("cart is empty");
      return <p class="body-text">Cart is empty</p>;
    }

    const cartList = cart.map((foodItem, index) => {
      return (
        <p key={index} class="body-text">
          {foodItem.name}, $ {foodItem.price}
        </p>
      );
    });
    return cartList;
  };

  return (
    <div className="App">
      <h1 class="title">My Bakery</h1>{" "}
      {/* TODO: personalize your bakery (if you want) */}
      <div class="bakery-and-cart">
        <div class="bakery-items">{buildElements()}</div>
        <div class="cart">
          <h2 class="header">Cart</h2>
          {showCart()}
          {calculate_total_price()}
        </div>
      </div>
    </div>
  );
}

export default App;
