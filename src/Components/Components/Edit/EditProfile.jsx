import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../../redux/IconSlice/authSlice';

const EditProfile = ({ onClose }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({
        displayName: user?.name || '',
        occupation: user?.occupation || '',
        location: user?.location || '',
        github: user?.github || '',
        linkedin: user?.linkedin || '',
        twitter: user?.twitter || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProfile(formData)); // Обновляем профиль в Redux
        onClose(); // Закрываем модальное окно
    };

    return (
        <div className="edit-profile-modal">
            <h2>Редактировать профиль</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Имя:</label>
                    <input
                        type="text"
                        name="displayName"
                        value={formData.displayName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Профессия:</label>
                    <input
                        type="text"
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Местоположение:</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>GitHub:</label>
                    <input
                        type="url"
                        name="github"
                        value={formData.github}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>LinkedIn:</label>
                    <input
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Twitter:</label>
                    <input
                        type="url"
                        name="twitter"
                        value={formData.twitter}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Сохранить</button>
                <button type="button" onClick={onClose}>Отмена</button>
            </form>
        </div>
    );
};

export default EditProfile;