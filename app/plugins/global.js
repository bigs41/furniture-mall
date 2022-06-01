import Vue from 'vue'
import _ from 'lodash'
Vue.prototype.$strLast = (str, find) => {
    var regex = new RegExp(`${find}$`);
    if (!regex.test(str)) {
        str = `${str}${find}`
    }
    return str
}
Vue.prototype.$jwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]))
    } catch (error) {
        return undefined
    }
}
Vue.prototype.empty = (mixed_var) => {
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
Vue.prototype.$rule = ($selector = '', option = {}) => {
    const $options = _.merge(option, {
        required: ('กรุณากรอกข้อมูล'),
        email: ('กรุณากรอกอีเมล์ให้ถูกต้อง'),
        tel: ('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง'),
        number: ('กรุณากรอกตัวเลขเท่านั้น'),
    })
    const $rule = {
        required: (value) => !!value || _.get($options, 'required', ('กรุณากรอกข้อมูล')),
        email: (value) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) || _.get($options, 'email', ('กรุณากรอกอีเมล์ให้ถูกต้อง')),
        tel: (value) => /^[0-9]{10,10}$/.test(value) || _.get($options, 'tel', ('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง')),
        number: (value) => /^[0-9]{1,}$/.test(value) || _.get($options, 'number', ('กรุณากรอกตัวเลขเท่านั้น')),
    }
    $selector = $selector.split('|')
    return $selector.map(($item) => {
        return $rule[$item]
    })
}