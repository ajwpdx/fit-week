import { DateTime } from 'luxon'
import {daysOfTheWeekAbrev } from './data'

// const daysOfTheWeekAbrev = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const today = new Date();

export const getDayType = (weekView, startDay, position) => {
    
    if (weekView < 0){
        return "past-date"
    } else if (weekView > 0) {
        return "future-date"
    } else {
        let dayIncrement = 0

        if (today.getDay() > startDay){
            dayIncrement = startDay - today.getDay()
        } else if (today.getDay() < startDay) {
            dayIncrement = -(7 - (startDay - today.getDay()))
        }

        if (dayIncrement + position > 0) {
            return "future-date"
        } else if (dayIncrement + position < 0) {
            return "past-date"
        } else{
            return "current-date"
        }
    }

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

    return dayOfWeek + " • " + (startOfWeek.plus({days:position}).day)

}

export const getWeekStart = (weekView, startDay) =>{

    let dayIncrement = 0

    if (today.getDay() > startDay){
        dayIncrement = startDay - today.getDay()
    } else if (today.getDay() < startDay) {
        dayIncrement = -(7 - (startDay - today.getDay()))
    }

    let startOfWeek = DateTime.local().plus({days: dayIncrement, week: weekView})
    let endOfWeek = startOfWeek.plus({days: 6})

    return startOfWeek.toFormat('LLL dd')
}

export const getWeekEnd = (weekView, startDay) =>{

    let dayIncrement = 0

    if (today.getDay() > startDay){
        dayIncrement = startDay - today.getDay()
    } else if (today.getDay() < startDay) {
        dayIncrement = -(7 - (startDay - today.getDay()))
    }

    let startOfWeek = DateTime.local().plus({days: dayIncrement, week: weekView})
    let endOfWeek = startOfWeek.plus({days: 6})

    return endOfWeek.toFormat('LLL dd')
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

    return startOfWeek.toFormat('LLL dd') + " - " + endOfWeek.toFormat('LLL dd')
} 

export const getYear = (weekView, startDay) => {

    let dayIncrement = 0

    if (today.getDay() > startDay){
        dayIncrement = startDay - today.getDay()
    } else if (today.getDay() < startDay) {
        dayIncrement = -(7 - (startDay - today.getDay()))
    }

    let startOfWeek = DateTime.local().plus({days: dayIncrement, week: weekView})
    let endOfWeek = startOfWeek.plus({days: 6})

    if (startOfWeek.toFormat('yyyy') === endOfWeek.toFormat('yyyy')){

        return startOfWeek.toFormat('yyyy')
    } else {
        return startOfWeek.toFormat('yyyy') + " - " + endOfWeek.toFormat('yyyy')
    }
}