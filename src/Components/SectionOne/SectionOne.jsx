import React from 'react'
import style from './SectionOne.module.scss'

const SectionOne = () => {
    return (
        <div>
            <section className={style.secOne}>
                <div className={style.container}>
                    <h1>Shop With Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                    <div className={style.btn}>
                        <button className={style.shop}>Shop Now</button>
                        <button>Club Membership</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SectionOne
