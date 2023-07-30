import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { pickCard } from '../../utils/axiosService';
import { useDispatch } from 'react-redux';
import { giveAwaySenderCard } from '../../redux/thunks';
import '../../App.css';
import Card from '../pure/Card';

const Choose = () => {

    const { user, token, dispatch } = useContext(AuthContext)
    const reduxDispatch = useDispatch();
    const link = '/amount'
    let cards = [
        {
            "id": 1,
            "card": "♥"
        },
        {
            "id": 2,
            "card": "♦"
        },
        {
            "id": 3,
            "card": "♣"
        },
        {
            "id": 4,
            "card": "♠"
        }
    ]
    function compareRandom(a, b) {
        return Math.random() - 0.5;
    }
    cards.sort(compareRandom);

    const handleCardClick = (card) => {
        const config = {
            headers: {
                Authorization: "Bearer " + token
            },
        }
        const data = {
            id: user.id,
            card : card.card
        };
        pickCard(data, config)
            .then((response) => {
                if(response.status === 200){
                    dispatch({ type: 'DATAUSER', payload: response.data.user });
                }})
            .catch((error) => {
                alert('error: ', error)
            });
        reduxDispatch(giveAwaySenderCard(card.card));
    };

    return (
        <div>
            <div className='App'>
            <div className='container'>
                <div className='row'>
                    {cards.map((card) => (
                        <div className='col-3' key={card.id}>
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
        </div>
    );
}

export default Choose;
