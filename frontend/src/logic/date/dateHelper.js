import moment from "moment"

class DateHelper {

    static getCurrentDate() {
        return moment()
    }

    static getCurrentMonth() {
        return moment().month()
    }

    static getFirstDayOfMonth(date) {
        return date.startOf('month').format('ddd');
    }

    static getCountDaysOfMonth(date) {
        if(!date) return moment().daysInMonth()
        let temp = moment(date);
        return temp.daysInMonth()
    }

    static addMonth(date) {
        return moment(date).add(1, 'M');
    }

    static substractMonth(date) {
        return moment(date).subtract(1, 'M');
    }
}

export default DateHelper