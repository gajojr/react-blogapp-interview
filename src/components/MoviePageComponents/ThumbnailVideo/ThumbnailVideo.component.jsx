import React, { useState, useEffect } from 'react'
require('dotenv').config();

const ThumbnailVideo = ({ imdbId }) => {
    const [thumbnailUrl, setThumbnailUrl] = useState('');

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://imdb-api.com/en/API/YouTubeTrailer/${process.env.REACT_APP_IMDB_API_KEY}/${imdbId}`, requestOptions)
            .then(response => response.text())
            .then(result => setThumbnailUrl(JSON.parse(result).videoUrl))
            .catch(error => console.log('error', error));
    }, []);

    return (
        <iframe width="560" height="315" src={thumbnailUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    )
}

export default ThumbnailVideo;
