"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pdfBuffer = exports.only = exports.reqJsonConverte = exports.testJSON = exports.filter = exports.getNumber = exports.isNumeric = exports.isNumber = exports.getBoolean = exports.checkEmailVerify = exports.IsEmail = exports.getlist = exports.get = exports.empty = exports.queryPagination = exports.reqJson = exports.range = void 0;
const _ = require("lodash");
const collect = require('collect.js');
const pdf = require("pdf-creator-node");
const range = (start, stop, step = 1) => {
    if (typeof stop == 'undefined') {
        stop = start;
        start = 0;
    }
    if (typeof step == 'undefined') {
        step = 1;
    }
    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }
    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }
    return result;
};
exports.range = range;
const reqJson = function (obj = {}, item = []) {
    for (const object of item) {
        if (!(0, exports.empty)(obj[object])) {
            if (typeof obj[object] == 'string') {
                obj[object] = (0, exports.reqJsonConverte)(obj[object]);
            }
        }
    }
    return obj;
};
exports.reqJson = reqJson;
const queryPagination = ($model, $query = {}) => {
    const $where = _.get($query, 'where', {});
    let _or = [];
    try {
        if (/^{|:|}$/.test(_.get($query, 'params.search', ''))) {
            _.set($query, 'params.search', JSON.parse(_.get($query, 'params.search', '')));
        }
    }
    catch (error) {
    }
    if (typeof _.get($query, 'params.search', '') === 'string') {
        _or = _.get($query, 'params.searchFields', []).map(x => {
            return { [x]: { $regex: `.*${_.get($query, 'params.search', '')}.*`, $options: 'i' } };
        });
    }
    else {
        _or = Object.entries(_.get($query, 'params.search', {})).map((v) => {
            if (typeof v[1] === 'string') {
                return { [v[0]]: { $regex: `.*${v[1]}.*`, $options: 'i' } };
            }
            else {
                if (v[1] == 'true' || v[1] == true || v[1] == 'false' || v[1] == false) {
                    return { [v[0]]: (0, exports.getBoolean)(v[1]) };
                }
                else {
                    return { [v[0]]: v[1] };
                }
            }
        });
    }
    if ($where.$or) {
        if (!(0, exports.empty)(_or)) {
            $where.$or.push({ $and: _or });
        }
    }
    else {
        if (!(0, exports.empty)(_or)) {
            $where.$or = [{ $and: _or }];
        }
    }
    if (!(0, exports.empty)(_.get($query, 'params.where', ''))) {
        let __where = _.get($query, 'params.where', {});
        if (typeof __where == 'string') {
            __where = JSON.parse(__where);
        }
        $where.$and = $where.$and || [];
        $where.$and.push(__where);
    }
    if (_.get($query, 'params.except', [])) {
        $where.$and = $where.$and || [];
        $where.$and.push({ '_id': { $nin: _.get($query, 'params.except', []) } });
    }
    const sort = _.get($query, 'params.orderBy', []).map(x => {
        return { [x.replace('-', '')]: /[-]/.test(x) ? -1 : 1 };
    }).reduce(function (dictionary, next) {
        return Object.assign(dictionary, next);
    }, {});
    const $options = { page: _.get($query, 'params.page', 1), limit: _.get($query, 'params.limit', 10), sort };
    if (!(0, exports.empty)(_.get($query, 'params.select', []))) {
        $options['select'] = (0, exports.reqJsonConverte)(_.get($query, 'params.select', []));
    }
    const paginate = [
        $where, $options
    ];
    return $model.paginate(...paginate);
};
exports.queryPagination = queryPagination;
const empty = (mixed_var) => {
    if (!mixed_var || mixed_var == '0') {
        return true;
    }
    if (typeof mixed_var == 'object') {
        for (var k in mixed_var) {
            return false;
        }
        return true;
    }
    return false;
};
exports.empty = empty;
const get = (items, key, defaultData) => {
    if (typeof key == 'string') {
        return (0, exports.empty)(_.get(items, key)) ? _.get(items, key, defaultData) : defaultData;
    }
    else if (typeof key == 'object') {
        return (0, exports.getlist)(items, key, defaultData);
    }
    else {
        return _.get(items, key);
    }
};
exports.get = get;
const getlist = function (input, list = [], defaults = '') {
    let output = defaults;
    for (const [key, val] of Object.entries(list)) {
        let result = (0, exports.get)(input, val, undefined);
        if (!(0, exports.empty)(result)) {
            output = result;
            break;
        }
    }
    return output;
};
exports.getlist = getlist;
const IsEmail = email => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
exports.IsEmail = IsEmail;
const checkEmailVerify = async (email) => {
    const verifier = require('email-verify');
    return new Promise((resolve, reject) => {
        verifier.verify(email, function (err, info) {
            if (err)
                return resolve(true);
            return resolve(info.success);
        });
    });
};
exports.checkEmailVerify = checkEmailVerify;
const getBoolean = (value) => {
    switch (value) {
        case true:
        case "true":
        case 1:
        case "1":
        case "on":
        case "yes":
        case "YES":
        case "y":
        case "Y":
            return true;
        default:
            return false;
    }
};
exports.getBoolean = getBoolean;
const isNumber = (s) => {
    const str = ('' + s).trim();
    if (str.length === 0)
        return false;
    return !isNaN(+str);
};
exports.isNumber = isNumber;
const isNumeric = (value) => {
    return _.isNumber(value) || (!_.isEmpty(value) && !_.isNaN(value));
};
exports.isNumeric = isNumeric;
const getNumber = (s) => {
    if ((0, exports.isNumeric)(s)) {
        if (typeof s === 'string') {
            s = parseInt(s);
        }
    }
    return s;
};
exports.getNumber = getNumber;
function falsyValue(item) {
    if (Array.isArray(item)) {
        if (item.length) {
            return false;
        }
    }
    else if (item !== undefined && item !== null && (typeof item === 'undefined' ? 'undefined' : typeof (item)) === 'object') {
        if (Object.keys(item).length) {
            return false;
        }
    }
    else if (item) {
        return false;
    }
    return true;
}
function filterObject(func, items) {
    var result = {};
    Object.keys(items).forEach(function (key) {
        if (func) {
            if (func(items[key], key)) {
                result[key] = items[key];
            }
        }
        else if (!falsyValue(items[key])) {
            result[key] = items[key];
        }
    });
    return result;
}
function filterArray(func, items) {
    if (func) {
        return items.filter(func);
    }
    var result = [];
    for (var i = 0; i < items.length; i += 1) {
        var item = items[i];
        if (!falsyValue(item)) {
            result.push(item);
        }
    }
    return result;
}
const filter = (items, fn) => {
    var func = fn || false;
    var filteredItems = null;
    if (Array.isArray(items)) {
        filteredItems = filterArray(func, items);
    }
    else {
        filteredItems = filterObject(func, items);
    }
    return filteredItems;
};
exports.filter = filter;
const testJSON = (text) => {
    if (typeof text !== "string") {
        return false;
    }
    try {
        if (typeof JSON.parse(text) == 'object') {
            return true;
        }
        return false;
    }
    catch (error) {
        return false;
    }
};
exports.testJSON = testJSON;
const reqJsonConverte = function (obj = {}) {
    if (!(0, exports.empty)(obj)) {
        if (typeof obj == 'string') {
            if ((0, exports.testJSON)(obj)) {
                obj = JSON.parse(obj);
            }
            else {
                obj = (obj).split(',');
            }
        }
    }
    return obj;
};
exports.reqJsonConverte = reqJsonConverte;
const only = (obj, keys = []) => {
    var filtered = {};
    keys = (0, exports.reqJsonConverte)(keys);
    if (Array.isArray(obj)) {
        filtered = (0, exports.filter)(obj, item => keys.indexOf(item) !== -1);
    }
    else if (!(0, exports.empty)(keys)) {
        keys.forEach(key => {
            if (typeof key === 'object') {
                let keyIndex = _.head(key);
                let keyValue = _.last(key);
                if (obj.hasOwnProperty(keyIndex)) {
                    filtered[keyValue] = obj[keyIndex];
                }
            }
            else {
                if (obj.hasOwnProperty(key)) {
                    filtered[key] = obj[key];
                }
            }
        });
    }
    return filtered;
};
exports.only = only;
const pdfBuffer = (html, data, options = {}) => {
    if (!(0, exports.empty)(options)) {
        options = {
            format: "A4",
            orientation: "portrait",
            border: "10mm",
            header: {
                height: "45mm",
                contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
            },
            footer: {
                height: "28mm",
                contents: {
                    first: 'Cover page',
                    2: 'Second page',
                    default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>',
                    last: 'Last Page'
                }
            }
        };
    }
    var document = {
        html: html,
        data: {
            data
        },
        type: "buffer",
    };
    return pdf.create(document, options);
};
exports.pdfBuffer = pdfBuffer;
//# sourceMappingURL=index.js.map