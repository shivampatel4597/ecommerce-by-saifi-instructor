import React from "react";
import "../App.css";
const ProductList = ({ product, addToCart }) => {
  return (
    <div className="flex">
      {product.map((productItem, productIndex) => {
        return (
          <div style={{ width: "50%" }}>
            <div className="product-item">
              <img
                src={productItem.url}
                width="100%"
                style={{ backgroundColor: "pink" }}
                alt="items"
              />

              <p>
                {productItem.name} | {productItem.category}
              </p>
              <p>{productItem.seller}</p>
              <p>Rs. {productItem.price} /-</p>
              <button onClick={()=> addToCart(productItem)}>Add to cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
