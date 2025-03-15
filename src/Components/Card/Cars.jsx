import React from 'react'
import './Card.scss'

import coursor12 from '../../assets/image/coursor12.png'

import { CiHeart } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function Card({ el }) {
    return (
        <div className='product'>
            <div className='image'>
                <Link to={`/product/${el.category}`}>
                    <img src={el.images} alt="" />
                </Link>
                <button className='discount'>-{el.discountPercentage}%</button>
                <button className='heart'><CiHeart /></button>
                <button className='eye'><LuEye /></button>
                <button className='card'><p>Add To Cart</p></button>
            </div>
            <div className='title'>
                <p>{el.title}</p>
                <div>
                    <p style={{ color: "#DB4444" }}>${el.price}</p>
                    <p style={{ color: "gray", textDecoration: " line-through" }}>$160</p>
                </div>
                <div className='rang'>
                    {[...Array(5)].map((_, index) => (
                        <FaStar key={index} style={{ color: "#FFAD33" }} />
                    ))}
                    <p>({el.rating})</p>
                </div>
            </div>
        </div>
    )
}

export default Card
