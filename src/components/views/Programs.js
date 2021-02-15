import React, {useState} from 'react'

const Programs = (props) => {

    const [search, setSearch] = useState('')
    const onChange = (evt) => {
        setSearch(evt.target.value)
    }

    return (
        <section id="programs">
                <input
                autoComplete='off'
                placeholder='Find workouts'
                name='search'
                type='text'
                value={search}
                onChange={onChange}
                />
        </section>
    )
}

export default Programs