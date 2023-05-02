import React from 'react';
import { Link } from 'react-router-dom';
import StoryTelling from '../../../components/modal/StoryTelling';

const Q4 = () => {
    const story = {
        title: 'Level-4: Disabling Lazers around the artifact',
        transactions:[
            <>
                <p className = 'lead list-group-item list-group-item-success'><strong>Kudos, Now you have to enter into the Chamber where the artifact lies.</strong></p>
                <p className = 'lead list-group-item list-group-item-info'>Be carefull the artifact is lazer protected. Now your task is to disable the lazers ahead to reach the artifact. </p><br />
            </>
        ]
    }
    return (
        <div className='text-center lead m-5'>
            {/* StoryTelling modal */}
            <StoryTelling show = {true} story={story}/>
            
            {/* Question goes here */}
            <div>
                <>
                <h1>Level-4 : Disabling the lazers to reach to artifact.</h1><br />
                <p className='lead'>Q4: 
                    In some coding language, security is coded as <b>vhfxulwb</b>. what is the word <b>lazer</b> coded as?(Hint : Decrypt by following substitution Cipher)
                </p>
                </>
            </div>

            {/* Image goes here */}
            <div>

            </div>

            {/* Options goes here */}
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} className='m-5'>
                

                <p>a)<Link to='/wq1'>
                    <button className='btn btn-success'>rezal</button>
                </Link>

                </p>
                <br/>
                <p>b)<Link to='/wq1'>
                    <button className='btn btn-warning'>mbafs</button>
                </Link>

                </p>
                <br/>
                <p>c)<Link to='/wq1'>
                    <button className='btn btn-danger'>aezlr</button>
                </Link>

                </p>
                <br/>
                <p>d)<Link to='/q5'>
                    <button className='btn btn-primary'>odchu</button>
                </Link>

                </p>
                <br/>




            </div>
        </div>
    );
}

export default Q4;