import React from 'react'

export const Restaurant = ({ name, openingHours }) => {
  return (
    <div>
      <p>{name} - <span>{openingHours}</span></p>
    </div>
  )
}
