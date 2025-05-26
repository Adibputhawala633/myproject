import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function ExampleCompo() {
  return (
    <>
      <ul>
        <li><Link to={"state"}>State</Link></li>
        <li><Link to={"props"}>Props</Link></li>
        <li><Link to={"events"}>Events</Link></li>
        <li><Link to={"useeffect"}>useEffect</Link></li>
      </ul>
      <Outlet/>
    </>
  )
}