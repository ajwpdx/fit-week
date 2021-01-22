import { DateTime } from 'luxon'

const daysOfTheWeekAbrev = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const today = new Date();

export const getDayType = (week, startDay) => {
    return "current-date"
}

export const getCalendarDay = (weekView, startDay, position) => {


    let dayIncrement = 0

    if (today.getDay() > startDay){
        dayIncrement = startDay - today.getDay()
    } else if (today.getDay() < startDay) {
        dayIncrement = -(7 - (startDay - today.getDay()))
    }

    let startOfWeek = DateTime.local().plus({days: dayIncrement, week: weekView})

    return startOfWeek.day 
    
}

export const getDayOfWeek = (weekView, startDay, position) => {

    let dayOfWeek = "Mon"
    
    if (startDay + position >= 7) {
        dayOfWeek = daysOfTheWeekAbrev[startDay + position - 7]
    } else {
        dayOfWeek = daysOfTheWeekAbrev[startDay + position]
    }

    let dayIncrement = 0

    if (today.getDay() > startDay){
        dayIncrement = startDay - today.getDay()
    } else if (today.getDay() < startDay) {
        dayIncrement = -(7 - (startDay - today.getDay()))
    }

    let startOfWeek = DateTime.local().plus({days: dayIncrement, week: weekView})

    return dayOfWeek + " • " + (startOfWeek.day + position)

}

export const getWeek = (weekView, startDay) =>{

    let dayIncrement = 0

    if (today.getDay() > startDay){
        dayIncrement = startDay - today.getDay()
    } else if (today.getDay() < startDay) {
        dayIncrement = -(7 - (startDay - today.getDay()))
    }

    let startOfWeek = DateTime.local().plus({days: dayIncrement, week: weekView})
    let endOfWeek = startOfWeek.plus({days: 6})

    return startOfWeek.toFormat('LLL dd, yyyy') + " - " + endOfWeek.toFormat('LLL dd, yyyy')
}