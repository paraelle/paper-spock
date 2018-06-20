import React from 'react';
import './StartButton.css';

const StartButton = ( {onButtonClick} ) => {
    return (<div>
            <button className='start' onClick={onButtonClick}>NEW GAME</button>
        </div>
		)
}

export default StartButton;