import { useEffect, useState } from "react"
import { UseForm } from "../hooks/USeForm";






export const FormWithCustomHook = () => {

  const { formState, onInputChange, username, email, password, onResetForm } = UseForm({
    
      username: '',
      email: '',
      password: ''
  
    
  })

  /* const {username, email, password} = formState;   Esto lo utilizo si no me envian estas variables asi ...formState en el customhook */ 
 

 
  return (
    
    <>
      <h1>Formulario con CustomHook</h1>
      <hr />
      
      <input 
      type="text" 
      className="form-control"
      placeholder="Username"
      name= "username"
      value= {username}
      onChange={onInputChange}
      />

      <input 
      type="email" 
      className="form-control mt-2"
      placeholder="email"
      name= "email"
      value= {email}
      onChange={onInputChange}
      />
      
      <input 
      type="password" 
      className="form-control mt-2"
      placeholder="Contraseña"
      name= "password"
      value= {password}
      onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
      
     
    </>
  )
}
