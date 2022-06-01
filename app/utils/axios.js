import axios from 'axios';
import _ from 'lodash';

function empty(mixed_var) {
    if (!mixed_var || mixed_var == "0") {
        return true;
    }
    if (typeof mixed_var == "object") {
        for (var k in mixed_var) {
            return false;
        }
        return true;
    }
    return false;
}
const instance = axios.create({})
instance.interceptors.request.use(function(config) {
    let token = localStorage.getItem('token')
    if (empty(token)) {
        token = window.$nuxt.$cookiz.get('token')
    }
    if (token)
        config.headers['Authorization'] = 'Bearer ' + token

    return config;
}, function(error) {
    return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
    const newToken = _.get(response, 'headers.authorization', '').replace(/^Bearer /gmi, '')
        // console.log(newToken);
    return response;
}, async function(error) {
    console.log(error);
    let token = localStorage.getItem('token')
        // if (_.get(error, 'response.status') === 401) {
        //   if (!/^\/(home|login|setting | forgot_password | auth | onelink | download | app | hcec_qr | example) /gim.test(window.location.pathname)) {
        //     localStorage.getItem('token')
        //   }
        // }

    if (empty(token)) { //_.get(error, 'response.status') === 401 ||
        window.location = '/'
            // if (!/^\/(home|login|setting | forgot_password | auth | onelink | download | app | hcec_qr | example) /gim.test(window.location.pathname)) {
            //   // window.location = '/api/login/local/auth?redirect=' +
            //   //   _.result(window.location, "pathname").replace(/\//g, ">")
            // }
    } else if (_.get(error, 'response.status') === 404) {
        if (!/^\/(home|login|setting | forgot_password | auth | onelink | download | app | hcec_qr | example) /gim.test(window.location.pathname)) {
            $vm.$nuxt.error({ statusCode: 404, message: _.get(error, 'response.data.message') })
        }
    } else {
        if (!/^\/(home|login|setting | forgot_password | auth | onelink | download | app | hcec_qr | example) /gim.test(window.location.pathname)) {
            const error = _.get(error, 'response.data.message') || _.get(error, 'response.data.error') || _.get(error, 'response.data')
            if (error) vPopup()
        }
    }

    // window.vPopup && await vPopup(error.response.message)
    return Promise.reject(error, error.response);
});

instance.CancelToken = axios.CancelToken

export default instance