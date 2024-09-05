import React, { useRef } from 'react'

export const FocusScreen = () => {

  const inputRef = useRef()

  const onClick = () => {
    
    inputRef.current.select();
  }
  

  return (
    
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input 
        ref= {inputRef}
        type="text"
        placeholder='Ingrese su nombre'
        className='form-control mt-2' 
        
      />
      <input 
        
        type="text"
        placeholder='Ingrese su nombre'
        className='form-control mt-2' 
        
      />
      <input 
        
        type="text"
        placeholder='Ingrese su nombre'
        className='form-control mt-2' 
        
      />
      <input 
        
        type="text"
        placeholder='Ingrese su nombre'
        className='form-control mt-2' 
        
      />

      <button className='btn btn-outline-primary mt-5' onClick={onClick}>Set Focus</button>

    </>  


  )
}
