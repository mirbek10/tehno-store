import React from 'react'
import './Ragestration.scss'
import phone from '../../assets/image/phone1.png'
import { FaGoogle } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Regestraation(props) {
    return (
        <div className='regestration'>
            <div className='picture-phone'>
                <img src={phone} alt="" />

            </div>
            <div className="registration-form">
                <h1>{props.basik}</h1>
                <p>Enter your details below</p>
                <div>
                    <input placeholder='Name'
                        style={props.input === 'yes' ? { display: "flex" } : { display: "none" }} type="text" />
                    <input placeholder='Email or Phone Number' type="text" />
                    <input placeholder='Password' type="text" />
                </div>
                <div style={props.btn === 'grid' ? {display:"grid"}:{display:"flex", justifyContent:"space-between"}}>
                    <button style={{background:"#DB4444",color:"#FAFAFA", height:"56px", padding:"15px"}  }>{props.btnTitle}</button>
                    {
                        props.btn === 'grid' ? <button className='btn-black' style={{background:"#fff", border:"1px solid #000"}}> <FaGoogle/> Sign up with Google</button>
                        : <Link >Forget Password?</Link>
                    }
                </div>
                <span style={props.span ==='block' ? {display:"flex"} : {display:"none"}}>
                    <p>Already have account?</p>
                    <Link to='/sign-in'>Log in</Link>
                </span>
            </div>
        </div>
    )
}

export default Regestraation
