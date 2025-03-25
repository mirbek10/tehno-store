import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import { FaRegHeart } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { setSearch } from '../../redux/Product/ProductSlice';
import { useTranslation } from 'react-i18next';
import { FaRegUser } from "react-icons/fa";


function Header() {
    const dispatch = useDispatch();
    const [text, setText] = useState('')
    const { t, i18n } = useTranslation();


    function handlKyeDown (e)  {
        if (e.key === 'Enter') {
            dispatch(setSearch(text))
            setText('')
        }

    }
    function HandleChangeLNG(e) {
        let lng = e.target.value
        i18n.changeLanguage(lng)
    }
    return (
        <header className='header'>
            <div className='top-Header'>
                <div className="header-content container">
                    <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        <Link>ShopNow</Link>
                    </p>
                    <select onChange={HandleChangeLNG}>
                        <option value="kg">KGZ</option>
                        <option value="en">ENG</option>
                        <option value="ru">RUS</option>
                    </select>
                </div>
            </div>
            <div className='main-header conteainer'>
                <div className="header-left">
                    <Link to="/">{t('logo')}</Link>
                    <ul>
                        <li>
                            <Link to="/">{t('home')}</Link>
                        </li>
                        <li>
                            <Link to="contact">{t('contact')}</Link>
                        </li>
                        <li>
                            <Link to="about">{t('about')} </Link>
                        </li>
                        <li>
                            <Link to='/sign-up'>{t('logIn')}</Link>
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
                         placeholder={t('search')} />
                        <CiSearch />
                    </div>
                    <div className="icons">
                        <Link to='wish-list'>
                            <FaRegHeart />
                        </Link>
                        <Link to='/cart'>
                            <FaCartArrowDown />
                        </Link>
                        <Link to="profile">
                            <FaRegUser/>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
