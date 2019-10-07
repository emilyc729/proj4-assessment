import React from 'react';
import './Circles.css'

const Circles = (props) => {
    return (
        <div className="Circles">
            {props.circles.map((circle, idx) =>
                <div
                    key={circle}
                    className={props.btnSelected === (idx+1) ? 'selected': ''}
                    onClick={() => props.handleSelection(idx+1)}>
                      {circle}
                </div>
            )}
        </div>
    );
};

export default Circles;