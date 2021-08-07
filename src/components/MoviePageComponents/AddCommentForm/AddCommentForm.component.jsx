import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from '../../AuthOComponents/LoginButton/LoginButton.component';
import LogoutButton from '../../AuthOComponents/LogoutButton/LogoutButton.component';

import './AddCommentForm.styles.css';

const AddCommentForm = () => {
    const [isAuthenicated] = useState(useAuth0().isAuthenticated);

    const postComment = e => {
        e.preventDefault();
        console.log(e.target.comment.value);

        if (!isAuthenicated) {
            alert('You are not authenticated, press login to authenticate');
            return;
        }

        if (!e.target.comment.value.length) {
            alert('No text provided');
            return;
        }

        alert('Your comment is now saved');
    }

    return (
        <section className='post-comment-form-wrapper'>
            <form onSubmit={postComment} className='post-comment-form'>
                Add comment:
                <textarea className='comment-input' name="comment" cols="47" rows="10"></textarea>

                <button className='post-comment-button'>Post</button>
            </form>

            {!isAuthenicated ? <LoginButton /> : <LogoutButton />}
        </section>
    )
}

export default AddCommentForm;
