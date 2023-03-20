import React from 'react'

const Usercard = (props) => {
  return (
    <div className='user-card'>
      <img src={props.data.picture.large} className='user-img' alt='user profile' />
      <h6>{props.data.name.first}</h6>
      <p>{props.data.phone}</p>
      <p>{props.data.location.city}</p>
    </div>
  )
}

export default Usercard
