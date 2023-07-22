import { createSlice } from "@reduxjs/toolkit/";

export const giveLinkSlice = createSlice({
    name: "giveLink",
    initialState: {
        account: {},
        giveAway: {
            sender: 0,
            receiver: 0,
            receiverCard: '',
            charge: 0,
            message: '',
        },
        cards: [],
        lasTransaction: {}
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
        setGiveAwayReceiverCard: (state, { payload }) => {
            state.giveAway.receiverCard = payload;
        },
        setGiveAwayCharge: (state, { payload }) => {
            state.giveAway.charge = payload;
        },
        setGiveAwayMessage: (state, { payload }) => {
            state.giveAway.message = payload;
        },
        getCards: (state, { payload }) => {
            state.cards = payload;
        },
        setLastTransaction: (state, { payload }) => {
            state.lasTransaction = payload;
        }
    }
});

export const {
    getAccount,
    setGiveAwaySender,
    setGiveAwayCharge,
    setGiveAwayMessage,
    setGiveAwayReceiver,
    setGiveAwayReceiverCard,
    getCards,
    setLastTransaction
} = giveLinkSlice.actions;