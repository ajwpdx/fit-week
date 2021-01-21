import { DateTime } from 'luxon'

const startOfWeek = 0

const daysOfTheWeekAbrev = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const today = new Date();

export const getDayType = (week, startDay) => {
    return "current-date"
}

export const getCalendarDay = (week, startDay) => {


    if (today.getDay() < startDay) {
        return (today.getDate() - startDay)
    } else if (today.getDay() > startDay){
        return (today.getDate() + startDay)
    } else {

        return today.getDate()
    }
    
}

export const getDayOfWeek = (startDay) => {
    
    let calendarDay = String(today.getDate());

    // if (startOfWeek > today.getDay()) {
    //     dd = String(today.getDate - startOfWeek)
    // } else if (startOfWeek < today.getDay){
    //     dd = String(today.getDate + startOfWeek)
    // }

    if (startDay >= 7) {
        return daysOfTheWeekAbrev[startDay - 7]
    } else {
        return daysOfTheWeekAbrev[startDay]
    }


}


export const getToday = () =>{

    // let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    
    return mm + '/' + dd + '/' + yyyy;
}


export const getWeek = (increment, startDay) =>{

    if (today > startDay) {
        
    }
}