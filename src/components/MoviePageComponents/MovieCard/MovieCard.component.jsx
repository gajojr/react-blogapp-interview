import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieComments from '../MovieComments/MovieComments.component';

const MovieCard = ({ id }) => {
    const [movie, setMovie] = useState('');

    useEffect(() => {
        (async () => {
            const response = await axios.get(`https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies/${id}`);
            console.log(response);
            setMovie(response.data);
        })();
    }, []);

    return (
        <div>
            <h1>{movie.name}</h1>
            <p>{movie.description}</p>
            <img src={movie.imageUrl} alt="movie thumbnail" />

            <MovieComments movieId={id} />
        </div>
    )
}

export default MovieCard;
