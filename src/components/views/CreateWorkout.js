import React from "react"
import Header from "../layouts/Header"
import WorkoutForm from "../layouts/WorkoutForm"

const CreateWorkout = (props) => {

    return (

        <div id="create-workout">
            <Header/>
            <h1>Create Workout</h1>
            <WorkoutForm/>
        </div>

    )
}

export default CreateWorkout