import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTime, setDuration, resetSession } from '../../../redux/sessionSlice';
import { db } from '../../../firebase/Firebase'
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import anime_death from '../../../assets/images/anime-death.gif'

const Delete = () => {
    const navigate = useNavigate()
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
        
        
        await writeSessionToDB()
        dispatch(resetSession())
        navigate('/')
       
    }

    return (
        <div className='text-center m=5 '>
            <h1 className='text-danger text-center'>YOU LOSTTTTT!!!</h1>
            <br/>
            <br/>
            <br/>
            <br/>
            <img  src = 'https://media.tenor.com/6VM7lzsBSuUAAAAC/id-invaded-gun.gif' alt = 'Image not available' />
            
            <br/>
            <br/>
            <br/>
            <button className='btn btn-primary text-center' onClick={() => initEndTrial()}>Try Again</button>
            <br/>
            <br/>
            
        </div>
    );
}

export default Delete;
