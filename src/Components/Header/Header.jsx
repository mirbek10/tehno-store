import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import { FaRegHeart } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../../redux/Product/ProductSlice';


function Header() {
    const dispatch = useDispatch();
    const [text, setText] = useState('')


    function handlKyeDown (e)  {
        if (e.key === 'Enter') {
            dispatch(setSearch(text))
            setText('')
        }
    }
    return (
        <header className='header'>
            <div className='top-Header'>
                <div className="header-content container">
                    <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        <Link>ShopNow</Link>
                    </p>
                    <select>
                        <option value="kg">KGZ</option>
                        <option value="en">ENG</option>
                        <option value="ru">RUS</option>
                    </select>
                </div>
            </div>
            <div className='main-header conteainer'>
                <div className="header-left">
                    <Link to="/">Exclusive</Link>
                    <ul>
                        <li>
                            <Link to="/">home</Link>
                        </li>
                        <li>
                            <Link to="contact">contact</Link>
                        </li>
                        <li>
                            <Link to="about">about</Link>
                        </li>
                        <li>
                            <Link to='/sign-up'>Sign Up</Link>
                        </li>
                    </ul>
                </div>
                <div className="header-right">
                    <div className="search">
                        <input
                        value={text}
                        onChange={(e)=>setText(e.target.value)}
                        onKeyDown={handlKyeDown}
                        type="text"
                         placeholder='What are you looking for?' />
                        <CiSearch />
                    </div>
                    <div className="icons">
                        <Link to='wish-list'>
                            <FaRegHeart />
                        </Link>
                        <Link to='/cart'>
                            <FaCartArrowDown />
                        </Link>
                        
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
