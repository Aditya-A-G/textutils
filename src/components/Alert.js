import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.typ}`} role="alert">
  {props.alert.typ.toLowerCase().charAt(0).toUpperCase() + props.alert.typ.slice(1)} : {props.alert.msg}
</div>
  )
}
