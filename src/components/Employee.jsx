import React from 'react'

const Employee = (props) => {
  return (
    <>
    <h3>Employee {props.name}</h3>
    {props.role ? props.role : "no role"}

    </>
  )
}

export default Employee