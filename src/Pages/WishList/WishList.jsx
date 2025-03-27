import React from 'react'
import './WishList.scss'
import { FaRegTrashAlt } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { removeWhish } from '../../redux/WhishList/WishListSLice';

function WishList() {
    
    const { items } = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();

    return (
        
        <div className='all-wish-list container'>
            <div className='up-info'>
                <h2>Wish List ({items.length})</h2>
                <button>Move ALL To Bag</button>

            </div>
            <div className='products-list'>
            {items.map((item)=>(
            <div className='product'>
                <div className='image'>
                    <img src={item.thumbnail} alt="" />
                    <button  onClick={()=> dispatch(removeWhish(item.id))}
                      className='heart'><FaRegTrashAlt /></button>
                    <button className='card'><p>Add to cart</p></button>
                </div>
                <div className='title'>
                    <p>GP11 Shooter USB Gamepad</p>
                    
                </div>
            </div>

            ))}

            </div>
        </div>
    )
}

export default WishList
