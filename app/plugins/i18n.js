import Vue from 'vue'
import th from '../locales/th.js'
import en from '../locales/en.js'
import _ from 'lodash'

const message = Object.freeze({
    en,
    th
})

Vue.prototype.$t = window.$t = function (key) {
    let lang = _.get(this.$store.state, 'setting.lang', null)
    if (!lang) { 
        lang = localStorage.getItem('lang')
    }
    if (!lang) { 
        lang = 'en'
    }
    return _.get(message, `${lang}.${key}`, key);
}
  