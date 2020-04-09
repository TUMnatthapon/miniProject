import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const Display = props => {
    return (
        <div className='bearlist-container'>
            <h1> TestProject</h1>
            <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
            
        </div>

    )
}

export default Display;