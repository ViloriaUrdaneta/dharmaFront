import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bringCards, giveAwayReceiver, giveAwayReceiverCard } from '../../redux/thunks';
import '../../App.css';
import Card from '../pure/Card';

const Cards = () => {

    const cards = useSelector((state) => state.giveLink.cards);
    const dispatch = useDispatch();
    const [deck, setDeck] = useState([]);
    const link = '/confirm'

    useEffect(() => {
        dispatch(bringCards())
    }, [dispatch]);

    useEffect(() => {
        if (cards) {
            setDeck(cards);
        }
    }, [cards]);

    const handleCardClick = (card) => {
        dispatch(giveAwayReceiver(card.id))
        dispatch(giveAwayReceiverCard(card.card))
    };

    return (
        <div className='App'>
            <div className='container'>
                <div className='row'>
                    {deck.map((card) => (
                        <div className='col-4' key={card.id}>
                            <Card 
                                link={link}
                                onCardClick={handleCardClick}
                                card={card}
                            >
                                {card.card}
                            </Card>
                        </div>
                    ))}
                </div>
                <div className='row'>
                    <p className='subtitle2 mt-5'>Elige una carta</p>
                </div>
            </div>
        </div>
    );
}

export default Cards;
