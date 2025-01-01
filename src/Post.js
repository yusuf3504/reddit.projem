import React from 'react';
import Postitem from './Postitem';
import './Post.css';

export default function Post() {
    const posts = [
        {
            id: 1,
            user: "Turkey",
            subreddits: "Türkiyenin ender güzellikleri",
            Comment_count: 235,
            image: "https://image.hurimg.com/i/hurriyet/75/770x0/5a4356707af5072ac016e239.jpg",
            timestamp: "2 saat önce",
            likes: 56,
            dislikes: 5,
            share: 117,
        },
        {
            id: 2,
            user: "Arabalar_dünyası",
            subreddits: "Hep hayal ettiğiniz, sizin olmasını istediğiniz bir araba var mı?",
            Comment_count: 235,
            image: "https://arabam-blog.mncdn.com/wp-content/uploads/2022/05/lamborghini-huracan-evo-rwd.jpg",
            timestamp: "3 saat önce",
            likes: 56,
            dislikes: 5,
            share: 117,
        },
        {
            id: 3,
            user: "Foto.academy",
            subreddits: "Fotoğraf çekmeyi seviyor musunuz?",
            Comment_count: 376,
            image: "https://www.datocms-assets.com/64859/1652958093-fotografcilik-mezunlari-nerede-1.jpg",
            timestamp: "1 hafta önce",
            likes: 143,
            dislikes: 5,
            share: 76,
        },

        {
            id: 4,
            user: "piskoloji-dünyası",
            subreddits: "Kendinizi objektif bir şekilde eleştirin",
            Comment_count: 75,
            image: "https://preview.redd.it/kendinizi-objektif-bir-%C5%9Fekilde-ele%C5%9Ftirin-v0-725r09mjmm6e1.jpeg?auto=webp&s=137ffdd4d1ea0863358e3004ad0570b8f8965fed",
            timestamp: "2 gün önce",
            likes: 465,
            dislikes: 8,
            share: 237,
        },
        {
            id: 5,
            user: "the.clash",
            subreddits: "Clash of Clanstaki en güzel dizilişiniz ne?",
            Comment_count: 75,
            image: "https://preview.redd.it/my-clash-of-clans-village-v0-vvkwgbj06s491.jpg?width=1080&crop=smart&auto=webp&s=bbd0ac96a00816397f9e28d774355b7af45897d4",
            timestamp: "2 gün önce",
            likes: 45,
            dislikes: 8,
            share: 89,
        }

    ];

    return (
        <div className='post'>
            {posts.map((post) => (
                <Postitem key={post.id} post={post} />
            ))}
        </div>
    );
}

