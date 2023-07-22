import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

const Card = ({ children, onCardClick, card, link }) => {

    const handleClick = () => {
        onCardClick(card);
    };

    return (
        <div>
            <Link to={link} className='symbol'>
                <div 
                    className="card naipe shadow shadow-lg mb-5 mx-auto"
                    onClick={handleClick}
                >
                    <div>
                        <span>{ children }</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Card;
