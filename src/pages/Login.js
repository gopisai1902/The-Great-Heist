import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import loading from '../assets/images/loading.gif';
import { useDispatch } from 'react-redux';
import { setAdmin, setEmail, setUid } from '../redux/sessionSlice'
import opening_img from '../assets/images/opening_img.jpg'


const Login = (params) => {

    const [email, setStateEmail] = useState('');
    const [password, setStatePassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const logInWithEmailAndPassword = async () => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            await dispatch(setEmail({email: res.user.email}))
            await dispatch(setUid({uid: res.user.uid}))
            return 1;
        } catch (err) {
            console.error(err);
            alert(err.message);
            return 0;
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault()
        if(email !== '' && password.length >= 6){
            const status = await logInWithEmailAndPassword();
            if (status) {
                params.initDispatch()
                if(email==='admin@gmail.com'){
                    dispatch(setAdmin())
                }
            }
        }
        else{
            alert('enter all requied fields')
        }
    }

    return (
        <div>
            <h1 style={{fontFamily: 'Trattatello, fantasy',
    fontSize: '30px',
    // fontWeight: 'bold',
    fontStyle: 'italic',
    // textDecoration: 'underline',
    // position: 'absolute',
    // textAlign: "center",
    // margin:'10px',
    }} className='text-center text-dark'>The robbed that smiles, steals something from the thief - William Shakespeare</h1>
            {isLoading
                ?
                <div>
                    <img className='mx-auto d-block' src={loading} alt='loading...' />
                </div>
                :
                 
                 <div style={
                    { 
                        backgroundImage: `url(${opening_img})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    } 
                } className='d-flex align-items-center justify-content-center vh-100' >

                {/* <div className='d-flex align-items-center justify-content-center vh-100' > */}
                    
                    <h1 className='text-muted m-5'>Sign in / Sign up</h1>

                    <form style={{marginLeft: '800px'}}>
                            <label for="email" className="form-label text-white">Email Address
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                value={email}
                                onChange={(e) => setStateEmail(e.target.value)}
                                required
                            />
                            </label>
                            <br/>
                        
                            <label for="password" className="form-label text-white">Password
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setStatePassword(e.target.value)}
                                required
                            />
                            </label>
                            <br/>

                        {/* <button className='btn btn-primary' onClick={handleLogin}>login</button>
                        <br/>
                        <br/>
                        <Link to='/signup'>
                        <button className='btn btn-primary'>Sign Up</button>
                        </Link> */}
                        

                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} >
                            <button style={{ flex: '1', marginRight: '20px' }}  className='btn btn-primary'onClick={handleLogin} >Login</button>
                            <Link style={{ flex: '1', marginLeft: '10px' }}  to='/signup'>
                            <button className='btn btn-primary' >Signup</button>
                            </Link>
                        </div>

                    </form>

                </div>
            }
        </div>
    );
}

export default Login;