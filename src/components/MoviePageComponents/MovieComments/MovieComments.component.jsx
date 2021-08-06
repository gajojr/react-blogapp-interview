import axios from 'axios';
import React, { useState, useEffect } from 'react'

const MovieComments = ({ movieId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios.get(`https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1/movies/${movieId}/comments`);

            setComments(response.data);
        })();
    }, [])

    return (
        <div>
            <h4>Comments:</h4>

            {comments && comments.map(comment => (
                <p key={comment.id}>{comment.text}</p>
            ))}
        </div>
    )
}

export default MovieComments;
