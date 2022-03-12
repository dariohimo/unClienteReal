import React from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
   
   
        <img className={styles.logoSoyPanela} src="https://soypanela.com/wp-content/uploads/2020/02/cropped-LOGOTIPOS-WEB-02_Mesa-de-trabajo-1-7.png"  alt="Logo SoyPanela" />
       
      <Cart />
      <Products />

      
      
   
    




    </div>
  );
};

export default Home;
