import API from './axiosConfig'


export function login(email, password){
    return API.post('/auth/login', { email, password });
}

export function account(id, config){
    return API.get(`/account/${id}`, config);
}

export function recharge(data, config){
    return API.post('/account/recharge', data, config);
}

export function card(id, config){
    return API.get(`/user/card/${id}`, config);
}

export function cards(id, config){
    return API.get(`/user/cards/${id}`, config);
}

export function gift(data, config){
    return API.post('/transaction/giveAway', data, config);
}

export function pickCard(data, config){
    return API.put('/user/pickCard', data, config);
}

export function resumeAccount(id, config){
    return API.get(`/transaction/resume/${id}`, config);
}

export function pendingsReceives(id, config){
    return API.get(`/transaction/pendingReceived/${id}`, config);
}

export function receive(data, config){
    return API.put('/transaction/receive', data, config);
}