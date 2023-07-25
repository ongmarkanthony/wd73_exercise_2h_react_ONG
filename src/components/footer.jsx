import React from 'react'

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; 2023 - All Rights Reserved</p>
        </footer>
    );
};

const footerStyle = {
    backgroundColor: 'red',
    padding : '1rem',
    textAlign: 'center',
    color: 'white',
    position: 'fixed',
    bottom: '0',
    width: '100%'
}

export default Footer;