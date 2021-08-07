import React, { useState, useEffect } from 'react'
import './ThumbnailVideo.styles.css';

import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner.component';

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
            .then(result => {
                console.log(JSON.parse(result).videoUrl.replace('watch', 'embed'));
                setThumbnailUrl(JSON.parse(result).videoUrl.replace('watch?v=', 'embed/'));
            })
            .catch(error => console.log('error', error));
    }, [imdbId]);

    if (!imdbId) {
        return <LoadingSpinner />
    }

    return (
        <iframe className='trailer' src={thumbnailUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    )
}

export default ThumbnailVideo;
