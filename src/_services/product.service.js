import config from 'config';
import { authHeader } from '../_helpers';
const axios = require('axios');
export const productService = {
    getproductAll,
    getProduct,
    update,
    delete: _delete
};



function getproductAll(page) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/products?page=${page}`, requestOptions).then(handleResponse);
}

function getProduct(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/products/${id}`, requestOptions).then(handleResponse);
}



function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            response.json().then(error => {
                return error;
              })  
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}