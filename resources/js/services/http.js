import axios from 'axios';
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded'

export const privateHTTP = ({ url, method, data = {}, params = {} }) => {
    const token = localStorage.getItem('bigStore.jwt');
    if(token !== null) {
         return axios({
            // baseURL: 'https://auto-cosmos.ru',
            // baseURL: 'http://127.0.0.1:8000',
            baseURL: 'http://auto-cosmos.test',
            url,
            method,
            params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data
        })
    }
}

export const publicHTTP = ({ url, method, data = {}, params = {} }) => {
    return axios({
        // baseURL: 'https://auto-cosmos.ru',
        //baseURL: 'http://127.0.0.1:8000',
        baseURL: 'http://auto-cosmos.test',
        method,
        url,
        params,
        data
    })
}
