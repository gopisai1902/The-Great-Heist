import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementTrial, resetSession } from '../redux/sessionSlice';
import { setTime } from '../redux/sessionSlice';
import { Link } from 'react-router-dom';
import StoryTelling from '../components/modal/StoryTelling';
import { useSelector } from 'react-redux';
import start_img from '../assets/images/start_img.jpg'

const Main = () => {
    const firstName = useSelector((state)=>state.session.email.split('@')[0])

    const story = {
        title: 'The Great Heist : Intro',
        transactions: [

                <ul className='lead' >
                    <a href="#" class="list-group-item list-group-item-success">Hi {firstName}.</a> <br />
                    <a href="#" class="list-group-item list-group-item-info">Game Objective: To successfully complete a heist and steal the valuable artifact from a museum.</a><br />
                </ul>,

                <ul className='lead'>
                    <a href="#" class="list-group-item list-group-item-warning">I'm <i>Arthuro Roman</i>, the head security at Smithsonian Museum.</a><br />
                    <a href="#" class="list-group-item list-group-item-danger">One of the most valuable artifacts of all time,<strong>"The Hope Diamond"</strong> rests in the Smithsonian Museum.</a><br />
                    <a href="#" class="list-group-item list-group-item-success">The diamond originated from the Kollur mine in Golconda, India. The Hope Diamond's actual value is somewhere in the range of <i>$350 million.</i></a>
                </ul>,
                <>
                <p className='lead mark' >
                Your mission is to steal the diamond from the museum.</p>
                <p className='lead list-group-item list-group-item-danger'>You will be awarded $10 million if the heist is succesfull.</p>
                <p className= 'lead list-group-item list-group-item-success'> I give you a key. You might need this but figure out things on your own. After entering all the additional details will be provided by my assistant <i>Berlin</i>.</p> <br />
                <br />

                <h5 >Best of luck! Will meet you after the Heist is successful.</h5>

                <p className='lead' >(The Player Safely walks into the museum with the Arturo Roman card)</p>
            </>
        ]
    }


    const dispatch = useDispatch()

    const initDispatch = () => {
        dispatch(resetSession())
        dispatch(incrementTrial())
        const d = new Date()
        let time = d.getTime()
        let sessionData = { type: 0, startTime: time }
        dispatch(setTime(sessionData))
    }

    const buttonStyle = {
        margin: 'auto',
        display: 'block',
      };


    return (
        <div style={
            { 
                backgroundImage: `url(${start_img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            } 
        }className='m-5'>
                <div className=''>
                {/* StoryTelling modal */}
                <StoryTelling show = {true} story={story} />

                <h1 style={{fontSize:"8vw", fontFamily: 'Trattatello, fantasy', fontStyle: 'italic', padding:'15px'}} className='text-success m-5'>THE HEIST IS ON</h1>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                
                <Link to='/q1' onClick={()=>initDispatch()}>
                <button className='btn btn-warning' style={buttonStyle}>
                    Let's Start
                </button>
                </Link>
                



                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                

        </div>
        
    );
}

export default Main;