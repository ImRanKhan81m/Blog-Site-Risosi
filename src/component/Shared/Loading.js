import React from 'react';
import loading from '../../assets/animation_500_l7ggd9id.gif';

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-[50vh]'>
            <img className='w-40' src={loading} alt=""/>
        </div>
    );
};

export default Loading;