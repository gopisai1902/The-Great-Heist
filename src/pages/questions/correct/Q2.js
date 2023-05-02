import React from 'react';
import { Link } from 'react-router-dom';
import StoryTelling from '../../../components/modal/StoryTelling';
import fire_alarm from '../../../assets/images/fire_alarm.jpeg'

const Q2 = () => {
    const story = {
        title: 'Level-2 : Diverting the Guards',
        transactions:[
            <>
                <p className='lead list-group-item list-group-item-warning'>Berlin: YEssSS! You have Sucessfully Disabled the CCTV cameras and alarms.</p><br />
                <img src={fire_alarm} alt='image not available'/><br />  
                <br />    
                <p className='lead list-group-item list-group-item-info'>Now you have to divert the guards who are standing across the Secret room. So your task is to
                create a fake fire alarm .</p>
            </>
         ]
    }
    return (
        <div className='text-center m-5'>
            {/* StoryTelling modal */}
            <StoryTelling show = {true} story={story}/>

            {/* Question goes here */}
            <div className='m-4 lead'>
                <>
                    <h1>Level-2 : Diverting the Guards</h1>
                    <h2>Create a fake alarm to mislead the guards</h2>
                </>
            </div>

             {/* Image goes here 
            <div>
                <img src='data:image/png;base64,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' alt='image not available' />
            </div>
            <br/>
            {/* Options goes here *
            <div className='m-4'>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/07d2dXHYb94" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>
            </div>

            {/* Question goes here */}
            <div>
                <p className='lead'>Q2: Assume every person in the museum blinks their eye for every 5 modulo sec. <strong>Current time = 02:09:31 PM. </strong>(Hours : Minutes : Seconds). What would be the nearest time to trigger the alarm safely?</p>
            </div>

            {/* Options goes here */}
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} className='m-5'>
                

                <p>a)<Link to='/wq1'>
                    <button className='btn btn-success'>02:09:35 AM</button>
                </Link>

                </p>
                <br/>
                <p>b)<Link to='/wq1'>
                    <button className='btn btn-warning'>07:09:31 PM</button>
                </Link>

                </p>
                <br/>
                <p>c)<Link to='/wq1'>
                    <button className='btn btn-danger'>05:05:05 PM</button>
                </Link>

                </p>
                <br/>
                <p>d)<Link to='/q3'>
                    <button className='btn btn-primary'>02:09:35 PM</button>
                </Link>

                </p>
                <br/>





            </div>
        </div>
    );
}

export default Q2;