"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Process = exports.Query = void 0;
const $utils = require('../../helper/utils');
const _ = require('lodash');
class Query {
    constructor($model) {
        this.$model = $model;
        this.$model = $model;
    }
    aggregate(...args) {
        this.$format = 'aggregate';
        this.$aggregate = args;
        this.$query = this.$model.aggregate(...args);
        return this;
    }
    async sort(...args) {
        this.$query = this.$query.sort(...args);
        return this;
    }
    async pagination(page = 1, limit = 20) {
        let $paging = {};
        var $count = {};
        if (this.$format === 'aggregate') {
            let res = await this.$model.aggregate(this.$aggregate).count('total');
            $count = _.get(res, '0.total', 0);
            $paging = $utils.paginations($count, limit, page);
        }
        console.log(this.$query);
        this.$query = this.$query.skip(limit * page).limit(limit);
        return this.$query;
        return new Promise((resolve, reject) => {
            this.$query.skip(limit * page).limit(limit).exec((err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve({
                        data,
                        paging: $paging
                    });
                }
            });
        });
    }
}
exports.Query = Query;
const Process = async function ($model) {
    return new Query($model);
};
exports.Process = Process;
//# sourceMappingURL=query.js.map