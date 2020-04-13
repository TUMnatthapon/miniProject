import React, { Component} from "react";
import './App.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import { auth as firebaseuiAuth } from 'firebaseui';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Display from './Component/Display';
import Modal from 'react-awesome-modal';
import Slideshow from "./Slideshow/Slideshow";
import slide1 from "./Photo/slide1.jpg";
import slide2 from "./Photo/slide2.jpg";
import slide3 from "./Photo/slide3.jpg";
import slide4 from "./Photo/slide4.jpg";
import slide5 from "./Photo/slide5.jpg";

const firebaseConfig = {
    apiKey: "AIzaSyDHHmtR1GeaSHbEd9r9jhOIzGK9u99cUyM",
    authDomain: "login-auth-3d1f0.firebaseapp.com",
    databaseURL: "https://login-auth-3d1f0.firebaseio.com",
    projectId: "login-auth-3d1f0",
    storageBucket: "login-auth-3d1f0.appspot.com",
    messagingSenderId: "403377432586"
};

firebase.initializeApp(firebaseConfig);

const s = {
    container: "screen dGray col",
    header: "flex1 Center Size font3 click",
    main: "flex8 white",
    footer: "flex1 Center font3"
};

const slides = [slide1, slide2, slide3, slide4, slide5];

class App extends Component {
    state = { isSignedIn: false };
    uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebaseuiAuth.AnonymousAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    };

    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => this.setState({ isSignedIn: !!user })
        );
    }
    componentWillUnmount() {
        this.unregisterAuthObserver();
    }


    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }
    
    render() {
        if (!this.state.isSignedIn) {
            
            return (
                
                    <div className={s.container}>
                        <div className={s.header} onClick={() => this.openModal()} >Click To Login.</div>
                        <Modal  visible={this.state.visible}  width="300" height="230" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                            <div className="font1">Please Select Login</div>
                            <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
                        </Modal>
                        <div className={s.main}>
                            <Slideshow slides={slides} />
                        </div>
                        <div className={s.footer}>◄ DEVELOPER - BY NATTHAPON CHUAISENG ►</div>
                    </div>
                
            );
        }
        
        return (
            <div className="container">
                <Display />
            </div>
        );
    }
}

export default App;
