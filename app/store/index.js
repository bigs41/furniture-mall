import collect from 'collect.js';
import _ from 'lodash';
export const state = () => ({
    setting: {},
    permission: [],
    notify:[],
    cart:[]
})

export const mutations = {
    setting(state, setting) {
        window.setting = state.setting = setting
    },
    permission(state, permission) {
        state.permission = permission
    },
    notify(state, notify) {
        state.notify = notify
    },
    cart(state, cart) {
        state.cart = cart
    },
}

const getters = {
    getNotify: state => state.notify
  }