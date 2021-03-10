import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getDayType, getDayOfWeek, getWeek, getYear } from "../../util/dates"
import PlannerWorkout from './PlannerWorkout'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { myWorkouts } from "../../util/data"
import WorkoutForm from './WorkoutForm'
import PlannerDay from './PlannerDay'
import { useHistory } from 'react-router'

const Planner = (props) => {
    //hooks
    const history = useHistory()
    const [weekView, setWeekView] = useState(0)
    const [workouts, setWorkouts] = useState(myWorkouts)
    const [creatingWO, setCreatingWO] = useState(false)
    const [WOFormPosition, setWOFormPosition] = useState({ left: 200, top: 200 })

    const createNewWO = (evt) => {
        setWOFormPosition({ left: evt.target.offsetLeft + 25, top: evt.target.parentElement.offsetTop + 25 })
        setCreatingWO(true)
        console.log('create')
    }

    const toCreateWorkout = () => {
        history.push('/create-workout')
    }

    return (

        <section id='planner'>
            <WorkoutForm creatingWO={creatingWO} setCreatingWO={setCreatingWO} WOFormPosition={WOFormPosition} />
            <div className='planner-header'>
                <button className='add-workout-btn' onClick={toCreateWorkout}>Create Workout</button>
                <div className='time-period'>
                    <h3>{getYear(weekView, props.startDay)}</h3>
                    <h2>{getWeek(weekView, props.startDay)}</h2>
                </div>
                <div className='increment-arrows'>
                    <LeftOutlined className='inc-arrow' onClick={() => setWeekView(weekView - 1)} />
                    <RightOutlined className='inc-arrow' onClick={() => setWeekView(weekView + 1)} />
                </div>
            </div>
            <div id='planner-days'>
                <PlannerDay weekView={weekView} startDay={props.startDay} day={0} />
                <PlannerDay weekView={weekView} startDay={props.startDay} day={1} />
                <PlannerDay weekView={weekView} startDay={props.startDay} day={2} />
                <PlannerDay weekView={weekView} startDay={props.startDay} day={3} />
                <PlannerDay weekView={weekView} startDay={props.startDay} day={4} />
                <PlannerDay weekView={weekView} startDay={props.startDay} day={5} />
                <PlannerDay weekView={weekView} startDay={props.startDay} day={6} />
                <PlannerDay weekView={weekView} startDay={props.startDay} day={7} />
            </div>
        </section>
    )
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, {})(Planner)