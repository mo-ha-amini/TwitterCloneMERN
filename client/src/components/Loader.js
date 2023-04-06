import React from 'react';
import ReactLoading from 'react-loading';
 

const Loader = () => {
    return (
        <div id="loader" className="flex items-center justify-center h-screen">
             <ReactLoading className="m-5 m-5" type='spinningBubbles' color='#1d9bf0' height={'7%'} width={'7%'} />
        </div>
    )
}

export default Loader