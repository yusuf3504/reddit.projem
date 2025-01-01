import React, { useState } from 'react';
import SideNav from './SideNav';
import Post from './Post';
import './App.css';

export default function App() {
    const [showLogin, setShowLogin] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(!showLogin);
    };

    const handleCloseClick = () => {
        setShowLogin(false);
    };

    return (
        <div className='app'>
            <div className='main-container'>
                <div className='sidenav-container'>
                    <SideNav />
                </div>

                <div className='content-container'>
                    <div className='search-login'>
                        <div className='header-search'>
                        <input className='input' type="text" name="search" placeholder='Search Reddit' /> <i className='fas fa-search search-icon'></i>

                        </div>


                        <button className='login-button' onClick={handleLoginClick}>Log In</button>
                    </div>
                    {showLogin && (
                        <div className='login-overlay'>
                            <div className='login-form'>
                                <span className='close-button' onClick={handleCloseClick}>&times;</span>
                                <button className='social-login google'>
                                    <i className='fab fa-google'></i> Google ile Giriş Yap
                                </button>
                                <button className='social-login phone'>
                                    <i className='fas fa-phone'></i> Telefon Numarası ile Giriş Yap
                                </button>
                                <button className='social-login apple'>
                                    <i className='fab fa-apple'></i> Apple ile Giriş Yap
                                </button>
                                <div className='email-login'>
                                    <input type="email" placeholder='E-posta' />
                                    <input type="password" placeholder='Şifre' />
                                    <button className='submit-button'>Giriş Yap</button>
                                    <a href='#' className='forgot-password'>Şifremi Unuttum</a>
                                </div>
                            </div>
                        </div>
                    )}
                    <Post />
                </div>
            </div>
        </div>
    );
}





