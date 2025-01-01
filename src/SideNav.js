import React, { useState } from 'react';
import './SideNav.css';

export default function SideNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menus = [
        { to: '/r/popular', text: "Popular", icon: '🔥' },
        { to: '/r/all', text: "Home", icon: '🏠' },
    ];
    const subreddits = [
        { name: "Internet Culture (Viral)", icon: '🌐' },
        { name: "Games", icon: '🎮' },
        { name: "Q&As", icon: '❓' },
        { name: "Technology", icon: '💻' },
        { name: "Pop Culture", icon: '🎤' },
        { name: "Movies & TV", icon: '🎬' },
    ];
    const resources = [
        { name: "About Reddit", icon: 'ℹ️' },
        { name: "Advertise", icon: '📢' },
        { name: "Help", icon: '❓' },
        { name: "Blog", icon: '📝' },
        { name: "Careers", icon: '💼' },
        { name: "Press", icon: '📰' },
    ];
    const communities = [
        { name: "Communities", icon: '🌍' },
        { name: "Best of Reddit", icon: '🏆' },
        { name: "Topics", icon: '📚' },
    ];
    const policies = [
        { name: "Content Policy", icon: '📜' },
        { name: "Privacy Policy", icon: '🔒' },
        { name: "User Agreement", icon: '📝' },
    ];

    return (
        <div className="SideNav">
            <div className='SideNav-header'>
                <button className="SideNav-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <div className='SideNav-logo'>
                    <img src="https://logowik.com/content/uploads/images/reddit4236.logowik.com.webp" alt="Reddit Logo" />
                </div>
            </div>
            <div className={`SideNav-link ${isMenuOpen ? 'open' : ''}`}>
                <ul className='SideNav-menu'>
                    {menus.map(menu => (
                        <li key={menu.to}><a href={menu.to}>{menu.icon} {menu.text}</a></li>
                    ))}
                </ul>
                <ul className='SideNav-subreddit'>
                    {subreddits.map(subreddit => (
                        <li key={subreddit.name}><a href={`/r/${subreddit.name}`}>{subreddit.icon} {subreddit.name}</a></li>
                    ))}
                </ul>
                <ul className='SideNav-resources'>
                    {resources.map(resource => (
                        <li key={resource.name}><a href={`/r/${resource.name}`}>{resource.icon} {resource.name}</a></li>
                    ))}
                </ul>
                <ul className='SideNav-communities'>
                    {communities.map(community => (
                        <li key={community.name}><a href={`/r/${community.name}`}>{community.icon} {community.name}</a></li>
                    ))}
                </ul>
                <ul className='SideNav-policies'>
                    {policies.map(policy => (
                        <li key={policy.name}><a href={`/r/${policy.name}`}>{policy.icon} {policy.name}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

