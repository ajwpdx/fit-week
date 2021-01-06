import React from 'react'

import PlannerWorkout from './PlannerWorkout'

const dummyWorkouts = {
    title: 'workout'
}

const Planner = (props) => {

    return (
        <section id='planner'>
            <h2 className='time-period-title'>Current Week</h2>
            <div id='planner-days'>
            <div className="planner-day">
                <h3>Monday</h3>
                <div className="planner-workouts-container">
                    <PlannerWorkout/>
                    <PlannerWorkout/>
                </div>
            </div>
            <div className="planner-day">
                <h3>Tuesday</h3>
                <div className="planner-workouts-container">
                    <PlannerWorkout/>
                    <PlannerWorkout/>
                </div>
            </div>
            <div className="planner-day">
                <h3>Wednesday</h3>
                <div className="planner-workouts-container">
                    <PlannerWorkout/>
                    <PlannerWorkout/>
                </div>
            </div>
            <div className="planner-day">
                <h3>Thruday</h3>
                <div className="planner-workouts-container">
                    <PlannerWorkout/>
                    <PlannerWorkout/>
                </div>
            </div>
            <div className="planner-day">
                <h3>Friday</h3>
                <div className="planner-workouts-container">
                    <PlannerWorkout/>
                    <PlannerWorkout/>
                </div>
            </div>
            <div className="planner-day">
                <h3>Saturday</h3>
                <div className="planner-workouts-container">
                    <PlannerWorkout/>
                    <PlannerWorkout/>
                </div>
            </div>
            <div className="planner-day">
                <h3>Sunday</h3>
                <div className="planner-workouts-container">
                    <PlannerWorkout/>
                    <PlannerWorkout/>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Planner