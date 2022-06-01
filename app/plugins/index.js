import Vue from 'vue'
import VueGoogleCharts from 'vue-google-charts'
import './components'
import moment from '../utils/moment'
import _ from 'lodash'
import VueMask from 'v-mask'
import phoneFormat from "../utils/phoneFormat";
import VueSnip from 'vue-snip';
import Dexie from "dexie";
const db = new Dexie("v45db");
db.version(1).stores({
    orders: "++_id,type,code,quantity,json,created_at,updated_at",
});
Vue.use(VueSnip);
Vue.use(VueGoogleCharts)
Vue.use(VueMask)
Vue.prototype.$db = db;
Vue.prototype.$moment = window.moment = moment
Vue.prototype._ = _
Vue.prototype.phoneFormat = window.phoneFormat = phoneFormat
Vue.prototype.$checkPermission = async function(permissionName, role) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                const permissionList = _.get(this.$store, 'state.permission', [])
                const permission = _.find(permissionList, { name: permissionName })
                    //console.log(permissionList, permissionName);
                resolve(permission[role] === true)
            }, 400);
        } catch (error) {
            reject(error)
        }
    })
}
