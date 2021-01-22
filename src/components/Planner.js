import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getDayType, getDayOfWeek, getWeekStart, getWeekEnd } from "../util/dates"
import PlannerWorkout from './PlannerWorkout'
import {LeftSquareFilled, RightSquareFilled} from '@ant-design/icons'

const Planner = (props) => {

    const [weekView, setWeekView] = useState(0)

    return (
        <section id='planner'>
            <div className='planner-header'>
                <div className='time-period-title'>
                <h2>{getWeekStart(weekView, props.startDay)}</h2>
                <h2>-</h2>
                <h2>{getWeekEnd(weekView, props.startDay)}</h2>
                </div>
                <div className='increment-arrows'>
                    <LeftSquareFilled  className='inc-arrow' onClick={() => setWeekView(weekView - 1)}/>
                    <RightSquareFilled className='inc-arrow' onClick={() => setWeekView(weekView + 1)}/>
                </div>
            </div>
            <div id='planner-days'>
                <div className={"planner-day " + getDayType(weekView, props.startDay, 0)}>
                    <h3 className='planner-day-title'> {getDayOfWeek(weekView, props.startDay, 0)}</h3>
                    <div className="planner-workouts-container">

                        <PlannerWorkout />
                        <PlannerWorkout />
                    </div>
                </div>
                <div className={"planner-day " + getDayType(weekView, props.startDay, 1)}>
                    <h3 className='planner-day-title'>{getDayOfWeek(weekView, props.startDay, 1)}</h3>
                    <div className="planner-workouts-container">
                        <PlannerWorkout />
                        <PlannerWorkout />
                    </div>
                </div>
                <div className={"planner-day " + getDayType(weekView, props.startDay, 2)}>
                    <h3 className='planner-day-title'>{getDayOfWeek(weekView, props.startDay, 2)}</h3>
                    <div className="planner-workouts-container">
                        <PlannerWorkout />
                        <PlannerWorkout />
                    </div>
                </div>
                <div className={"planner-day " + getDayType(weekView, props.startDay, 3)}>
                    <h3 className='planner-day-title'>{getDayOfWeek(weekView, props.startDay, 3)}</h3>
                    <div className="planner-workouts-container">
                        <PlannerWorkout />
                        <PlannerWorkout />
                    </div>
                </div>
                <div className={"planner-day " + getDayType(weekView, props.startDay, 4)}>
                    <h3 className='planner-day-title'>{getDayOfWeek(weekView, props.startDay, 4)}</h3>
                    <div className="planner-workouts-container">
                        <PlannerWorkout />
                        <PlannerWorkout />
                    </div>
                </div>
                <div className={"planner-day " + getDayType(weekView, props.startDay, 5)}>
                    <h3 className='planner-day-title'>{getDayOfWeek(weekView, props.startDay, 5)}</h3>
                    <div className="planner-workouts-container">
                        <PlannerWorkout />
                        <PlannerWorkout />
                    </div>
                </div>
                <div className={"planner-day " + getDayType(weekView, props.startDay, 6)}>
                    <h3 className='planner-day-title'>{getDayOfWeek(weekView, props.startDay, 6)}</h3>
                    <div className="planner-workouts-container">
                        <PlannerWorkout />
                        <PlannerWorkout />
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, {})(Planner)