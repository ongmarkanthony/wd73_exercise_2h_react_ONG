import React, { useState } from 'react';


const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validatEmail = (email) => {
        const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailPattern.test(email);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
           alert('Please fill all the fields');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        if (!validatEmail(formData.email)) {
            alert('Please enter a valid email');
            return;
        }
        console.log(formData);      
    };
    return (
        <div>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    value={formData.username}
                    onChange={handleChange} 
                    required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <button type="submit">Register</button>
                </form>
        </div>
  );
};

export default RegistrationForm;