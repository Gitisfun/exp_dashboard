import Days from "../constants/days";
import DateHelper from "../date/dateHelper"

class Calendar {

    constructor() {
        this.currentDate = DateHelper.getCurrentDate();
        this.startPosition = this.getSurplusOfMonth();
        this.daysOfMonth = this.getDaysOfMonth()
    }

    getDaysOfMonth() {
        return DateHelper.getCountDaysOfMonth(this.currentDate) + this.startPosition
    }

    getSurplusOfMonth() {
        const firstDayOfMonth = DateHelper.getFirstDayOfMonth(this.currentDate)

        switch(firstDayOfMonth){
            case Days.MONDAY: return 0
            case Days.TUESDAY: return 1
            case Days.WEDNESDAY: return 2 
            case Days.THURSDAY: return 3
            case Days.FRIDAY: return 4
            case Days.SATERDAY: return 5 
            case Days.SUNDAY: return 6
        }
    }

    getNameOfCurrentMonth(){
        return this.currentDate.format("MMMM")
    }

    previous() {
        this.currentDate = DateHelper.substractMonth(this.currentDate)
        this.startPosition = this.getSurplusOfMonth();
        this.daysOfMonth = this.getDaysOfMonth()
        return this.getList()
    }
    
    next() {
        this.currentDate = DateHelper.addMonth(this.currentDate)
        this.startPosition = this.getSurplusOfMonth();
        this.daysOfMonth = this.getDaysOfMonth()
        return this.getList()
    }

    getList(){
        let temp = [];
        let tempDate = this.currentDate.clone()

        for(let i = 0; i < this.daysOfMonth; i++){
            if((i - this.startPosition) < 0) {
                temp.push({
                    id: i,
                    day: i - this.startPosition + 1,
                    date: null,
                    events: []
                })
            }
            else {
                temp.push({
                    id: i,
                    day: i - this.startPosition + 1,
                    date: tempDate,
                    events: []
                })
                tempDate = tempDate.clone().add(1, "day")
            }
        }
        return temp
    }
}

export default Calendar