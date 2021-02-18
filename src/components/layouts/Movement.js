import React from 'react'

const Movement = (props) => {

    return (
        <div>
            <select>
                <option value="Sets">Sets/Reps</option>
                <option value="Multi-Set">Multi-Set</option>
                <option selected value="For Distance">Every __ Minutes</option>
                <option value="For Time">AMRAP</option>
            </select>
        </div>
    )

}

export default Movement