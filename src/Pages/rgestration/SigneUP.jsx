import React from 'react'
import { Link } from 'react-router-dom'
import phone from '../../assets/image/phone1.png'
import { FaGoogle } from "react-icons/fa6"
import './Regestration.scss'

function SigneUP() {
    return (
        <div className='conteiner'>
                    <div className='regestration'>
                        <div className='picture-phone'>
                            <img src={phone} alt="" />
            
                        </div>
                        <div className="registration-form">
                            <h1>Create an account</h1>
                            <p>Enter your details below</p>
                            <div>
                                <input placeholder='Name' type="text" />
                                <input placeholder='Email or Phone Number' type="text" />
                                <input placeholder='Password' type="text" />
                            </div>
                            <div style={ {display:"grid"}}>
                                <button style={{background:"#DB4444",color:"#FAFAFA", height:"56px", padding:"15px"}  }>Create Account</button>
                                     <button className='btn-black' style={{background:"#fff", border:"1px solid #000"}}> <FaGoogle/> Sign up with Google</button>
                                
                            </div>
                            <span style={{display:"flex"}}>
                                <p>Already have account?</p>
                                <Link to='/sign-in'>Log in</Link>
                            </span>
                        </div>
                    </div>
        </div>
    )
}

export default SigneUP
