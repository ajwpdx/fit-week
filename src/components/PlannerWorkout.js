import React from 'react'


const PlannerWorkout = (props) => {

    if (props.workout.time != null) {
        return (
            <div className='planner-workout time'>
                <h4>{props.workout.title}</h4>
                <p><strong>Time:</strong> {props.workout.time}</p>
                <p><strong>Notes:</strong> {props.workout.notes}</p>
            </div>
        )
    } else if (props.workout.distance != null) {
        return (
            <div className='planner-workout distance'>
                <h4>{props.workout.title}</h4>
                <p><strong>Distance:</strong> {`${props.workout.distance} ${props.workout.distanceMeasurement} `}</p>
                <p><strong>Notes:</strong> {props.workout.notes}</p>
            </div>
        )
    } else if (props.workout.setsOfReps != null) {
        return (
            <div className='planner-workout setsOfReps'>
                <h4>{props.workout.title}</h4>
                <p className='sets'><strong>Sets:</strong> {props.workout.time}</p>
                {props.workout.setsOfReps.map((reps, set) => {
                    return <p className='sets'>{`${set+1}: ${reps} reps`}</p>
                })}
                <p><strong>Notes:</strong> {props.workout.notes}</p>
            </div>
        )
    } else {
        return (
            <div className='planner-workout generic'>
                <h4>{props.workout.title}</h4>
            </div>
        )
    }


}

export default PlannerWorkout