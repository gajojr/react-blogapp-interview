import React from 'react'

import { useParams } from 'react-router-dom';

import MovieCard from '../../components/MoviePageComponents/MovieCard/MovieCard.component';

const MoviePage = () => {
    let { id } = useParams();
    console.log(id)

    return (
        <div>
            <MovieCard id={id} />
        </div>
    )
}

export default MoviePage;
