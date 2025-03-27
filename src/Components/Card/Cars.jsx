import React, { useCallback } from 'react';
import './Card.scss';
import { CiHeart } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addWhish } from '../../redux/WhishList/WishListSLice'; 
import { toast } from 'react-toastify';

function Card({ el }) {
    const dispatch = useDispatch();

    const addToWishlist = useCallback(() => {
        dispatch(addWhish(el));
        toast.success(`Product ${el.title} added to wishlist`);
    }, [dispatch, el]);

    const oldPrice = (el.price / (1 - el.discountPercentage / 100)).toFixed(2);

    return (
        <div className='product'>
            <div className='image'>
                <img src={el.thumbnail} alt={el.title} />
                <button className='discount'>-{el.discountPercentage}%</button>
                <button onClick={addToWishlist} className='heart'><CiHeart /></button>
                <Link to={`/product/${el.id}`}>
                    <button className='eye'><LuEye /></button>
                </Link>
                <button onClick={addToWishlist} className='card'><p>Add To Cart</p></button>
            </div>
            <div className='title'>
                <p>{el.title}</p>
                <div>
                    <p style={{ color: "#DB4444" }}>${el.price}</p>
                    <p style={{ color: "gray", textDecoration: "line-through" }}>${oldPrice}</p>
                </div>
                <div className='rang'>
                    {[...Array(5)].map((_, index) => (
                        <FaStar key={index} style={{ color: "#FFAD33" }} />
                    ))}
                    <p>({el.rating})</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
