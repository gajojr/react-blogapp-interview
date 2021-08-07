import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import './MoviesList.style.css';

const MoviesList = ({ categories, movies }) => {
    const [currentCategory, setCurrentCategory] = useState('all');

    const getByCategory = (moviesToFilter) => {
        if (!moviesToFilter.length) {
            return [];
        }

        console.log('kategorija', currentCategory);

        if (currentCategory === 'all') {
            return moviesToFilter;
        }

        const filteredMovies = moviesToFilter.filter(movie => movie.categoryId.toString() === currentCategory);

        console.log(filteredMovies);

        return filteredMovies;
    }

    return (
        <main className='movies-list-container'>
            <div>
                <h3>Categories:</h3>

                <form>
                    <label className='movie-label'>
                        <input type="radio" onChange={e => setCurrentCategory(e.target.value)} checked={currentCategory.toString() === 'all' ? true : false} name='category' value={'all'} onClick={() => setCurrentCategory('all')} />
                        All
                    </label>
                    {categories.map(category => (
                        <label key={category.id} className='movie-label'>
                            <input type="radio" onChange={e => setCurrentCategory(e.target.value)} checked={currentCategory.toString() === category.id ? true : false} name='category' value={category.id} onClick={() => setCurrentCategory(category.id)} />
                            {category.name}
                        </label>
                    ))}
                    <hr />
                </form>

            </div>

            {getByCategory(movies).map((movie, idx) => (
                <div key={movie.id}>
                    <h3>{idx + 1}. {movie.name}</h3>
                    <p>{movie.description}</p>
                    <Link to={`movies/${movie.id}`} className='link'>See movie</Link>
                    <hr />
                </div>
            ))}
        </main>
    )
}

export default MoviesList;
