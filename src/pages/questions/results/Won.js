import React from 'react';
import won_img from '../../../assets/images/Won.jpg'



const Won = () => {

    return (
        // <div style={
        //     { 
        //         backgroundImage: `url(${won_img})`,
        //         backgroundRepeat: "no-repeat",
        //         backgroundSize: "cover"
        //     } 
        // }className='text-center m-5'>
            <div className='text-center m-5'>
            <h1 className=' text-success'>Congratulations !!! YOU WON !!!!!!!</h1>
            <img src={won_img} alt='image is not available' /> 

        </div>
    );
}

export default Won;
