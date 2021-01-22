import React, {useState} from 'react'
import { connect, useSelector } from 'react-redux'
import { getDayType, getCalendarDay, getDayOfWeek, getWeek } from "../util/dates"
import { DateTime } from 'luxon'
import PlannerWorkout from './PlannerWorkout'

const dummyWorkouts = [{ title: "Run", distance: "6 miles" }, { title: "Push ups", sets: 3 }]

const Planner = (props) => {

    const [weekView, setWeekView] = useState(0) 

    return (
        <section id='planner'>
            <div id='planner-header'>
            <button className="inc-arrow" onClick={()=>setWeekView(weekView-1)}>{"<"}</button>
            <h2 className='time-period-title'>Week {weekView} {getWeek(weekView, props.startDay)}</h2>
            <button className="inc-arrow" onClick={()=>setWeekView(weekView+1)}>{">"}</button>
            </div>
            <div id='planner-days'>
            <div className={"planner-day " + getDayType(weekView, props.startDay)}>
                    <h3> {getDayOfWeek(props.startDay)} • {getCalendarDay(props.weekView, props.startDay)}</h3>
                    <div className="planner-workouts-container">

                        <PlannerWorkout />
                        <PlannerWorkout />
                    </div>
                </div>
                <div className="planner-day">
                    <h3>{getDayOfWeek(props.startDay + 1)} • {getCalendarDay(weekView, props.startDay + 1)}</h3>
                    <div className="planner-workouts-container">
                        <PlannerWorkout />
                        <PlannerWorkout />
                    </div>
                </div>
                <div className="planner-day">
                    <h3>{getDayOfWeek(props.startDay + 2)} • {getCalendarDay(weekView, props.startDay + 2)}</h3>
                    <div className="planner-workouts-container">
                        <PlannerWorkout />
                        <PlannerWorkout />
                    </div>
                </div>
                <div className="planner-day">
                    <h3>{getDayOfWeek(props.startDay + 3)} • {getCalendarDay(weekView, props.startDay + 3)}</h3>
                    <div className="planner-workouts-container">
                        <PlannerWorkout />
                        <PlannerWorkout />
                    </div>
                </div>
                <div className="planner-day">
                    <h3>{getDayOfWeek(props.startDay + 4)} • {getCalendarDay(weekView, props.startDay + 4)}</h3>
                    <div className="planner-workouts-container">
                        <PlannerWorkout />
                        <PlannerWorkout />
                    </div>
                </div>
                <div className="planner-day">
                    <h3>{getDayOfWeek(props.startDay + 5)} • {getCalendarDay(weekView, props.startDay + 5)}</h3>
                    <div className="planner-workouts-container">
                        <PlannerWorkout />
                        <PlannerWorkout />
                    </div>
                </div>
                <div className="planner-day">
                    <h3>{getDayOfWeek(props.startDay + 6)} • {getCalendarDay(weekView, props.startDay + 6)}</h3>
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