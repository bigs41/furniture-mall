"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAggregateBase = void 0;
const _ = require("lodash");
class QueryAggregateBase {
    constructor() {
        this.query = [];
    }
    push(operator, pipeline, ignoreNull = false) {
        if (!ignoreNull) {
            this.query.push({ [operator]: pipeline });
        }
        else {
            if (!!(pipeline)) {
                this.query.push({ [operator]: pipeline });
            }
        }
    }
    options(obj, pipeline) {
        if (_.isArray(pipeline)) {
            for (let opt of pipeline) {
                let value = !!obj[opt] ? obj[opt] : null;
                if (opt == 'sort') {
                    value = JSON.parse(value);
                }
                this.push('$' + opt, value, true);
            }
        }
        else {
            let value = !!(obj[pipeline]) ? obj[pipeline] : null;
            this.push(pipeline, value, true);
        }
    }
    getQuery() {
        return this.query;
    }
}
exports.QueryAggregateBase = QueryAggregateBase;
//# sourceMappingURL=mongoQuery.query.js.map