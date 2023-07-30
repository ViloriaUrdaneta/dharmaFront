import { 
    account, 
    card,
    cards, 
    recharge,
    gift,
    resumeAccount,
    pendingsReceives,
    receive
} from '../utils/axiosService'
import {
    getAccount,
    setGiveAwayCharge,
    setGiveAwayMessage,
    setGiveAwayReceiver,
    setGiveAwayReceiverCard,
    setGiveAwaySender,
    getUserCard,
    getCards,
    setLastTransaction,
    setTransactionResume,
    getPendings,
    getLastReception
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

export const bringUserCard = (id, token) => async (dispatch) => {

    const config = {
        headers: {
            Authorization: "Bearer " + token
        },
    }
    try {
        const response = await card(id, config);
        if (response.status === 200) {
            dispatch(getUserCard(response.data.card));
        }
    } catch (error) {
        alert('error: ', error);
        console.log('error en catch', error);
    }
};

export const bringCards = (id, token) => async (dispatch) => {

    const config = {
        headers: {
            Authorization: "Bearer " + token
        },
    }
    try {
        const response = await cards(id, config);
        if (response.status === 200) {
            dispatch(getCards(response.data.randomCards));
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

export const userResume = (id, token) => async (dispatch) => {

    const config = {
        headers: {
            Authorization: "Bearer " + token
        },
    }

    try {
        const response = await resumeAccount(id, config);
        if (response.status === 200) {
            dispatch(setTransactionResume(response.data));
        }
    } catch (error) {
        alert('error: ', error);
        console.log('error en catch', error);
    }
};

export const userPendings = (id, token) => async (dispatch) => {

    const config = {
        headers: {
            Authorization: "Bearer " + token
        },
    }

    try {
        const response = await pendingsReceives(id, config);
        if (response.status === 200) {
            dispatch(getPendings(response.data));
        } else {
            console.log("No hay valores de pendings disponibles.");
        }
    } catch (error) {
        
        console.log('epa', error);
    }
};

export const lastGiftReceived = (transactionId, message, token) => async (dispatch) => {

    const config = {
        headers: {
            Authorization: "Bearer " + token
        },
    }

    const data = {
        transactionId,
        message
    };

    try {
        const response = await receive(data, config);
        if (response.status === 200) {
            dispatch(getLastReception(response.data));
        }
    } catch (error) {
        alert('error: ', error);
        console.log('error en catch', error);
    }
};