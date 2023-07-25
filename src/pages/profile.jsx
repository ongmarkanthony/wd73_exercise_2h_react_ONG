import React, { useState } from 'react';

const ProfileCreation = () => {
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    age: '',
    birthday: '',
    address: '',
    address1: '',
    address2: '',
    city: '',
    country: '',
    zipCode: '',
    mobileNumber: '',
    personalEmail: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const createProfile = (profileData) => {
    alert('Profile Successfully Created');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createProfile(profileData);
  };

  return (
    <div>
      <h2>Profile Creation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={profileData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={profileData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={profileData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={profileData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="birthday">Birthday:</label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={profileData.birthday}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={profileData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="address1">Address 1:</label>
          <input
            type="text"
            id="address1"
            name="address1"
            value={profileData.address1}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="address2">Address 2:</label>
          <input
            type="text"
            id="address2"
            name="address2"
            value={profileData.address2}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={profileData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={profileData.country}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="zipCode">Zip Code:</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={profileData.zipCode}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={profileData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="personalEmail">Personal Email Address:</label>
          <input
            type="email"
            id="personalEmail"
            name="personalEmail"
            value={profileData.personalEmail}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default ProfileCreation;
