import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";

import phone from '../../assets/image/phone.png';
import smsung from '../../assets/image/large.jpg'
import ps5black from '../../assets/image/psBlack5.png'
import { getCategories } from '../../redux/Cotegory/CotegorySlice';
import './Banner.scss';
import { Link } from 'react-router-dom';


function Banner() {
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.category);

    useEffect(() => {
        dispatch(getCategories())
            .unwrap()
            .catch((error) => {
                console.error("Failed to fetch categories:", error);
            });
    }, [dispatch]);

    // console.log(categories);

    return (
        <div className='banner container'>
            <div className='side-bar'>
                <ul>
                    {Array.isArray(categories) && categories.map((item, index) => (
                        <li key={index}>
                            <Link to={`/product/${item}`}>
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='corousel'>
                <Carousel>
                    <Carousel.Item >
                        {/* <img src={bannerImage} alt="Promotional Banner" /> */}
                        <div style={{ background: "black", color: "white" }} className='bg'>
                            <div>
                                <div>
                                    <FaApple style={{ fontSize: "50px" }} />
                                    <p style={{ marginTop: "15px" }}>iPhone 14 Series</p>
                                </div>
                                <h1>Up to 10% off Voucher</h1>
                                <a href=""><p>Shop Now</p><FaArrowAltCircleRight /> </a>
                            </div>
                            <img src={phone} alt="" />
                        </div>
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="promo-banner">
                            <img src={smsung} alt="" />
                        </div>
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='promo-banner'>
                            <img style={{ width: "100%" }} src={ps5black} alt="" />

                        </div>
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Banner;