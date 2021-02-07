import React, {useState} from 'react'



const UserIcon = () => {

    return(

    <div className='user-icon' onClick={()=>{console.log('open user preferences')}}>
        <h3>A</h3>
    </div>
    )
}

export default UserIcon