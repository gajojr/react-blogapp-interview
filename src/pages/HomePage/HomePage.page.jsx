import React, { useState, useEffect } from 'react'
import axios from 'axios';

import MoviesList from '../../components/HomePageComponents/MoviesList/MoviesList.component';


const HomePage = () => {
    const [categories, setCategories] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        (async () => {
            const categoriesResponse = await axios.get('https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/categories');
            setCategories(categoriesResponse.data);

            const moviesResponse = await axios.get('https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies');
            setMovies(moviesResponse.data);
        })();
    }, []);

    return (
        <div>
            <MoviesList categories={categories} movies={movies} />
        </div>
    )
}

export default HomePage;