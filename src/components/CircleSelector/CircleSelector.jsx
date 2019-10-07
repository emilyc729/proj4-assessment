import React from 'react';
import './CircleSelector.css'

const CircleSelector = (props) => {
    return (
        <div className="CircleSelector">
            {props.circles.map((circle, idx) =>
                <button
                    key={circle}
                    className={props.btnSelected === (idx+1) ? 'selected': ''}
                    onClick={() => props.handleSelection(idx+1)}>
                        {props.btnSelected === (idx+1) ? `SELECTED CIRCLE ${circle}` : `SELECT CIRCLE ${circle}`}
                </button>
            )}
            
           
        </div>
    );
};

export default CircleSelector;