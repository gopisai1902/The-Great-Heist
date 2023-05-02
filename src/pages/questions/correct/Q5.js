import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTime, setDuration, resetSession } from '../../../redux/sessionSlice';
import { db } from '../../../firebase/Firebase'
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import StoryTelling from '../../../components/modal/StoryTelling';
import TokenCollection from '../../../components/modal/TokenCollection';


const Q5 = () => {
    
    const key = useSelector((state)=>state.session.key)
    const token = useSelector((state)=>state.session.token)
    const firstName = useSelector((state)=>state.session.email.split('@')[0])
    const navigate = useNavigate()

    const [withoutKeyPopUp,setWithoutKeyPopUp] =useState(false)
    const [withoutTokenPopUp,setWithoutTokenPopUp] =useState(false)
    const [withTokenPopUp,setWithTokenPopUp] =useState(false)

    const story = {
        title: 'Level-5 : Opening the vault',
        transactions:[
            <>
                <p className = 'lead mark'>Berlin :</p>
                <p className = 'lead'>The Lazers are disabled. Now You are in the final stage of this heist.</p>
                <p className = 'lead'> The Diamond is stored in the vault which can be opened by solving thr puzzle.</p>
                <p className = 'lead'> </p><br />
                <p className = 'lead'><strong>All the best!</strong></p>
            </>
        ]
    }

    const withoutKey = {
        title: '',
        transactions:[
        <>
            <p className = 'lead list-group-item list-group-item-danger'>BERLIN: Now open the locker using the two keys you have.</p>
            <p className = 'lead list-group-item list-group-item-info'>{firstName}: I have only one key. I think I forgot to pick up the second key.</p>
            <p className = 'lead list-group-item list-group-item-danger'>Berlin: We both are stuck here!! Our lives came to an end.</p>
            <p className = 'lead'><b>Guards Approaching FootSteps)</b>(</p>
            <p className = 'lead'><b>YOU ARE KILLED BY THE GUARDS</b></p>
        </>

        ]
    }

    const withToken ={
        title: '',
        transactions:[
            <>
            <p className='lead list-group-item list-group-item-danger'>Berlin: Now open the locker using the two keys you have.</p>
            <p className='lead list-group-item list-group-item-info'>{firstName}: Yes. Let's Open!!</p>
            <img src='https://i0.wp.com/www.thecourtjeweller.com/wp-content/uploads/2020/07/2020-0709-01-hope01.gif?ssl=1' alt='image not available'/>
        </>,
        <>

            <p className='lead list-group-item list-group-item-danger'>Berlin : Wow What precious diamond it is..I have never seen anything this beautiful in my life. </p>
            <p className='lead'>Wait i'll show you a secret exit to escape from the museum.</p><br />
            <p className='lead'>({firstName} escapes with the artifact he found in the box and approaches Arthuro Roman.)</p>   
        </>,
         <>
            <p className='lead mark'>Arthuro: Well done!! Where is the Precious diamond which is going to make us millioniers. </p>
                
            <p className='lead'>({firstName} hands over the Diamond to him.) </p>
            <p className='lead mark'>Arthuro: The diamond is a dummy one and not a real one. You Cheater You are dead!!.</p>
            <p className='lead'>(Arthuro throws it over and points the gun towards {firstName}'s head.)</p>
            <img src='https://media.tenor.com/7oXZWCttCiAAAAAC/neon-gun.gif' alt=''Image not available/>
        </>,
            <>
                <p className='lead list-group-item list-group-item-success'>Berlin: Wait There is a secret passage behind the Diamond.</p>
                <p className='lead list-group-item list-group-item-info'>{firstName}: I have a token which can be a perfect fit to the passage.</p>
                <p className='lead'><b>({firstName} inserts the token into the passage and the outer dummy diamonds breaks and orginal diamond is brought out)</b></p>
                <p className='lead'><b>(While the arthuro and berlin are busy checking the diamond. {firstName} takes over the gun and points it towars them)</b></p>
            </>,
            <>
                <p className='lead list-group-item list-group-item-info'><b>{firstName} : I make Bussiness Out of Trust. People like you don't deserve it</b></p>
                <img src='https://i.gifer.com/4jPG.gif' alt= 'Image Not Available '/>
                <p className='lead list-group-item list-group-item-success'>{firstName} Kills both of them and Escapes the country with the diamond</p>
            </>
        ] 
    }

    const withoutToken = {
        title: ' ',
        transactions: [
            <>
                <p className='lead list-group-item list-group-item-danger'>Berlin: Now open the locker using the two keys you have.</p>
                <p className='lead list-group-item list-group-item-info'>{firstName}: Yes. Let's Open!!</p>
                <img src='https://i0.wp.com/www.thecourtjeweller.com/wp-content/uploads/2020/07/2020-0709-01-hope01.gif?ssl=1' alt='image not available'/>
            </>,
            <>

                <p className='lead list-group-item list-group-item-danger'>Berlin : Wow What precious diamond it is..I have never seen anything this beautiful in my life. </p>
                <p className='lead'>Wait i'll show you a secret exit to escape from the museum.</p><br />
                <p className='lead'>({firstName} escapes with the artifact he found in the box and approaches Arthuro Roman.)</p>   
            </>,
             <>
                <p className='lead mark'>Arthuro: Well done!! Where is the Precious diamond which is going to make us millioniers. </p>
                    
                <p className='lead'>({firstName} hands over the Diamond to him.) </p>
                <p className='lead mark'>Arthuro: The diamond is a dummy one and not a real one. You Cheater You are dead!!.</p>
                <p className='lead'>(Arthuro throws it over and points the gun towards {firstName}'s' head.)</p>
                <img src='https://media.tenor.com/7oXZWCttCiAAAAAC/neon-gun.gif' alt=''Image not available/>
            </>,
            <>
                <p className='lead list-group-item list-group-item-success'>Berlin: Wait There is a secret passage behind the Diamond.</p>
                <p className='lead mark' >Arthuro :I think There has to be a token which can be a fit to the passage.</p>
                <p className='lead list-group-item list-group-item-danger'>{firstName}:Shit, I forgot to pick up the Token and left it behind in the cabin</p>
                <p className='lead mark'>Arthuro: You Fool You Deserve to die.</p>
            </>

        ]
    }


    const dispatch = useDispatch()
    const session = useSelector((state) => state.session)
    let endTime = 0
    let duration = 0

    const writeSessionToDB = async () => {
        const uid = session.uid
        const querySnapshot = await getDocs(collection(db, "users"))

        let dbData = {}
        let docId = {}

        querySnapshot.forEach((doc) => {
            if(doc.data().uid === uid){
                dbData = doc.data()
                docId = doc.id
            }
        });

        const docRef = doc(db, "users", docId);
        
        const data = {
            uid: uid,
            duration: duration + dbData.duration,
            trials: session.trialCount + dbData.trials,
        }
        await updateDoc(docRef, data);
        dispatch(resetSession())
    }

    const initEndTrial = async () => {
        // calculate end time
        const d = new Date()
        endTime = d.getTime()
        let sessionData = { type: 1, endTime: endTime }

        // calculate duration
        duration = (endTime - session.startTime) / (1000 * 60)
        let durationData = { duration: duration }

        dispatch(setTime(sessionData))
        dispatch(setDuration(durationData))
        
        handlePopUp()
        await writeSessionToDB()
    }

    const handlePopUp = ()=>{
        if(key==false) setWithoutKeyPopUp(true)
        else if(token==false) setWithoutTokenPopUp(true)
        else setWithTokenPopUp(true)
    } 

    const handleNextQues = ()=> {
        if(key==false) navigate('/defeat')
        else if(token==false) navigate('/defeat')
        else navigate('/won')
    }

    return (
        <div className='text-center m-5'>
            {/* StoryTelling modal */}
            <StoryTelling show = {true} story={story}/>

            {/* StoryTelling Modal PopUps */}
            {
                withoutKeyPopUp
                ?
                <TokenCollection show={withoutKeyPopUp} story={withoutKey} idx = {0} handleNextQues = {handleNextQues} />
                :
                <> </>
            }

            {
                withoutTokenPopUp
                ?
                <TokenCollection show={withoutTokenPopUp} story={withoutToken} idx = {0} handleNextQues = {handleNextQues} />
                :
                <> </>
            }

            {
                withTokenPopUp
                ?
                <TokenCollection show={withTokenPopUp} story={withToken} idx = {0} handleNextQues = {handleNextQues} />
                :
                <> </>
            }
            
            {/* Question goes here */}
            <div>
                <h1>Level-5 : Opening the vault which containes the diamond. </h1>
                <p className='lead'>
                    Q5: Solve the word puzzle to open the vault where Diamond lies.
                </p>
            </div>

            {/* Image goes here */}
            <div>
                <img src='https://s3-ap-southeast-1.amazonaws.com/sawaal.com/qaimg(O)/number%20puzzle.jpg' alt='image not available' />
            </div>

            {/* Options goes here */}
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} className='m-5'>
                


                <p>a)<Link to='/wq1'>
                    <button className='btn btn-success'>7</button>
                </Link>

                </p>
                <br/>
                <p>b)<Link to='/wq1'>
                    <button className='btn btn-warning'>5</button>
                </Link>

                </p>
                <br/>
                <p>c)<button className='btn btn-danger' onClick={() => initEndTrial()}>2</button></p>
                <br/>

                <p>d)<Link to='/wq1'>
                    <button className='btn btn-primary'>12</button>
                </Link>

                </p>
                <br/>




            </div>
        </div>
    );
}

export default Q5;