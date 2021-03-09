import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'


const PlannerWorkoutButtons = (props) => {

    return (
        <div className='planner-workout-buttons'>
            <button>
                C
            </button>
            <button>
                <FontAwesomeIcon icon={faCommentDots} className='icon comment'/>
            </button>
            <button>
                D
            </button>
        </div>
    )

}

export default PlannerWorkoutButtons