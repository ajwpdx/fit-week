import React, {useState} from 'react'


const initialWO = {
    title: ""
}

const WorkoutForm = (props) => {

    const [newWorkout, setNewWorkout] = useState(initialWO)

    const handleChange = (evt) => {
        const name = evt.target.name
        const value = evt.target.value

        setNewWorkout({...newWorkout, [name]:value,})
    }

    const saveWorkout = (evt) => {
        evt.preventDefault()
    }

    return (

        <form className={props.creatingWO ? "workout-form": "workout-form hidden" } style={props.WOFormPosition} onSubmit={saveWorkout}>
            <input
            name="title"
            className="wo-title"
            placeholder="Workout Title"
            value={newWorkout.title}
            onChange={handleChange}

            />

            <input
            name="notes"
            className="wo-notes"
            placeholder="Add notes"

            />
            <div className='form-btns'>
            <button className='save'>Save</button>
            <button className='cancel'>Cancel</button>
            </div>
        </form>

    )

}

export default WorkoutForm