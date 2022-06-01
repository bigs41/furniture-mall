import * as moment from "moment-timezone";

export class TimeGenerate {
    public getTime(): string {
        return moment().tz('Asia/Bangkok').format("YYYY-MM-DDTHH:mm:ss.SSSSZ")
    }
}