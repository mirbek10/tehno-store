import React from 'react';
import './Footer.scss';
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { PiPaperPlaneRightLight } from "react-icons/pi";
import  BsQrCode  from '../../assets/qr-code.jpg';
import { FaFacebookF } from "react-icons/fa6";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { PiPaperPlaneRightThin } from "react-icons/pi";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h2>Exclusive</h2>
                <div className="subscribe">
                    <h3>Subscribe</h3>
                    <p>Get 10% off your first order</p>
                    <div style={{ display: "flex", position: "relative" }} >
                        <input type="email" placeholder="Enter your email" />
                        <PiPaperPlaneRightLight className='icon-inpt' style={{ marginTop: "10px", fontSize: "20px" }} />
                        
                    </div>
                </div>
            </div>

            <div className="footer-section">
                <h3>Support</h3>
                <ul>
                    <p>Ill Bijoy sorani, Dhaka,</p>
                    <p>DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </ul>
            </div>

            <div className="footer-section">
                <h3>Account</h3>
                <ul>
                    <li>My Account</li>
                    <li>Login / Register</li>
                    <li>Cart</li>
                    <li>Wishlist</li>
                    <li>Shop</li>
                </ul>
            </div>

            <div className="footer-section">
                <h3>Quick Link</h3>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="footer-section">
                <h3>Download App</h3>
                <p style={{fontSize:"12px"}}>Score $3 with App New User Only</p>
                <div className="app-links">
                    <div>
                        <img src={BsQrCode} alt="" />
                    </div>
                    <div>
                    <button>
                        <FaGooglePlay size="23" />
                        <p>GET ON <span>Google Play</span></p></button>
                    <button>
                        <FaApple size='23' />
                        <p>Download on <span>the App Store</span></p>
                    </button>
                    </div>
                </div>
                    <div className='icons-div' style={{display:"flex", justifyContent:"space-around"}}>
                        <FaFacebookF className='icons'/>
                        <SlSocialTwitter  className='icons'/>
                        <FaInstagram  className='icons'/>
                        <FaLinkedinIn  className='icons'/>
                    </div>
            </div>
        </footer>
    );
};

export default Footer;