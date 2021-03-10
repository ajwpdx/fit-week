import React, { useState } from 'react'
import { getDayType, getDayOfWeek, getWeek, getYear } from "../../util/dates"
import { myWorkouts } from "../../util/data"
import { useHistory } from 'react-router'

import PlannerWorkout from './PlannerWorkout'

const PlannerDay = (props) => {
    const history = useHistory()
    const [weekView, setWeekView] = useState(0)
    const [workouts, setWorkouts] = useState(myWorkouts)
    const [creatingWO, setCreatingWO] = useState(false)
    const [WOFormPosition, setWOFormPosition] = useState({left: 200, top: 200})

    const createNewWO = (evt) => {
        setWOFormPosition({left: evt.target.offsetLeft + 25, top: evt.target.parentElement.offsetTop + 25})
        setCreatingWO(true)
    } 

    const toCreateWorkout = () =>{
        history.push('/create-workout')
    }

    return (
        <div className={"planner-day " + getDayType(props.weekView, props.startDay, props.day)}>
        <h3 className='planner-day-title'> {getDayOfWeek(weekView, props.startDay, props.day)}</h3>
        <div className="planner-workouts-container">

            {workouts.map((workout) => {
                return <PlannerWorkout key={workout.workoutId} workout={workout} />

            })}
            <button className='add-workout-btn'onClick={toCreateWorkout}> + New Workout</button>
        </div>
    </div>
    )
}

export default PlannerDay