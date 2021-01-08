import React from 'react'
import { connect } from 'react-redux'
import {getCalendarDay, getDayOfWeek} from "../util/dates"
import PlannerWorkout from './PlannerWorkout'

const dummyWorkouts = [{title: "Run", distance: "6 miles"}, {title: "Push ups", sets: 3}]

const Planner = (props) => {

    

    return (
        <section id='planner'>
            <h2 className='time-period-title'>Current Week</h2>
            <div id='planner-days'>
            <div className="planner-day">
                <h3>{getDayOfWeek(props.startDay)} • {getCalendarDay(props.weekIncrement, props.startDay)}</h3>
                <div className="planner-workouts-container">

                    <PlannerWorkout/>
                    <PlannerWorkout/>
                </div>
            </div>
            <div className="planner-day">
                <h3>{getDayOfWeek(props.startDay+1)}</h3>
                <div className="planner-workouts-container">
                    <PlannerWorkout/>
                    <PlannerWorkout/>
                </div>
            </div>
            <div className="planner-day">
                <h3>{getDayOfWeek(props.startDay+2)}</h3>
                <div className="planner-workouts-container">
                    <PlannerWorkout/>
                    <PlannerWorkout/>
                </div>
            </div>
            <div className="planner-day">
                <h3>{getDayOfWeek(props.startDay+3)}</h3>
                <div className="planner-workouts-container">
                    <PlannerWorkout/>
                    <PlannerWorkout/>
                </div>
            </div>
            <div className="planner-day">
                <h3>{getDayOfWeek(props.startDay+4)}</h3>
                <div className="planner-workouts-container">
                    <PlannerWorkout/>
                    <PlannerWorkout/>
                </div>
            </div>
            <div className="planner-day">
                <h3>{getDayOfWeek(props.startDay+5)}</h3>
                <div className="planner-workouts-container">
                    <PlannerWorkout/>
                    <PlannerWorkout/>
                </div>
            </div>
            <div className="planner-day">
                <h3>{getDayOfWeek(props.startDay+6)}</h3>
                <div className="planner-workouts-container">
                    <PlannerWorkout/>
                    <PlannerWorkout/>
                </div>
            </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, {})(Planner)