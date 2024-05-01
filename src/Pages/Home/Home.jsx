import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import CardSec from '../../Components/CardSec/CardSec'
import style from './Home.module.scss'
import axios from 'axios'
import SectionOne from '../../Components/SectionOne/SectionOne'
import Footer from '../../Components/Footer/Footer'
import Space from '../../Components/Space/Space'

const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/products?limit=6')
            .then(res => {
                setProducts(res.data.products)
            })
    }, [])


    const addToCart = (productId) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || []
        const updateCart = [...cart, productId]
        localStorage.setItem("cart", JSON.stringify(updateCart))
    }

    return (
        <div>
            <Header />
            <Space/>
            <SectionOne />
            <div className={style.cards}>
                <div className={style.top}>
                    <span>POPULAR PRODUCTS</span>
                    <h1>Our Products</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
                </div>
                {products.map(item => <CardSec item={item} addToCart={() => addToCart(item)} name='CART' />)}
            </div>
            <Footer />
        </div>
    )
}

export default Home
