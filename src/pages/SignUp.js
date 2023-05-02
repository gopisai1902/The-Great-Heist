import React, { useState } from 'react';
import { auth, db } from '../firebase/Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {addDoc, collection } from 'firebase/firestore'
import loading from '../assets/images/loading.gif'
import signUp_img from '../assets/images/signup_img.jpg'

const SignUp = () => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const registerWithEmailAndPassword = async () => {
        try {
            setIsLoading(true);
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                firstname: firstname,
                lastname: lastname,
                email: email,
                trials: 0,
                duration: 0,
            });
            setIsLoading(false);
        } catch (err) {
            console.error(err);
            alert(err.message);
            setIsLoading(false);
            return 0;
        }
        return 1;
    }

    const handleSignUp = async (e) => {
        e.preventDefault()
        if (password === verifyPassword) {
            if(password.length >= 6){
                const status = await registerWithEmailAndPassword(e)
                if(status){
                    alert('Registration Successful')
                    window.location.replace('/')
                }
            }
        }
        else{
            alert("Password didn't match")
        }
    }

    return (
        <div style={
            { 
                backgroundImage: `url(${signUp_img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            } 
        }className='m-5'>
            <h1 className='text-white m-5'>SignUp</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} className='m-5'>
            {
                isLoading
                ?
                <div>
                    <img className='mx-auto d-block' src={loading} alt='loading...' /> 
                </div>
                :
                <form>
                    <div className="mb-3">
                        <label for="firstname" className="form-label text-white">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            aria-describedby="firstnameHelp"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label for="lastname" className="form-label text-white">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            aria-describedby="lastnameHelp"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label text-white">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label text-white">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label for="verify-password" className="form-label text-white">ReEnter-Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="verify-password"
                            value={verifyPassword}
                            onChange={(e) => setVerifyPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className='btn btn-success' onClick={handleSignUp}>Sign Up</button>
                </form>
            }
        </div>

        </div>
        
    );
}

export default SignUp;
