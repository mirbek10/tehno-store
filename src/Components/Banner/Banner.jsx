import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";

import phone from '../../assets/image/phone.png';
import smsung from '../../assets/image/large.jpg';
import ps5black from '../../assets/image/psBlack5.png';
import { getCategories } from '../../redux/Cotegory/CotegorySlice';
import './Banner.scss';
import { setCotegory } from '../../redux/Product/ProductSlice';
import { useTranslation } from 'react-i18next';

function Banner() {
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.category);

    const { t , i18n } = useTranslation();


    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    // function sendItem(item) {
    //     dispatch(setCotegory(item));
        
    // }





    return (
        <div className='banner container'>
            <div className='side-bar'>

                <ul>
                    <li onClick={() => sendItem('')}>All</li>
                    {Array.isArray(categories) && categories.length > 0 && categories.map((item, index) => (
                        <li key={index} onClick={() => sendItem(item)}>
                           {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='carousel'>
                <Carousel>
                    <Carousel.Item>
                        <div style={{ background: "black", color: "white" }} className='bg'>
                            <div>
                                <div>
                                    <FaApple style={{ fontSize: "50px" }} />
                                    <p style={{ marginTop: "15px" }}>iPhone 14 Series</p>
                                </div>
                                <h1>Up to 10% off Voucher</h1>
                                <a href="/shop">
                                    <p>Shop Now</p>
                                    <FaArrowAltCircleRight />
                                </a>
                            </div>
                            <img src={phone} alt="iPhone 14 Series" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="promo-banner">
                            <img src={smsung} alt="Samsung Promotion" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='promo-banner'>
                            <img style={{ width: "100%" }} src={ps5black} alt="PS5 Black Edition" />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}


export default Banner;