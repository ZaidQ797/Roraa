// import { authHeader } from '../_helpers/auth-header';
import _config from '../_config';
import Axios from 'axios';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import config from '../_config';
import { authHeader } from '../_helpers/auth-header';
export const APIService = {
    getAll: function (entity) {
        let requestOptions = null;
        return authHeader('application/json').then(header => {
            requestOptions = {
                headers: header,
            };
            return Axios.get(`${_config.baseUrl}/api/user/${entity}`, requestOptions).then(handleResponse)
        });
    },
    getSingle: function (entity, id) {
        let requestOptions = null;
        return authHeader('application/json').then(header => {
            requestOptions = {
                headers: header,
            };
            return Axios.get(`${_config.baseUrl}/api/user/${entity}/${id}`, requestOptions).then(handleResponse)
        });
    },
    filter: function (entity, data) {
        let requestOptions = null;
        return authHeader('application/json').then(header => {
            requestOptions = {
                headers: header,
            };
            console.log(`${_config.baseUrl}/api/user/${entity}/filter`, data); 

            return Axios.post(`${_config.baseUrl}/api/user/${entity}/filter`, data, requestOptions).then(handleResponse)
        });
    },
    add: function (entity, data) {
        let requestOptions = null;
        return authHeader('application/json').then(header => {
            requestOptions = {
                headers: header,
            };
            return Axios.post(`${_config.baseUrl}/api/user/${entity}`, data, requestOptions).then(handleResponse)
        });
    },
    update: function (entity, data, id) {
        let requestOptions = null;
        return authHeader('application/json').then(header => {
            requestOptions = {
                headers: header,
            };
            return Axios.put(`${_config.baseUrl}/api/user/${entity}/${id}`, data, requestOptions).then(handleResponse)
        });
    },
    delete: function (entity, id) {
        let requestOptions = null;
        return authHeader('application/json').then(header => {
            requestOptions = {
                headers: header,
            };
            return Axios.delete(`${_config.baseUrl}/api/user/${entity}/${id}`, requestOptions).then(handleResponse)
        });
    },
}

function handleResponse(response) {
    return response.data;
}
function handleError(e) {
    return e.response.data;
}