import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const WorkoutLibrary = (props) => {

    const [search, setSearch] = useState('')

    const onChange = (evt) => {
        setSearch(evt.target.value)
    }

    return (
        <section id='workout-library'>
            <h2 className='wo-library-title'>Workout Library</h2>

            <form className='wo-library-search'>
                <input
                    autoComplete='off'
                    placeholder='Find workouts'
                    name='search'
                    type='text'
                    value={search}
                    onChange={onChange}
                />
                <button>
                    <FontAwesomeIcon icon={faSearch} className='search-i icon' />
                </button>
            </form>
        </section>
    )
}

export default WorkoutLibrary