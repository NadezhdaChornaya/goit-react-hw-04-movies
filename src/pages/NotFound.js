import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <p>Oops! This page was not found. Here is the <Link to='/'>link</Link> to the home page.</p>
        </div>
    )
}
export default NotFound