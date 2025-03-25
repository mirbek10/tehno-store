import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../../FireBase';
import { FiEye } from "react-icons/fi";
import { GoEyeClosed } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { ChangeIcon } from '../../redux/IconSlice/Icon';
import { loginSuccess } from '../../redux/IconSlice/authSlice';
import phone from '../../assets/image/phone1.png';
import './Regestration.scss';

function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { icon } = useSelector((state) => state.icons);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async () => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            if (res) {
                toast.success('Logged in successfully');
                dispatch(loginSuccess(res.user));
                localStorage.setItem('user', JSON.stringify(res.user));
                navigate('/profile');
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

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
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Email or Phone Number'
                            type="text"
                        />
                        <div className="password-show">
                            <input
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type={icon ? "text" : "password"}
                            />
                            <div style={{ cursor: 'pointer', marginTop: "-7px" }} onClick={() => dispatch(ChangeIcon(icon))}>
                                {icon ? <FiEye /> : <GoEyeClosed />}
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <button
                            onClick={handleLogin}
                            style={{ background: "#DB4444", color: "#FAFAFA", height: "56px", padding: "15px" }}
                        >
                            Log In
                        </button>
                        <Link to="/forgot-password">Forget Password?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
