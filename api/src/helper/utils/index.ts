import * as _ from 'lodash';
const collect = require('collect.js');
import * as fs from 'fs';
import * as pdf from 'pdf-creator-node';
//get pagination
export const range = (start, stop, step=1) => {
    if (typeof stop == 'undefined') {
      // one param defined
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
}
  
export const reqJson = function (obj = {}, item = []) {
  for (const object of item) {
    if (!empty(obj[object])) {
      if (typeof obj[object] == 'string') {
        obj[object] = reqJsonConverte(obj[object])
      }
    }
  }
  return obj
}

/**
 * 
 * @param $model this.<Service>.$model('<name schema>')
 * @param $query {Object} {params:{},where:{}}
 * @returns  {Promise<any>} {
 *  docs:[],
 *  totalDocs:number,
 *  limit:number,
 *  page:number,
 *  totalPages:number
 * }
 */
export const queryPagination = ($model,$query={}) => {
  const $where = _.get($query, 'where', {});
  let _or = [];
  try {
    if(/^{|:|}$/.test(_.get($query, 'params.search', ''))){
      _.set($query, 'params.search', JSON.parse(_.get($query, 'params.search', '')))
    }
  } catch (error) {
    
  }
  if(typeof _.get($query, 'params.search', '') === 'string' ){
    _or = _.get($query, 'params.searchFields', []).map(x => {
      return { [x]: { $regex: `.*${_.get($query, 'params.search', '')}.*`, $options: 'i' } };
    })
  }else{
    _or = Object.entries(_.get($query, 'params.search', {})).map((v) => {
      if (typeof v[1] === 'string') {
        return { [v[0]]: { $regex: `.*${v[1]}.*`, $options: 'i' } };
      } else { 
        if (v[1] == 'true' || v[1] == true || v[1] == 'false' || v[1] == false) {

          return { [v[0]]: getBoolean(v[1]) };
        } else {
          return { [v[0]]: v[1] };
        }
      }
    })
  }
  if ($where.$or) {
    if (!empty(_or)) {
      // $where.$or = $where.$or || [];
      $where.$or.push({ $and: _or });
    }
    // $where.$or = $where.$or.concat(_or);
  }else{
    if (!empty(_or)) {
      $where.$or = [{ $and: _or }];
    }
  }
  if (!empty(_.get($query, 'params.where', ''))) {
    let __where = _.get($query, 'params.where', {});
    if (typeof __where == 'string') {
      __where = JSON.parse(__where);
    }
    $where.$and = $where.$and || [];
    $where.$and.push(__where);
    
  }

  // except
  if (_.get($query, 'params.except', [])) {
    $where.$and = $where.$and || [];
    $where.$and.push({ '_id': {$nin: _.get($query, 'params.except', [])} })
  }

  const sort = _.get($query, 'params.orderBy', []).map(x => {
    return {[x.replace('-','')]:/[-]/.test(x)?-1:1}
  }).reduce(function(dictionary, next) {
    return Object.assign(dictionary, next);
  }, {});
  const $options = { page: _.get($query, 'params.page', 1), limit: _.get($query, 'params.limit', 10),sort }
  if(!empty(_.get($query, 'params.select', []))){
    $options['select'] = reqJsonConverte(_.get($query, 'params.select', []))
  }
  const paginate = [
    $where, $options
  ]
  
  return $model.paginate(...paginate);
  
}
/** 
 * เช็คข้อมูลหรือตัวแปร ว่า empty
 * @param {String} mixed_var ข้อมูลหรือตัวแปรที่ต้องการเช็ค
 * @example empty('')
 * @returns {Boolean} true ถ้าว่าง หรือ null หรือ undefined
 */
 export const empty = (mixed_var:any) => {
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
  }

  export const get = (items:any, key:any, defaultData:any) => {
    if(typeof key=='string'){
      return empty(_.get(items, key)) ? _.get(items, key, defaultData) : defaultData;
    }else if(typeof key=='object'){
      return getlist(items, key, defaultData)
    }else{
      return _.get(items, key)
    }
  }
  export const getlist = function(input,list=[],defaults='') {
    let output=defaults;
    for (const [key,val] of Object.entries(list)) {
        let result = get(input,val,undefined)
        if (!empty(result)) {
            output = result
            break;
        }
    }
    return output
  }
  export const IsEmail = email => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  //check email verify
  export const checkEmailVerify = async (email:string) => {
    const verifier = require('email-verify')
    return new Promise((resolve,reject)=>{
      verifier.verify(email, function (err, info) {
        if (err) return resolve(true)
        return resolve(info.success)
      })
    })
  }
  export const getBoolean = (value) => {
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
  }
  export const isNumber = (s) => {
    const str = ('' + s).trim();
    if (str.length === 0) return false;
    return !isNaN(+str);
  }
  export const isNumeric = (value) => {
    return _.isNumber(value) || (!_.isEmpty(value) && !_.isNaN(value));
  }
  export const getNumber = (s) => {
    if (isNumeric(s)) {
      if (typeof s === 'string') {
        s = parseInt(s)
      }
    }
    return s;
}
function falsyValue(item) {
  if (Array.isArray(item)) {
    if (item.length) {
      return false;
    }
  } else if (item !== undefined && item !== null && (typeof item === 'undefined' ? 'undefined' : typeof (item)) === 'object') {
    if (Object.keys(item).length) {
      return false;
    }
  } else if (item) {
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
      } else if (!falsyValue(items[key])) {
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

  export const filter = (items, fn) => {
    var func = fn || false;
    var filteredItems = null;
    if (Array.isArray(items)) {
      filteredItems = filterArray(func, items);
    } else {
      filteredItems = filterObject(func, items);
    }
    return filteredItems;
}
export const testJSON = (text) => {
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
}

export const reqJsonConverte = function (obj = {}) {
  if (!empty(obj)) {
    if (typeof obj == 'string') {
      if (testJSON(obj)) {
        obj = JSON.parse(obj)
      } else {
        obj = (obj).split(',')
      }
    }
  }
  return obj;
}

/** 
 *ฟังก์ชัน only เลือกข้อมูลที่ต้องการใน Object
 * @param {Object} Object ข้อมูล
 * @param {Array} keys ที่ต้องการดึงจากข้อมูล
**/
export const only = (obj, keys:any = []) => {
  var filtered = {}
  keys = reqJsonConverte(keys)
  if (Array.isArray(obj)) {
    filtered = filter(obj, item => keys.indexOf(item) !== -1)
  } else if (!empty(keys)) {
    keys.forEach(key => {
      if (typeof key === 'object') {
        let keyIndex:any = _.head(key)
        let keyValue:any = _.last(key)
        if (obj.hasOwnProperty(keyIndex)) {
          filtered[keyValue] = obj[keyIndex]
        }
      } else {
        if (obj.hasOwnProperty(key)) {
          filtered[key] = obj[key]
        }
      }
    })
  }
  return filtered
}

export const pdfBuffer = (html,data, options = {}) => {
  if(!empty(options)){
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
                2: 'Second page', // Any page number is working. 1-based index
                default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
                last: 'Last Page'
            }
        }
    }
  }
  var document = {
    html: html,
    data: {
      data
    },
    type: "buffer",
  };
  return pdf.create(document, options)
}
