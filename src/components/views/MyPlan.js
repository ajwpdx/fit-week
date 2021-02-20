import React from 'react'
import Header from '../layouts/Header'
import Planner from '../layouts/Planner'
import WorkoutLibrary from '../layouts/WorkoutLibrary'

const MyPlan = (props) => {


    return (
        <div id='my-plan'>
            <Header view="my-plan"/>
            <div className='my-plan-body'>
            <Planner />
            <WorkoutLibrary />
            </div>
        </div>
    )
}

export default MyPlan