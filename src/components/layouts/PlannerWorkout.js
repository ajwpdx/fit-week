import React from 'react'


const PlannerWorkout = (props) => {

    if (props.workout.time != null) {
        return (
            <div className={`planner-workout time cat-${props.workout.category}`}>
                <h4>{props.workout.title}</h4>
                <p><strong>Time:</strong> {props.workout.time}</p>
                <p>{props.workout.notes}</p>
            </div>
        )
    } else if (props.workout.distance != null) {
        return (
            <div className={`planner-workout distance cat-${props.workout.category}`}>
                <h4>{props.workout.title}</h4>
                <p><strong>Distance:</strong> {`${props.workout.distance} ${props.workout.distanceMeasurement} `}</p>
                <p> {props.workout.notes}</p>
            </div>
        )
    } else if (props.workout.setsOfReps != null) {
        return (
            <div className={`planner-workout setOfReps cat-${props.workout.category}`}>
                <h4>{props.workout.title}</h4>
                <p><strong>Sets:</strong> {props.workout.time}</p>
                <div className='sets-container'>
                    {props.workout.setsOfReps.map((set, index) => {
                        return (
                            <div className='set'>
                                <p className='set-number'>{`${index + 1}`}</p>
                                <p className='set-details'>{`${set.reps} x ${set.weight} lbs`}</p>
                            </div>)
                    })}
                </div>
                <p>{props.workout.notes}</p>
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