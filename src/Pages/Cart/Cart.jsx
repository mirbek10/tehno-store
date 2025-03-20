import React from 'react'
import './Cart.scss'
import coursore from '../../assets/image/coursoreF.png'

function Cart() {
    return (
        <div className='cart container'>

            <h3><span>Home /</span> Cart</h3>
            <div className='cart-items'>
                <div className='dicription'>
                    <h4>Product</h4>
                    <h4>Price</h4>
                    <h4>Quantity</h4>
                    <h4>Subtotal</h4>
                </div>
                <div className='item'>
                    <div>
                        <img src={coursore} alt='product' />
                        <h4>H1 Gamepad</h4>
                    </div>
                    <p> $199.99</p>

                    <div className='item-controls'>
                        <input type='number' placeholder='1' min='1' max='10' />
                    </div>

                    <p> $199.99</p>

                </div>
            </div>
            <div className='btn-div'>
                <button>Return To Shop</button>
                <button>Update Cart</button>
            </div>
            <div className='down-info'>
                <div>
                    <input type="text" placeholder='Coupon Code' />
                    <button>Apply Coupon</button>
                </div>
                <div className='total'>
                    <h2>Cart Total</h2>
                    <div>
                        <h3>Subtotal:</h3>
                        <h3>$1750</h3>
                    </div>
                    <div>
                        <h3>Shipping:</h3>
                        <h3>Free</h3>
                    </div>
                    <div>
                        <h3>Total:</h3>
                        <h3>$1750</h3>
                    </div>
                    <button>Procees to checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
