import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStickyNote, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'


const initialWO = {
    title: "",
    notes: "",
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
        props.setCreatingWO(false)
        setNewWorkout(initialWO)
        setHasNotes(false)
    }

    const addNotes = (evt) => {
        setHasNotes(true)
    }

    return (


        <div className={props.creatingWO ? "workout-form-container" : "workout-form-container hidden"} style={props.WOFormPosition}>

            <FontAwesomeIcon icon={faTimes} className='icon cancel' onClick={cancelWorkout}/>
            <form className="workout-form"  onSubmit={saveWorkout}>
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
                        onChange={handleChange}

                    />
                </div>
                <div className='form-btns'>
                    <button className='save'>Save</button>
                    {/* <button className='cancel' onSubmit={cancelWorkout}>Cancel</button> */}
                </div>
            </form>
        </div>

    )

}

export default WorkoutForm