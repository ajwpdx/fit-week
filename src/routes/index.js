import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function LoggedInAsAnybodyRoute(props) {
  const token = localStorage.getItem('token')
  return <>{token ? <Route {...props} /> : <Redirect to='/login' />}</>
}