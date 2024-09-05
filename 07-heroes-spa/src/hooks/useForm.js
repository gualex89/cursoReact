import React, { useState } from 'react'

export const UseForm = (initialForm = {}) => {

  const [formState, setFormState] = useState(initialForm)  

  
  const onInputChange = ({target}) => {
    
    const {name, value} = target;
    setFormState({
      ...formState,
      [name] : value
    })

  }

  const onResetForm = () => {
    setFormState({
      
      ...initialForm
            
    })
  }


  return {
    ...formState, //aqui los mando uno a uno a FormWithCustomHook
    formState,
    onInputChange,
    onResetForm
  }
}