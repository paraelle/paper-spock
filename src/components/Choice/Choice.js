import React from 'react';
import './Choice.css';


const Choice = ( {img, playTurn} ) => {
    return (<div className='choice'>
            <button className='choice-button' onClick={() => playTurn(img)}><img src={img} width='50px' height='50px'></img></button>
            
            </div>
		)
}

export default Choice;