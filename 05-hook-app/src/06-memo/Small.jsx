import React, { memo } from 'react'

export const Small = memo(({value}) => {
  

  console.log("Me volvi a Dibujar :(")

  return (
    <small> { value }</small>
  )
  })
