import React, {useEffect} from 'react'
import './Products.scss'
import coursor12 from '../../assets/image/coursor12.png'
import { CiHeart } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { getGadgets } from '../../redux/gadgetsSlice/Gadgetslice';
import { useDispatch, useSelector } from 'react-redux';


function Products() {
    const dispatch = useDispatch();
    const {gadgets} = useSelector((state) => state.gadgets);
    useEffect(() => {
        dispatch(getGadgets())
            // .unwrap()
            // .catch((error) => {
            //     console.error("Failed to fetch gadgets:", error);
            // });
        }, [dispatch]);
        console.log(gadgets);
    return (
        <div className='corausel container'>
            {
                gadgets.map((item, index) => (

            <div key={index} className='product'>
                <div className='image'>
                    <img src={coursor12} alt="" />
                    <button className='discount'>-{item.discount}%</button>
                    <button className='heart'><CiHeart /></button>
                    <button className='eye'><LuEye /></button>
                    <button className='card'><p>Add To Cart</p></button>
                </div>
                <div className='title'>
                    <p>{item.name}</p>
                    <div>
                        <p style={{ color: "#DB4444" }}>${item.count}</p>
                        <p style={{ color: "gray", textDecoration: " line-through" }}>$160</p>
                    </div>
                    <div className='rang'>
                        {[...Array(5)].map((_, index) => (
                            <FaStar key={index} style={{color:"#FFAD33"}} />
                        ))}
                        <p>({item.rating})</p>
                    </div>
                </div>
            </div>

                ))
            }
        </div>
    )
}

export default Products
