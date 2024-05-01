import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import style from './Footer.module.scss'
import shoes from '../assets/images/shoes1.jpg'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className={style.container}>
                    <div className={style.top}>
                        <div className={style.about}>
                            <h1>ABOUT US</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
                        </div>
                        <div className={style.quick}>
                            <h1>QUICK LINKS</h1>
                            <a href="">About Us</a>
                            <a href="">Services</a>
                            <a href="">Testimonials</a>
                            <a href="">Contact Us</a>
                        </div>
                        <div className={style.follow}>
                            <h1>FOLLOW US</h1>
                            <div className={style.icons}>
                                <div className={style.icon}>
                                    <FaFacebookF />
                                </div>
                                <div className={style.icon}>
                                    <FaTwitter />
                                </div>
                                <div className={style.icon}>
                                    <FaInstagram />
                                </div>
                                <div className={style.icon}>
                                    <FaLinkedinIn />
                                </div>
                            </div>
                        </div>
                        <div className={style.featured}>
                            <h1>FEATURED PRODUCT</h1>
                            <img src={shoes} alt="man" />
                            <h1>Leather Brown Shoe</h1>
                            <h1>$60.00</h1>
                            <button>ADD TO CART</button>
                        </div>
                    </div>
                    <div className={style.bottom}>
                        <p>Copyright ©2024 All rights reserved | This template is made with <a href=""><FaHeart /></a>  by <a href="">Colorlib</a></p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
