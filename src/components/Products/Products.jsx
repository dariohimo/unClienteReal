import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from "./Products.module.scss";
import { ProductsData } from "../../data/Data";

const Products = () => {
  /* Traemos del context la funcion para agregar un producto */
  const { AddItemToCart } = useContext(CartContext);
  
  return (
    <div className={styles.productsContainer}>
      {ProductsData.map((product, i) => (
        <div key={i} className={styles.product}>
          <img src={product.img} alt={product.name} />
          <div>
           
            <p>
              {product.name} - ${product.price}
            </p>
          </div>
          
          <button onClick={() => AddItemToCart(product)}>Pedido</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
