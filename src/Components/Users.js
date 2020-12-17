import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching user&apos;s details...</h3>
  }

  return (
    <div className='user-div'>
      <h2 className='user-name'>{details.name}</h2>
      <p>Email: {details.email}</p>
    </div>
  )
}

export default User;