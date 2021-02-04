import React, {useState} from 'react'

const SavedWorkouts = (props) => {

    const [search, setSearch] = useState('')

    const onChange = (evt) => {
        setSearch(evt.target.value)
    }

    return (
        <section id='saved-workouts'>
            <h2>My Workouts</h2>
            <form>
                <input
                placeholder='Find workouts'
                name='search'
                type='text'
                value={search}
                onChange={onChange}
                />
            </form>
        </section>
    )
}

export default SavedWorkouts