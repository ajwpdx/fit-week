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

    return (
    <div className={props.createWO ? "workout-form": "workout-form hidden" } style={props.WOFormPosition}>
        <form>
            <input
            name="title"
            placeholder="title"
            value={newWorkout.title}
            onChange={handleChange}

            />
        </form>
    </div>
    )

}

export default WorkoutForm