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
                    <img src={el.thumbnail} alt="" />
                <button className='discount'>-{el.discountPercentage}%</button>
                <button className='heart'><CiHeart /></button>
                <Link to={`/product/${el.id}`}>
                <button className='eye'><LuEye /></button>
                </Link>
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
