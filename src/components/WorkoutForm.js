import React from 'react'

const WorkoutForm = (props) => {

    if(props.createWO === true) {

    }


    return (
    

    <div className={props.createWO ? "workout-form": "workout-form hidden" }>
        <form>
            <input
            name="title"
            placeholder="title"

            />
        </form>
    </div>
    )

}

export default WorkoutForm