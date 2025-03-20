import React from 'react'
import './WishList.scss'
import coursore from '../../assets/image/coursoreF.png'
import { FaRegTrashAlt } from "react-icons/fa";

function WishList() {
    return (
        <div className='all-wish-list container'>
            <div className='up-info'>
                <h2>Wish List ()</h2>
                <button>Move ALL To Bag</button>
            </div>
                <div className='product'>
                    <div className='image'>
                        <img src={coursore  } alt="" />
                        <button className='heart'><FaRegTrashAlt /></button>
                        <button className='card'><p>Add To Cart</p></button>
                    </div>
                    <div className='title'>
                        <p>GP11 Shooter USB Gamepad</p>
                        <div>
                            <p style={{ color: "#DB4444" }}>$550</p>
                            
                        </div>
                        <div className='rang'>
                            
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default WishList
