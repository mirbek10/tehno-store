import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa6';
import { FiEye } from "react-icons/fi";
import { GoEyeClosed } from "react-icons/go";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { auth } from '../../FireBase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { registerSuccess } from '../../redux/IconSlice/authSlice' 
import phone from '../../assets/image/phone1.png';
import './Regestration.scss';

function SigneUP() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSignUp = async () => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            if (res) {
                toast.success('User created successfully');

                // Сохраняем данные пользователя в Redux
                dispatch(registerSuccess({
                    email,
                    displayName: name,
                    photoURL: '', 
                    occupation: '', 
                    location: '',
                }));

                navigate('/profile'); 
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className='conteiner'>
            <div className='regestration'>
                <div className='picture-phone'>
                    <img src={phone} alt="Phone" />
                </div>
                <div className="registration-form">
                    <h1>Create an account</h1>
                    <p>Enter your details below</p>
                    <div>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Name'
                            type="text"
                        />
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Email or Phone Number'
                            type="email"
                        />
                        <div className="password-show">
                            <input
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                            />
                        </div>
                    </div>
                    <div style={{ display: "grid" }}>
                        <button
                            onClick={handleSignUp}
                            style={{ background: "#DB4444", color: "#FAFAFA", height: "56px", padding: "15px" }}
                        >
                            Create Account
                        </button>
                        <button className='btn-black' style={{ background: "#fff", border: "1px solid #000" }}>
                            <FaGoogle /> Sign up with Google
                        </button>
                    </div>
                    <span style={{ display: "flex" }}>
                        <p>Already have account?</p>
                        <Link to='/sign-in'>Log in</Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default SigneUP;