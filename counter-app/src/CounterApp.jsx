import { useState } from 'react';
import React from 'react'
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
  
  const [ counter, setCounter ] = useState( value );
  const handleAdd =  () => {
    /* setCounter(counter + 1) esto y lo de abajo funciona igual */ 
    setCounter((c) => c+1)
  }

  const handleReset = () => {
    setCounter((c) => value)
  }

  const handleSubtract = () => {
    setCounter((c)=> c-1)
  }

  return (
    <>  
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>
      <button onClick={ handleAdd }> +1 </button>
      <button onClick={ handleSubtract }> -1 </button>
      <button onClick={ handleReset }> reset </button>
    </>
  )
}

CounterApp.proptTypes = {
  value : PropTypes.number.isRequired
}
