import React, { useState } from 'react'
import style from './CardSec.module.scss'
import { FaStar } from "react-icons/fa";

const CardSec = ({ item, addToCart, name }) => {


    return (
        <div className={style.cards}>
            <div className={style.card}>
                <img src={item.thumbnail} alt="image" />
                <p className={style.hoodie}>{item.title}</p>
                <div className={style.numbers}>
                    <FaStar className={style.star} />
                    <span>{item.rating}</span>
                    <div className={style.heart}>
                        <p>$ <span> {item.price}</span></p>
                    </div>

                </div>
                <p className={style.comment}>{item.description}</p>
                <div className={style.buttons}>
                    <button className={style.cartButton}  onClick={addToCart}   >{name}</button>
                    <button className={style.viewButton}>View</button>
                </div>
            </div>
        </div>
    )
}

export default CardSec
