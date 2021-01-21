import {
    FETCHING_SAVED_WORKOUTS,
    FETCH_SAVED_WORKOUTS,
    FETCH_CURRENT_WORKOUTS
} from '../actions'

export const intitalApplicationState = {

    isLoading: false, 
    savedWorkouts: [],
    startDay: 1,
    weekView: 0

}

export default function reducer(state = intitalApplicationState, action) {
    switch (action.type) {
        case FETCHING_SAVED_WORKOUTS:
            return {...state}
        case FETCH_SAVED_WORKOUTS:
            return {...state}
        case FETCH_CURRENT_WORKOUTS:
            return{...state}
        default:
            return state
    }
}