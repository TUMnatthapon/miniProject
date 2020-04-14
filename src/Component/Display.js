import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const Display = props => {
    return (
        <div className="container">
        <h1>FirebaseUI Test 1</h1>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
          <img id="photo" className="pic" src={firebase.auth().currentUser.photoURL}/>
        <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
      </div>

    )
}

export default Display;