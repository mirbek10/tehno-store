import React from 'react';
import './Account.scss';

const Account = () => {
  return (
    <div className="account-page">
      <div className="account-header">
        <div className="breadcrumbs">Home / My Account</div>
        <div className="welcome-message">Welcome! Md Rirnel</div>
      </div>

      <div className="account-layout">
        <div className="account-sidebar">
          <div className="sidebar-section">
            <h3>Manage My Account</h3>
            <ul>
              <li className="active">My Profile</li>
              <li>Address Book</li>
              <li>My Payment Options</li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>My Orders</h3>
            <ul>
              <li>My Returns</li>
              <li>My Cancellations</li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>My WishList</h3>
          </div>
        </div>

        <div className="account-content">
          <h2 className="section-title">Edit Your Profile</h2>

          <div className="profile-form">
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text"  />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" />
              </div>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" />
            </div>

            <div className="form-group">
              <label>Address</label>
              <input type="text" />
            </div>

            <h3 className="password-title">Password Changes</h3>
            <div className="form-group">
              <label>Current Password</label>
              <input type="password" />
            </div>
            <div className="form-group">
              <label>New Password</label>
              <input type="password" />
            </div>
            <div className="form-group">
              <label>Confirm New Password</label>
              <input type="password" />
            </div>

            <div className="form-actions">
              <button className="cancel-btn">Cancel</button>
              <button className="save-btn">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;