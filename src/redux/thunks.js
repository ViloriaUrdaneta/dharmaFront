import Swal from 'sweetalert2';
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
    setGiveAwaySenderCard,
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
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.message}`,
        });
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
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.message}`,
        });
    }
};

export const giveAwaySender = (id) => (dispatch) => {
    try {
        dispatch(setGiveAwaySender(id))
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.message}`,
        });
    }
};

export const giveAwayReceiver = (id) => (dispatch) => {
    try {
        dispatch(setGiveAwayReceiver(id))
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.message}`,
        });
    }
};

export const giveAwaySenderCard = (card) => (dispatch) => {
    try {
        dispatch(setGiveAwaySenderCard(card))
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.message}`,
        });
    }
};

export const giveAwayReceiverCard = (card) => (dispatch) => {
    try {
        dispatch(setGiveAwayReceiverCard(card))
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.message}`,
        });
    }
};

export const giveAwayCharge= (charge) => (dispatch) => {
    try {
        dispatch(setGiveAwayCharge(charge))
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.message}`,
        });
    }
};

export const giveAwayMessage = (message) => (dispatch) => {
    try {
        dispatch(setGiveAwayMessage(message))
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.message}`,
        });
    }
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
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.message}`,
        });
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
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.message}`,
        });
    }
};

export const sendGiveAway = (giveAway, token) => async (dispatch) => {

    const config = {
        headers: {
            Authorization: "Bearer " + token
        },
    }
    const { sender, receiver, senderCard, receiverCard, charge, message } = giveAway;

    const data = {
        sender,
        receiver,
        senderCard,
        receiverCard,
        charge: parseInt(charge),
        message
    };

    try {
        const response = await gift(data, config);
        if (response.status === 200) {
            dispatch(setLastTransaction(response.data));
        }
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.message}`,
        });
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
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.message}`,
        });
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
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.message}`,
        });
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
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.message}`,
        });
    }
};