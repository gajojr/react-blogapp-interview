import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from '../../AuthOComponents/LoginButton/LoginButton.component';
import LogoutButton from '../../AuthOComponents/LogoutButton/LogoutButton.component';

const AddCommentForm = () => {
    const [isAuthenicated, setIsAuthenticated] = useState(useAuth0().isAuthenticated);

    const postComment = e => {
        e.preventDefault();

        if (!isAuthenicated) {
            alert('You are not authenticated, press login to authenticate');
            return;
        }

        console.log(e.target.comment.value);
        alert('Your comment is now saved');
    }

    return (
        <div>
            <form onSubmit={postComment}>
                Add comment:
                <input type="text" name="comment" maxLength={200} />

                <button>Post</button>
            </form>

            {!isAuthenicated ? <LoginButton /> : <LogoutButton />}
        </div>
    )
}

export default AddCommentForm;
