import { 
    account, 
    cards, 
    recharge,
    gift
} from '../utils/axiosService'
import {
    getAccount,
    setGiveAwayCharge,
    setGiveAwayMessage,
    setGiveAwayReceiver,
    setGiveAwayReceiverCard,
    setGiveAwaySender,
    getCards,
    setLastTransaction
} from './slice'

export const userAccount = (id, token) => async (dispatch) => {

    const config = {
        headers: {
            Authorization: "Bearer " + token
        },
    }

    try {
        const response = await account(id, config);
        if (response.status === 200) {
            dispatch(getAccount(response.data.account));
        }
    } catch (error) {
        alert('error: ', error);
        console.log('error en catch', error);
    }
};

export const rechargeAccount = (id, charge, token) => async (dispatch) => {

    const config = {
        headers: {
            Authorization: "Bearer " + token
        },
    }
    const data = {
        id,
        charge : parseInt(charge)
    };

    try {
        const response = await recharge(data, config);
        if (response.status === 200) {
            dispatch(getAccount(response.data.account));
        }
    } catch (error) {
        alert('error: ', error);
        console.log('error en catch', error);
    }
};

export const giveAwaySender = (id) => (dispatch) => {
    dispatch(setGiveAwaySender(id))
};

export const giveAwayReceiver = (id) => (dispatch) => {
    dispatch(setGiveAwayReceiver(id))
};

export const giveAwayReceiverCard = (card) => (dispatch) => {
    dispatch(setGiveAwayReceiverCard(card))
};

export const giveAwayCharge= (charge) => (dispatch) => {
    dispatch(setGiveAwayCharge(charge))
};

export const giveAwayMessage = (message) => (dispatch) => {
    dispatch(setGiveAwayMessage(message))
};

export const bringCards = () => async (dispatch) => {
    try {
        const response = await cards();
        if (response.status === 200) {
            dispatch(getCards(response.data));
        }
    } catch (error) {
        alert('error: ', error);
        console.log('error en catch', error);
    }
};

export const sendGiveAway = (giveAway, token) => async (dispatch) => {

    const config = {
        headers: {
            Authorization: "Bearer " + token
        },
    }
    const { sender, receiver, charge, message } = giveAway;

    const data = {
        sender,
        receiver,
        charge: parseInt(charge),
        message
    };
    console.log(data)

    try {
        const response = await gift(data, config);
        if (response.status === 200) {
            dispatch(setLastTransaction(response.data));
        }
    } catch (error) {
        alert('error: ', error);
        console.log('error en catch', error);
    }
};