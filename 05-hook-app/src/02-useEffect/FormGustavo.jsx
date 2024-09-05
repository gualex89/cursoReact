import React from 'react'
import { UseForm } from '../hooks'

export const FormGustavo = () => {

  const {usuario, email, edad, direccion, password, onInputChange, onResetForm } = UseForm({
    usuario:'',
    email:'',
    edad: '',
    direccion: '',
    password: ''
  })




  return (
    <>
      <h1>Mi Formulario</h1>
      <hr />
  
      <div className="row">
        <div className="col-md-6">
          <input  
            type="text" 
            className="form-control"
            placeholder="Usuario"
            name="usuario"
            value={usuario}
            onChange={onInputChange}
          />
        </div>
        <div className="col-md-6">
          <input 
            type="email" 
            className="form-control"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onInputChange}
          />
        </div>
      </div>
      <div className="row">

        <div className="col-md-6">

          <input 
            type="number" 
            className="form-control mt-2"
            placeholder="Edad"
            name="edad"
            value={edad}
            onChange={onInputChange}
            />
        </div>
        <div className="col-md-6">
          <input 
            type="text" 
            className="form-control mt-2"
            placeholder="Direccion"
            name="direccion"
            value={direccion}
            onChange={onInputChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">

        <input 
          type="password" 
          className="form-control mt-2" 
          placeholder="Password"
          name="password"
          value={password}
          onChange={onInputChange}
        />
        </div>
      </div>
      
      <button onClick={onResetForm} className="btn btn-primary mt-2">Limpiar</button>
    </>
  )
  
}
