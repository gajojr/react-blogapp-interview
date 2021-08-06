import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const MoviesList = ({ categories, movies }) => {
    const [currentCategory, setCurrentCategory] = useState('');

    const getByCategory = (moviesToFilter) => {
        if (!moviesToFilter.length) {
            return [];
        }

        console.log('kategorija', currentCategory);

        if (currentCategory === '') {
            return moviesToFilter;
        }

        const filteredMovies = moviesToFilter.filter(movie => movie.categoryId.toString() === currentCategory);

        console.log(filteredMovies);

        return filteredMovies;
    }

    return (
        <div>
            <div>
                <h3>Categories:</h3>

                <form>
                    {categories.map(category => (
                        <label key={category.id} style={{ marginLeft: 5, display: 'flex', alignItems: 'center' }}>
                            {category.name}
                            <input type="radio" onChange={e => setCurrentCategory(e.target.value)} checked={currentCategory.toString() === category.id ? true : false} name='category' value={category.id} onClick={() => setCurrentCategory(category.id)} />
                        </label>
                    ))}
                </form>

            </div>

            {getByCategory(movies).map(movie => (
                <div key={movie.id}>
                    <h3>{movie.name}</h3>
                    <p>{movie.description}</p>
                    <Link to={`movies/${movie.id}`}>See movie</Link>
                </div>
            ))}
        </div>
    )
}

export default MoviesList;
