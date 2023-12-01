import React, { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Auth = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const signUp = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert('signup successful')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }



    return (
        <div>

            <center>
                <form onSubmit={signUp}>
                    <h1>Sign Up </h1><br /><br />
                    <input type="email" placeholder="Enter your email address" ref={emailRef} /> <br />
                    <input type="password" placeholder="Enter your password" ref={passwordRef} /> <br />
                    <button type="submit"> Signup</button>
                </form>
            </center>

        </div>
    )
}

export default Auth