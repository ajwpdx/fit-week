import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SavedWorkouts = (props) => {

    const [search, setSearch] = useState('')

    const onChange = (evt) => {
        setSearch(evt.target.value)
    }

    return (
        <section id='saved-workouts'>
            <h2>My Workouts</h2>

            <form>
                <FontAwesomeIcon icon={faSearch} className='search-i icon' />
                <input
                    autoComplete='off'
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