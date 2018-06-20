import React from 'react';
import './Label.css';

const Label = ( {name, color} ) => {
    const className = `label ${color}`
    return (<div className={className}>
            {name.toUpperCase()}
        </div>
		)
}

export default Label;