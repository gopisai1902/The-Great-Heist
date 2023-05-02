import React, { useEffect } from 'react';
import q1_image from '../../../assets/images/q1.jpeg'
import { Link } from 'react-router-dom';
import StoryTelling from '../../../components/modal/StoryTelling';
import { useSelector } from 'react-redux';
import security_img from '../../../assets/images/security_img.jpg'

const Q1 = () => {
    const firstName = useSelector((state)=>state.session.email.split('@')[0])
    const story = {
        title: 'Level-1 : Disabling Security Cameras and Alarms',
        transactions: [
            <>
                <p className='lead'><strong>Hi {firstName}..I'm Berlin. Scroll down to know your objective</strong></p><br />
                <img src={security_img} alt='image not available'/>
                <p className='lead list-group-item list-group-item-success'>Your first aim here is to disable the CCTV cameras and Alarms in the museum. You can enter into the security room with the Arthro Roman's card.</p>
                <p className='lead list-group-item list-group-item-info'>There are 250 guards and 50 CCTV camera's all over the museum. Be Carefull. Good luck!<br />
                </p>
            </>
        ]
    }

    return (
        <div className='text-center m-5'>
            {/* StoryTelling modal */}
            <StoryTelling show = {true} story={story} />

            {/* Question goes here */}
            <div>
                <>
                <h1>Level-1 : Disabling Security Cameras and Alarms</h1>
                <br/>
                <br/>
                <h2> Solve the Following question to disable the Security cameras and alarms!!!</h2>
                <p className='lead'>
                    Q1: Five girls are sitting on a bench to be photographed. 
                    Seema is to the left of Rani and to the right of Bindu. Mary is to the right of Rani. <br />Reeta is between Rani and Mary.
                    <b>Who is sitting immediate right to Reeta ?</b>?<br />
                </p>
                </>
            </div>

            {/* Image goes here 
            <div>
                <img src={q1_image} alt='image not available' />
            </div>
            <br/>
            {/* Options goes here */}
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} className='m-5'>
                <p>a)<Link to='/wq1'>
                    <button className='btn btn-success'>Bindu</button>
                </Link>

                </p>
                
                <br/>

                <p>b)
                <Link to='/q2'>
                    <button className='btn btn-warning'>Mary</button>
                    
                </Link>
                    
                </p>
                
                <br/>
                <p>c)
                <Link to='/wq1'>
                    <button className='btn btn-danger'>Rani</button>
                </Link>
                </p>
                
                <br/>
                <p>d)
                <Link to='/wq1'>
                    <button className='btn btn-primary'>Seema</button>
                </Link>

                </p>
                
                <br/>
            </div>
        </div>
    );
}

export default Q1;