import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import CardSec from '../../Components/CardSec/CardSec';
import style from './Basket.module.scss'
import Footer from '../../Components/Footer/Footer';
import Space from '../../Components/Space/Space';


const Basket = () => {


  const [Products, setProducts] = useState([])

  

  const getProducts = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setProducts(cart);
  }

  useEffect(() => {
    getProducts()
  }, []);

  const deleteCart = (productId) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.slice(0);
    updatedCart.splice(productId, 1);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    getProducts();
  }


  return (
    <div className={style.bskt}>
      <Header />
      <Space />
      <h1>Products in Your Cart</h1>
      <div className={style.cards}>
        {Products.map(item => <CardSec item={item} addToCart={() => deleteCart(item)} name="Delete" />)}
      </div>
      <Footer />
    </div>
  )
}

export default Basket
