import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StoryTelling from '../../../components/modal/StoryTelling';
import { useSelector, useDispatch } from 'react-redux';
import { incrementWrongCount, resetSession } from '../../../redux/sessionSlice';

const WQ1 = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    //const [wrongTrial, setWrongTrial] = useState(0)
    const wrongTrial = useSelector((state)=>state.session.wrongCount)

    useEffect(()=>{
        dispatch(incrementWrongCount())
        if(wrongTrial>=1) navigate('/defeat')
    },[])

    const story = {
        title: 'Level-0: Escape from Prison',
        transactions: [ 
            <>
                <h1>Berlin: Wrong Move!!!</h1>
                <p className='lead list-group-item list-group-item-danger'><strong>Alarm Triggers!!!</strong></p><br />
                <p className='lead list-group-item list-group-item-success'><strong>Berlin : You are caught! You are now taken to the prison.</strong></p>
                <p className='lead list-group-item list-group-item-success'>Berlin : There are few poisonous gas cyclinders present in the prison. Try to escape from the prision.</p>
            </>

        ]
    }
    return (
        <div className='text-center m-5'>

            {/* StoryTelling modal */}
            <StoryTelling show = {true} story={story}/>

            {/* Question goes here */}
            <div>
                <h1>Level-0 : Escape from the prision</h1>
                <p className='lead'>
                    Q1: The prison room consist of 4 chemical cylinders. Use any one to make the guards unconscious instantly. <br />
                    (Note: Each chemical is of one quantity, hence you can put guards to sleep only once)<br />
                    (Note: If you were caught releasing a wrong chemical which cant put guards to sleep may lead to your death in guards hands)
                </p>
            </div>

            {/* Image goes here */}
            <div>

            </div>

            {/* Options goes here */}
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} className='m-5'>
                


                <p>a)<Link to='/defeat'>
                    <button className='btn btn-success'>chlorine</button>
                </Link>

                </p>
                
                <br/>

                <p>b)
                <Link to='/defeat'>
                    <button className='btn btn-warning'>Carbon-Dioxide</button>
                </Link>
                    
                </p>
                
                <br/>
                <p>c)
                <Link to='/defeat'>
                    <button className='btn btn-danger'>Nitrous Oxide</button>
                </Link>
                </p>
                
                <br/>
                <p>d)
                
                    <button className='btn btn-primary' onClick={()=>navigate(-1)}>Hydrogen Cyanide</button>

                </p>
                
                <br/>



            </div>
        </div>
    );
}

export default WQ1;
