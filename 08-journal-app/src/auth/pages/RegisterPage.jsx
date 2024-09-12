import { Google } from '@mui/icons-material'
import { Grid, TextField, Typography, Button, Link } from '@mui/material'
import React from 'react'
import {Link as RouterLink, useFormAction} from 'react-router-dom'
import { AuthLayout } from '../layouts/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch } from 'react-redux'
import { startCreatingUserWithEmailPassword } from '../../store/auth'

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe tener un @'],
  password: [(value) => value.length >= 6, 'La contraseña debe tener mas de 6 caracteres'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}


export const RegisterPage = () => {

  const dispatch = useDispatch()

  const [formSubmitted, setFormSubmitted] = React.useState(false)

  const {displayName, email, password, onInputChange, formState, isFormValid, displayNameValid, emailValid, passwordValid } = useForm({
    email: '',
    password: '',
    displayName: ''
  }, formValidations)

  

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true)
    
    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword({email, password, displayName}))
  }

  return (
    <AuthLayout title= "Crear Cuenta">
      <h1>FormValid {isFormValid ? 'Valido' : 'No valido'}</h1>
      <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label='Nombre Completo' 
                type='text' 
                placeholder='Tu Nombre' 
                fullWidth
                name='displayName'
                value={displayName}
                onChange={onInputChange} 
                error = {!!displayNameValid && formSubmitted}
                helperText = {displayNameValid}
              />
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label='Correo' 
                type='email' 
                placeholder='correo@google.com' 
                fullWidth
                name='email'
                value={email}
                onChange={onInputChange}
                error = {!!emailValid && formSubmitted}
                helperText = {emailValid} 
                 
              />
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label='Contraseña' 
                type='password' 
                placeholder='Contraseña' 
                fullWidth
                name='password'
                value={password}
                onChange={onInputChange}  
                error = {!!passwordValid && formSubmitted}
                helperText = {passwordValid} 
              />
            </Grid>

            <Grid container spacing={2} sx={{mb:2, mt:1}}>
              <Grid item xs={12}>
                <Button type= 'submit' variant='contained' fullWidth>Crear Cuenta</Button>
              </Grid>
              

            </Grid>

            <Grid container direction={'row'} justifyContent={'end'}>
              <Typography sx={{mr:1}}>¿Ya tienes cuenta?</Typography>
              <Link component={RouterLink} color='inherit' to="/auth/login">
                Ingresar
              </Link>
            </Grid>

          </Grid>

        </form>
    </AuthLayout>
  )
}
