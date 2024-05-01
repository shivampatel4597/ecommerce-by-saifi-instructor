import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";

import { useState } from "react";
function App() {
  const [product, setProduct] = useState([
    {
      name: "iPhone 13 Pro",
      category: "Smartphone",
      seller: "Apple Store",
      price: 999,
      url: "https://via.placeholder.com/150x100",
    },
    {
      name: "Samsung Galaxy S21 Ultra",
      category: "Smartphone",
      seller: "Samsung Store",
      price: 1199,
      url: "https://via.placeholder.com/150x100",
    },
    {
      name: "Google Pixel 6 Pro",
      category: "Smartphone",
      seller: "Google Store",
      price: 899,
      url: "https://via.placeholder.com/150x100",
    },
    {
      name: "OnePlus 9 Pro",
      category: "Smartphone",
      seller: "OnePlus Store",
      price: 969,
      url: "https://via.placeholder.com/150x100",
    },
    {
      name: "Xiaomi Mi 11 Ultra",
      category: "Smartphone",
      seller: "Xiaomi Store",
      price: 1199,
      url: "https://via.placeholder.com/150x100",
    },
  ]);

  const [cart, setCart] = useState([]);
const[showCart, setShowCart]  = useState(false)
  const addToCart = (data) => {
    // console.log(data);
    // setCart([...cart, data]);
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleShow = (value)=>{
    setShowCart(value);
  }

  return (
    <div>
      <Header count={cart.length}  handleShow={handleShow}/>
      {
        showCart ?   <CartList cart={cart} /> :  <ProductList product={product} addToCart={addToCart} />
      }
     
     
    </div>
  );
}

export default App;
