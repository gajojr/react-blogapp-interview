import axios from 'axios';
import React, { useState, useEffect } from 'react';

import './MovieComments.styles.css';

const MovieComments = ({ movieId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios.get(`https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies/${movieId}/comments`);

            setComments(response.data);
        })();
    }, []);

    const extractDate = (date) => {
        const parts = date.split('-');
        console.log(parts);

        const day = parts[2].substr(0, parts[2].indexOf('T'));
        const time = parts[2].substring(parts[2].indexOf('T') + 1, parts[2].indexOf('.'));
        const month = parts[1];
        const year = parts[0];

        const newDateFormat = `${day}.${month}.${year} at ${time}`;
        return newDateFormat;
    }

    return (
        <section className='comments-container'>
            <h4>Comments:</h4>
            <hr />

            {comments && comments.map(comment => (
                <div key={comment.id}>
                    <p>{comment.text} </p>
                    <p>{extractDate(comment.createdAt)}</p>
                    <hr />
                </div>
            ))}
        </section>
    )
}

export default MovieComments;
