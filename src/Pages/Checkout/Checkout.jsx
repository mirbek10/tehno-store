import React from 'react';
import './Checkout.scss';
import minicoursore from '../../assets/mini-coursore.png'

const Checkout = () => {
    return (
        <div className="checkout-container">
            <div className="breadcrumbs">
                Account / My Account / Product / View Cart / CheckOut
            </div>

            <div className="checkout-content">
                <div className="billing-details">
                    <h2>Billing Details</h2>
                    <form>
                        <div className="form-group">
                            <label>First Name*</label>
                            <input type="text" required />
                        </div>
                        <div className="form-group">
                            <label>Company Name</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label>Street Address*</label>
                            <input type="text" required />
                        </div>
                        <div className="form-group">
                            <label>Apartment, floor, etc. (optional)</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label>Town/City*</label>
                            <input type="text" required />
                        </div>
                        <div className="form-group">
                            <label>Phone Number*</label>
                            <input type="tel" required />
                        </div>
                        <div className="form-group">
                            <label>Email Address*</label>
                            <input type="email" required />
                        </div>
                    </form>
                </div>

                <div className="order-summary">
                    <div className="order-items">
                        <div className="order-item">
                            <div>
                                <img src={minicoursore} alt="" />
                                <span>LCD Monitor</span>
                            </div>
                            <span>$650</span>
                        </div>
                        <div className="order-item">
                            <div>
                             <img src={minicoursore} alt="" />   
                            <span>Hi Gamepad</span>
                            </div>
                            <span>$100</span>
                        </div>
                    </div>

                    <div className="order-totals">
                        <div className="total-row">
                            <span>Subtotal:</span>
                            <span>$1750</span>
                        </div>
                        <div className="total-row">
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <div className="total-row grand-total">
                            <span>Total:</span>
                            <span>$1750</span>
                        </div>
                    </div>

                    <div className="payment-method">
                        <h3>Bank</h3>
                        <p>USA</p>
                        <p>View</p>
                    </div>

                    <div className="payment-options">
                        <div className="cash-on-delivery">
                            <h3>Cash on delivery</h3>
                        </div>
                        <div className="coupon-code">
                            <input type="text" placeholder="Coupon Code" />
                            <button>Apply Coupon</button>
                        </div>
                        <button className="place-order-btn">Place Order</button>
                    </div>

                    <div className="save-info">
                        <input type="checkbox" id="save-info" />
                        <label htmlFor="save-info">Save this information for faster check-out next time</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;