import React, { useState } from 'react';
import './ProductDetails.scss';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../redux/Product/ProductDetailsSlice';
import Loading from '../../Components/Loading/Loading';
import { FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { GrUpdate } from "react-icons/gr";

const productSize = ["XS", "S", 'M', "L", "XL"];

function ProductDetails() {
    const [selectedSize, setSelectedSize] = useState(null);
    const [color, setColor] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState(null); // Состояние для основной картинки
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product, loading, error } = useSelector((state) => state.details);

    useEffect(() => {
        if (id) {
            dispatch(getProductDetails(id));
        }
    }, [dispatch, id]);

    // Устанавливаем основную картинку при загрузке продукта
    useEffect(() => {
        if (product) {
            setMainImage(product.thumbnail);
        }
    }, [product]);

    if (loading) {
        return <div><Loading /></div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>No product found</div>;
    }

    const ratingStars = Math.round(product.rating);
    const ratingStarsArray = Array.from({ length: ratingStars }, (_, index) => index + 1);

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    // Функция для изменения основной картинки
    const handleImageClick = (image) => {
        setMainImage(image);
    };

    return (
        <div className="product-details container">
            <div className='details-up-info'>
                <h5>Account / {product.tags[0]} / {product.title}</h5>
            </div>
            <div className='details-down-info'>
                <div className="details-left">
                    <div className="details-left-images">
                        {product.images.slice(0, 4).map((image, index) => (
                            <div key={index} onClick={() => handleImageClick(image)}>
                                <img src={image} alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <div className="details-left-main-image">
                        <img src={mainImage} alt="Main Product" />
                    </div>
                </div>
                <div className="details-right">
                    <h4>{product.title}</h4>
                    <div className="rating">
                        {ratingStarsArray.map((star) => (
                            <FaStar key={star} style={{ color: "#FFAD33" }} />
                        ))}
                        <p>(150 Reviews)</p>
                        <h6>In Stock</h6>
                    </div>
                    <h5>Price: {product.price}$</h5>
                    <p className='description'>{product.description}</p>
                    <div className='change-color'>
                        <label>Change color:</label>
                        <div className='color'>
                            <div onClick={() => setColor(false)}
                                style={color === false ? { border: "3px solid #000" } : {}} className='color-box1'>
                                <div className='box1'></div>
                            </div>
                            <div onClick={() => setColor(true)}
                                style={color === true ? { border: "3px solid #000" } : {}} className='color-box2'>
                                <div className='box2'></div>
                            </div>
                        </div>
                    </div>
                    <div className="size-change">
                        <label>Size:</label>
                        <div className="sizes">
                            {productSize.map((size) => (
                                <button
                                    key={size}
                                    className={`size ${selectedSize === size ? "selected" : ""}`}
                                    onClick={() => handleSizeClick(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='buy'>
                        <div className='quantity'>
                            <button onClick={() => setQuantity(quantity - 1)}
                                disabled={quantity <= 1}
                            >-</button>
                            <p>{quantity}</p>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                disabled={quantity >= 10}
                            >+</button>
                        </div>
                        <button className='buy-btn'>Buy Now</button>
                        <button className='heart'>
                            <CiHeart />
                        </button>
                    </div>
                    <div className="delivery-info">
                        <div className='icons'>
                            <TbTruckDelivery style={{ fontSize: "36px" }} />
                            <GrUpdate style={{ fontSize: "36px" }} />
                        </div>
                        <div>
                            <h2>Free Delivery</h2>
                            <p>Enter your postal code for Delivery Availability</p>
                            <h3>Return Delivery</h3>
                            <p>Free 30 Days Delivery Returns. <a href="/details">Details</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;