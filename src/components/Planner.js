import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getDayType, getDayOfWeek, getWeek } from "../util/dates"
import PlannerWorkout from './PlannerWorkout'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { myWorkouts } from "../util/data"
import AddWorkout from './AddWorkout'

const Planner = (props) => {

    const [weekView, setWeekView] = useState(0)
    const [workouts, setWorkouts] = useState(myWorkouts)

    return (
        <section id='planner'>
            <div className='planner-header'>
                <button className='create-workout'>Create Workout</button>
                <div className='time-period'>
                    <h2>{getWeek(weekView, props.startDay)}</h2>
                </div>
                <div className='increment-arrows'>
                    <LeftOutlined className='inc-arrow' onClick={() => setWeekView(weekView - 1)} />
                    <RightOutlined className='inc-arrow' onClick={() => setWeekView(weekView + 1)} />
                </div>
            </div>
            <div id='planner-days'>
                <div className={"planner-day " + getDayType(weekView, props.startDay, 0)}>
                    <h3 className='planner-day-title'> {getDayOfWeek(weekView, props.startDay, 0)}</h3>
                    <div className="planner-workouts-container">

                        {workouts.map((workout) => {
                            return <PlannerWorkout key={workout.workoutId} workout={workout} />

                        })}
                        <AddWorkout />
                    </div>
                </div>
                <div className={"planner-day " + getDayType(weekView, props.startDay, 1)}>
                    <h3 className='planner-day-title'>{getDayOfWeek(weekView, props.startDay, 1)}</h3>
                    <div className="planner-workouts-container">
                        {workouts.map((workout) => {
                            return <PlannerWorkout key={workout.workoutId} workout={workout} />

                        })}
                        <AddWorkout />
                    </div>
                </div>
                <div className={"planner-day " + getDayType(weekView, props.startDay, 2)}>
                    <h3 className='planner-day-title'>{getDayOfWeek(weekView, props.startDay, 2)}</h3>
                    <div className="planner-workouts-container">
                        {workouts.map((workout) => {
                            return <PlannerWorkout key={workout.workoutId} workout={workout} />

                        })}
                        <AddWorkout />
                    </div>
                </div>
                <div className={"planner-day " + getDayType(weekView, props.startDay, 3)}>
                    <h3 className='planner-day-title'>{getDayOfWeek(weekView, props.startDay, 3)}</h3>
                    <div className="planner-workouts-container">
                        {workouts.map((workout) => {
                            return <PlannerWorkout key={workout.workoutId} workout={workout} />

                        })}
                        <AddWorkout />
                    </div>
                </div>
                <div className={"planner-day " + getDayType(weekView, props.startDay, 4)}>
                    <h3 className='planner-day-title'>{getDayOfWeek(weekView, props.startDay, 4)}</h3>
                    <div className="planner-workouts-container">
                        {workouts.map((workout) => {
                            return <PlannerWorkout key={workout.workoutId} workout={workout} />

                        })}
                        <AddWorkout />
                    </div>
                </div>
                <div className={"planner-day " + getDayType(weekView, props.startDay, 5)}>
                    <h3 className='planner-day-title'>{getDayOfWeek(weekView, props.startDay, 5)}</h3>
                    <div className="planner-workouts-container">
                        {workouts.map((workout) => {
                            return <PlannerWorkout key={workout.workoutId} workout={workout} />

                        })}
                        <AddWorkout />
                    </div>
                </div>
                <div className={"planner-day " + getDayType(weekView, props.startDay, 6)}>
                    <h3 className='planner-day-title'>{getDayOfWeek(weekView, props.startDay, 6)}</h3>
                    <div className="planner-workouts-container">
                        {workouts.map((workout) => {
                            return <PlannerWorkout key={workout.workoutId} workout={workout} />

                        })}
                        <AddWorkout />
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, {})(Planner)