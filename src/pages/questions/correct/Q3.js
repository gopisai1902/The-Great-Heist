import React,{useState} from 'react';
import TokenCollection from '../../../components/modal/TokenCollection';
import key_img from '../../../assets/images/key.png'
import token_img from '../../../assets/images/token.png'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import StoryTelling from '../../../components/modal/StoryTelling';
import q3_img from '../../../assets/images/q3_img.jpg'
import { setSessionKey,setSessionToken } from '../../../redux/sessionSlice';
import { useSelector,useDispatch } from 'react-redux';


const Q3 = () => {
    const story = {
        title: 'Level : 3 Find the second key',
        transactions: [
            <>
                <p className='lead list-group-item list-group-item-info'>Berlin-You have succesfully diverted the guards.</p><br />
                <p className='lead list-group-item list-group-item-danger'>Now your task is to enter into a secret room and find the second key</p>
                <p className='lead'>(The key given by Arthuro and the second key together can open the locker which contains the diamond.)</p>
            </>
        ]
    }

    // TokenCollection Model
    const [key, setKey] = useState(false);
    const [token, setToken] = useState(false);
    const [idx, setIdx] = useState(0);
    const [keyOpacity, setKeyOpacity] = useState(0.25);
    const [tokenOpacity, setTokenOpacity] = useState(0.25);
    const [tokenShow,setTokenShow] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch() 

    const takeKey = () => {
        setIdx(1);
        setKey(!key);
        setKeyOpacity(keyOpacity === 0.25 ? 1 : 0.25);
    }

    const takeToken = () => {
        setIdx(2);
        setToken(!token);
        setTokenOpacity(tokenOpacity === 0.25 ? 1 : 0.25);
    }

    const handleNextQues = () => {
        dispatch(setSessionKey({key:key}))
        dispatch(setSessionToken({token:token}))
        navigate('/Q4')
    }

    const token_story = {
        title: 'Collecting the second key',
        transactions: [
            <>
                <p className='lead list-group-item list-group-item-warning'>Entering into the secret room.</p>
                <p className='lead lead list-group-item list-group-item-info'>There is box which contains a key. Collect the key.</p>
            </>,
            <span>
                <p className ='lead'>Tap to Collect the key below here!! and Next</p>
                <img
                    className='border border-dark p-2 d-block mx-auto'
                    src={key_img}
                    alt="img not available"
                    style={{ width: "150px", height: "150px", opacity: keyOpacity }}
                    onClick={takeKey}
                />
            </span>,
            <span>
                <p className ='lead'>Wait!! A suspicious object also found. Do you want to take with you chief?</p>
                <img
                    className='border border-dark p-2 d-block mx-auto'
                    src={token_img}
                    alt="img not available"
                    style={{ width: "150px", height: "150px", opacity: tokenOpacity }}
                    onClick={takeToken}
                />
            </span>
        ]
    }



    return (
        <div className='text-center m-5'>
            {/* StoryTelling modal */}
            <StoryTelling show={true} story={story} />

            {/* TokenCollection Modal */}
            {
                tokenShow
                ?
                <TokenCollection show={tokenShow} story={token_story} key = {[key, token]} idx = {idx} handleNextQues = {handleNextQues} />
                :
                <></>
            }
            {/* Question goes here */}
            <div>
                <>
                    <h1>Level : 3 Find the second key</h1>
                    <br />
                    <h2>Find the key to enter into the secret room.</h2>
                    {/* Image goes here */}
                    <div>
                        <img src={q3_img} alt='image not available' style={{ width: '400px' }} />
                    </div>
                    <p className='lead'>
                        Q3: Solve the maze to fing the second key.
                    </p>
                </>
            </div>

            {/* Options goes here */}
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} className='m-5'>


                <p>a)<button className='btn btn-success' onClick={()=>setTokenShow(!tokenShow)} >24</button></p>

                <br />
                <p>b)<Link to='/wq1'>
                    <button className='btn btn-warning'>28</button>
                </Link>

                </p>
                <br />
                <p>c)<Link to='/wq1'>
                    <button className='btn btn-danger'>21</button>
                </Link>

                </p>
                <br />
                <p>d)<Link to='/wq1'>
                    <button className='btn btn-primary'>27</button>
                </Link>

                </p>
                <br />



            </div>
        </div>
    );
}

export default Q3;