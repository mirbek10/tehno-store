import React, { useEffect } from 'react';
import './Banner.scss';
import Carousel from 'react-bootstrap/Carousel';
import bannerImage from '../../assets/image/banner.png';
import { getCategories } from '../../redux/Cotegory/CotegorySlice';
import { useDispatch, useSelector } from 'react-redux';
import phone from '../../assets/image/phone.png';
import { FaApple } from "react-icons/fa6";
import { FaArrowAltCircleRight } from "react-icons/fa";
import smsung from '../../assets/image/large.jpg'
import ps5black from '../../assets/image/psBlack5.png'


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
                    {Array.isArray(categories) && categories.map((item) => (
                        <li key={item.id}>
                            {item}
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
                        <img style={{width:"100%"}} src={ps5black} alt="" />

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