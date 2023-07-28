import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../../context/authContext';
import { bringCards, giveAwayReceiver, giveAwayReceiverCard } from '../../redux/thunks';
import '../../App.css';
import Card from '../pure/Card';

const Cards = () => {

    const { user, token } = useContext(AuthContext)
    const cards = useSelector((state) => state.dharma.cards);
    const dispatch = useDispatch();
    const [deck, setDeck] = useState([]);
    const link = '/confirm'

    useEffect(() => {
        dispatch(bringCards(user.id, token))
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

    console.log(deck)

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
