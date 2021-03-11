import React from "react"
import Header from "../layouts/Header"
import WorkoutForm from "../layouts/WorkoutForm"

const CreateWorkout = (props) => {

    return (

        <div id="create-workout">
            <Header />
            <div className='create-workout'>
                <h2>Create Workout</h2>
                <form className='create-workout-form'>
                    <div className='topline-inputs'>
                    <div className='new-wo-title'>
                        <label>Title</label>
                        <input />
                    </div>
                    <div className='new-wo-date'>
                        <label>Date</label>
                        <input />
                    </div>
                    <div className='new-wo-category'>
                        <label>Category</label>
                        <input />
                    </div>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default CreateWorkout