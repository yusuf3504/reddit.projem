import React, { useState } from 'react';
import './Postitem.css';
export default function Postitem({ post }) {
    const [likes, setLikes] = useState(post.likes);
    const [dislikes, setDislikes] = useState(post.dislikes);
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [comments, setComments] = useState(post.Comment_count);
    const [shares, setShares] = useState(post.share);
    const [showMessages, setShowMessages] = useState(false);
    const [message, setMessage] = useState('');
    const [messageList, setMessageList] = useState([]);

    const handleLike = () => {
        if (liked) {
            setLikes(likes - 1);
            setLiked(false);
        } else {
            if (disliked) {
                setDislikes(dislikes - 1);
                setDisliked(false);
            }
            setLikes(likes + 1);
            setLiked(true);
        }
    };

    const handleDislike = () => {
        if (disliked) {
            setDislikes(dislikes - 1);
            setDisliked(false);
        } else {
            if (liked) {
                setLikes(likes - 1);
                setLiked(false);
            }
            setDislikes(dislikes + 1);
            setDisliked(true);
        }
    };

    const handleComment = () => {
        setShowMessages(!showMessages);
    };

    const handleShare = () => {
        setShares(shares + 1);
    };

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            setMessageList([...messageList, message]);
            setMessage('');
        }
    };

    const handleCancelMessage = () => {
        setMessage('');
    };

    return (
        <div className='post'>
            <div className='post-header'>
                <h2>{post.title}</h2>
                <span className='username'>{post.user}</span>
                <span className='timestamp'>{post.timestamp}</span>
                <span className='subreddit'>{post.subreddits}</span>
            </div>
            <img src={post.image} alt={post.title} className='post-image' />
            <div className='post-actions'>
                <button onClick={handleLike}>👍 Likes: {likes}</button>
                <button onClick={handleDislike}>👎 Dislikes: {dislikes}</button>
                <button onClick={handleComment}>💬 Comment: {comments}</button>
                <button onClick={handleShare}><i className="fas fa-paper-plane"></i> Share: {shares}</button>
            </div>
            {showMessages && (
                <div className='message-section'>
                    <div className='messages'>
                        {messageList.map((msg, index) => (
                            <div key={index} className='message'>{msg}</div>
                        ))}
                    </div>
                    <div className='message-input-container'>
                        <input
                            type='text'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder='Mesajınızı yazın...'
                        />
                        <span className='icon-container'>
                            <button onClick={handleSendMessage}><span className="material-icons">send</span></button>
                            <button onClick={handleCancelMessage}><span className="material-icons">cancel</span></button>
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}


