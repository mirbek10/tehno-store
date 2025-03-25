import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Profile.scss';
import user1 from '../../../assets/image/user.jpg';

const Profile = () => {
    const { user } = useSelector((state) => state.auth);
    const [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage') || user?.photoURL || user1);

    useEffect(() => {
        localStorage.setItem('profileImage', profileImage);
    }, [profileImage]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="profile-container">
            <div className="profile-background"></div>
            <div className="profile-card">
                <div className="profile-avatar">
                    <label htmlFor="imageUpload" className="image-upload-label">
                        <img src={profileImage} alt="Аватар" className="profile-img" />
                    </label>
                    <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="image-upload-input"
                        style={{ display: 'none' }}
                    />
                </div>
                <div className="profile-info">
                    <h2>{user?.displayName || ''}</h2>
                    <h2>{user?.email }</h2>
                    <p>Front End Developer</p>
                </div>
                <div className="profile-social">
                    <a href={user?.github || '#'} className="social-link">GitHub</a>
                    <a href={user?.linkedin || '#'} className="social-link">LinkedIn</a>
                    <a href={user?.twitter || '#'} className="social-link">Twitter</a>
                </div>
            </div>
        </div>
    );
};

export default Profile;
