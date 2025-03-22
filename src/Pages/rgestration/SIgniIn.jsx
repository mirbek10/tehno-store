import React from 'react'
import { Link } from 'react-router-dom'
import phone from '../../assets/image/phone1.png'


function SIgniIn() {
    return (
        <div className='container'>
                    <div className='regestration'>
                        <div className='picture-phone'>
                            <img src={phone} alt="" />
            
                        </div>
                        <div className="registration-form">
                            <h1>Log in to Exclusive</h1>
                            <p>Enter your details below</p>
                            <div>
                                
                                <input placeholder='Email or Phone Number' type="text" />
                                <input placeholder='Password' type="text" />
                            </div>
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                <button style={{background:"#DB4444",color:"#FAFAFA", height:"56px", padding:"15px"}  }>Log In</button>
                                <Link >Forget Password?</Link>
                                
                            </div>
                           
                        </div>
                    </div>
        </div>
    )
}

export default SIgniIn
