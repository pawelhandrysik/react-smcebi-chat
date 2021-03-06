import promisePolyfill from 'es6-promise';
import 'isomorphic-fetch';
import axios from 'axios';
import queryForParams from '../helpers/queryForParams';
import { urlConstants } from '../constants/url.constants';

promisePolyfill.polyfill();

function testAsync() {
  return fetch('http://localhost:7171/account/new/', {
    login: 'akacja',
    password: '111',
    nickname: 'AkacjaMala',
    gender: 'M',
  })
    .then(response => response.json());
}

function userLogin(username, password) {
    console.log(username, password);
    return axios.post( urlConstants.LOGIN_URL,
            queryForParams({
                login: username,
                password: password,
            }),
            urlConstants.REQUEST_CONFIG,
        )
}

function userLogout(token) {
    return axios.post( urlConstants.LOGOUT_URL,
            queryForParams({
                token: token,
            }),
            urlConstants.REQUEST_CONFIG,
        )
}

function userRegister(login, password, nickname, gender) {
    return axios.post( urlConstants.NEW_ACCOUNT_URL,
            queryForParams({
                login: login,
                password: password,
                nickname: nickname,
                gender: gender,
            }),
            urlConstants.REQUEST_CONFIG,
        )
}

function getOnlineUsers(token) {
    return axios.post( urlConstants.LOGOUT_URL,
            queryForParams({
                token: token,
            }),
            urlConstants.REQUEST_CONFIG,
        )
}

function subscribeChannel(channel_id, user_id, token) {
    return axios.post( urlConstants.SUBSCRIBE_CHANNEL_URL,
            queryForParams({
                channel_id: channel_id,
                user_id: user_id,
                token: token,
            }),
            urlConstants.REQUEST_CONFIG,
        )
}

function newChannel(name, size, owner_id, token) {
    return axios.post( urlConstants.NEW_CHANNEL_URL,
            queryForParams({
                name: name,
                size: size,
                owner_id: owner_id,
                token: token,
            }),
            urlConstants.REQUEST_CONFIG,
        )
}

export default {
  testAsync,
  userLogin,
  userLogout,
  userRegister,
  getOnlineUsers,
  subscribeChannel,
  newChannel,

};
