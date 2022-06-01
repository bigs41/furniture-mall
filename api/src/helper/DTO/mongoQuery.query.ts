import * as _ from 'lodash'
import { MongoQueryOption } from './mongoQuery.dto'

export class QueryAggregateBase {
    protected query = []

    public push(operator: string, pipeline: Object, ignoreNull: boolean = false) {
        if (!ignoreNull) {
            this.query.push({ [operator]: pipeline })
        } else {

            if (!!(pipeline)) {
                this.query.push({ [operator]: pipeline })
            }
        }
    }

    public options(obj: MongoQueryOption, pipeline: string[] | string) {
        if (_.isArray(pipeline)) {
            for (let opt of pipeline) {
                let value = !!obj[opt] ? obj[opt] : null
                if (opt == 'sort') {
                    value = JSON.parse(value)
                }
                this.push('$' + opt, value, true)
            }
        } else {
            let value = !!(obj[pipeline]) ? obj[pipeline] : null
            this.push(pipeline, value, true)
        }

    }

    public getQuery() {
        return this.query
    }
}
