import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStickyNote, faPlus } from '@fortawesome/free-solid-svg-icons'


const initialWO = {
    title: ""
}

const WorkoutForm = (props) => {

    const [newWorkout, setNewWorkout] = useState(initialWO)
    const [hasNotes, setHasNotes] = useState(false)

    const handleChange = (evt) => {
        const name = evt.target.name
        const value = evt.target.value

        setNewWorkout({ ...newWorkout, [name]: value, })
    }

    const saveWorkout = (evt) => {
        evt.preventDefault()
    }

    const cancelWorkout = (evt) => {
        evt.preventDefault()

    }

    const addNotes = (evt) => {
        setHasNotes(true)
    }

    return (

        <form className={props.creatingWO ? "workout-form" : "workout-form hidden"} style={props.WOFormPosition} onSubmit={saveWorkout}>
            <input
                name="title"
                className="wo-title"
                placeholder="Workout Title"
                value={newWorkout.title}
                onChange={handleChange}
                autoComplete='off'

            />
            <div className='wo-notes'>
                <div className={hasNotes ? "add-note-icon hidden" : "add-note-icon"} onClick={addNotes}>
                    <FontAwesomeIcon icon={faPlus} className='icon plus-i' />
                    <FontAwesomeIcon icon={faStickyNote} className='icon' />
                </div>
                <textarea
                    name="notes"
                    placeholder="Add notes"
                    className={hasNotes ? "notes-field tall-input" : "notes-field tall-input hidden"}
                    autoComplete='off'

                />
            </div>
            <div className='form-btns'>
                <button className='save'>Save</button>
                <button className='cancel' onSubmit={cancelWorkout}>Cancel</button>
            </div>
        </form>

    )

}

export default WorkoutForm