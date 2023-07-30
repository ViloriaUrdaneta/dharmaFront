import { createSlice } from "@reduxjs/toolkit/";

export const dharmaSlice = createSlice({
    name: "dharma",
    initialState: {
        account: {},
        giveAway: {
            sender: 0,
            receiver: 0,
            senderCard: '',
            receiverCard: '',
            charge: 0,
            message: '',
        },
        card: '',
        cards: [],
        lasTransaction: {},
        transactionsResume: {},
        pendings: {},
        lastReception: {}
    },
    reducers: {
        getAccount: (state, { payload }) => {
            state.account = payload;
        },
        setGiveAwaySender: (state, { payload }) => {
            state.giveAway.sender = payload;
        },
        setGiveAwayReceiver: (state, { payload }) => {
            state.giveAway.receiver = payload;
        },
        setGiveAwaySenderCard: (state, { payload }) => {
            state.giveAway.senderCard = payload;
        },
        setGiveAwayReceiverCard: (state, { payload }) => {
            state.giveAway.receiverCard = payload;
        },
        setGiveAwayCharge: (state, { payload }) => {
            state.giveAway.charge = payload;
        },
        setGiveAwayMessage: (state, { payload }) => {
            state.giveAway.message = payload;
        },
        getUserCard: (state, { payload }) => {
            state.card = payload;
        },
        getCards: (state, { payload }) => {
            state.cards = payload;
        },
        setLastTransaction: (state, { payload }) => {
            state.lasTransaction = payload;
        },
        setTransactionResume: (state, { payload }) => {
            state.transactionsResume = payload;
        },
        getPendings: (state, { payload }) => {
            state.pendings = payload;
        },
        getLastReception: (state, { payload }) => {
            state.lastReception = payload;
        },
    }
});

export const {
    getAccount,
    setGiveAwaySender,
    setGiveAwayCharge,
    setGiveAwayMessage,
    setGiveAwayReceiver,
    setGiveAwaySenderCard,
    setGiveAwayReceiverCard,
    getUserCard,
    getCards,
    setLastTransaction,
    setTransactionResume,
    getPendings,
    getLastReception
} = dharmaSlice.actions;