import React from 'react'
import style from './Header.module.scss'
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router';

const Header = ({count}) => {

    const navigation = useNavigate()
    const goHome = () => {
      navigation('/')
  }
  const goBasket = () => {
    navigation('/basket')
}

    return (
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.logo}>
                    <a href="#">
                        <h1>Selling <span>.</span></h1>
                    </a>
                </div>
                <div className={style.nav}>
                    <a href="" onClick={goHome} className={style.home}>Home</a>
                    <a href="" onClick={goBasket} >Cart <p className={style.num}>{count}</p></a>
                    <a href="">About Us</a>
                    <a href="">Special</a>
                    <a href="">Testimonials</a>
                    <a href="">Blog</a>
                    <a href="">Contact</a>
                </div>
                <div className={style.hamburgerIcon}>
                    <GiHamburgerMenu />
                </div>
            </div>
        </div>
    )
}

export default Header
