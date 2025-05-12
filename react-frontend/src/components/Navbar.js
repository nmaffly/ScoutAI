import React from 'react';
import logo from '../assets/ScoutAI_logo_small_transparent.png'; 

const Navbar = ({ onNavigate }) => {
    const navbarStyle = {
        backgroundColor: '#f5f5f5', // Light background
        color: '#4b0082', // Darker purple text
        fontFamily: "'Archivo Black', sans-serif", // Updated font
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '2px solid #dcdcdc'
    };

    const buttonStyle = {
        backgroundColor: '#4b0082', // Purple button background
        color: 'white',
        border: 'none',
        padding: '8px 16px',
        margin: '0 5px',
        borderRadius: '4px',
        cursor: 'pointer',
    };

    const buttonHoverStyle = {
        backgroundColor: '#ff0000', // Red button background on hover
    };

    const logoStyle = {
        height: '60px', 
        marginLeft: '10px', // Add spacing between text and logo
    };

    const titleContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '0px', 
    };

    const titleStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#000', // Black text
        fontFamily: "'Archivo Black', sans-serif",
    };

    return (
        <div className="navbar" style={navbarStyle}>
            <div className="navbar-left" style={titleContainerStyle}>
                <span style={titleStyle}>ScoutAI</span>
                <img src={logo} alt="ScoutAI Logo" style={logoStyle} />
            </div>
            <div className="navbar-right">
                <button
                    className="nav-link"
                    style={buttonStyle}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                    onClick={() => onNavigate('players')}
                >
                    Chatbot
                </button>
                <button
                    className="nav-link"
                    style={buttonStyle}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                    onClick={() => onNavigate('chart')}
                >
                    Chart
                </button>
            </div>
        </div>
    );
};

export default Navbar;