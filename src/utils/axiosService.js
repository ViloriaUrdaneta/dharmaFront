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

export function cards(){
    return API.get('/user/cards');
}

export function gift(data, config){
    return API.post('/transaction/giveAway', data, config);
}

export function pickCard(data, config){
    return API.put('/user/pickCard', data, config);
}