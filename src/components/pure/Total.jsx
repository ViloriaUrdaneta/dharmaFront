import React from 'react';
import '../../App.css';

const Total = ({total, text}) => {
    return (
        <div>
            <div className="card total shadow mb-5 mx-auto">
                <div>
                    <h5 className='mt-4 ms-3'>{text}</h5>
                    <h3 className='balance ms-3 mt-4'>{total}</h3>
                </div>
            </div>
        </div>
    );
}

export default Total;
