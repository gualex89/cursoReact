import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { light } from '@mui/material/styles/createPalette'
import React, { useEffect, useMemo } from 'react'
import { ImageGallery } from '../components'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveNote, startSaveNote } from '../../store/journal'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {

  const dispatch = useDispatch();

  const {active:note, messageSaved, isSaving} = useSelector(state => state.journal); 

  const {body, title, date,  onInputChange, formState } = useForm(note);

  const dateString = useMemo(() =>{

    const newDate = new Date(date);

    return newDate.toUTCString();
  } , [date])

  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState])

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Nota actualizada', messageSaved, 'success')
    }
  
    
  }, [messageSaved])
  
  
  const onSaveNote = () => {
    dispatch(startSaveNote());
  }


  return (
    <Grid container direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{mb: 1}} className="animate__animated animate__fadeIn animate__faster">
      <Grid item>   
        <Typography fontSize={39} fontWeight={light} >{dateString}</Typography>
      </Grid>
      <Grid item>
        <Button
          disabled = {isSaving} 
          color='primary' 
          sx={{padding: 2}}
          onClick={ onSaveNote }
        >
          <SaveOutlined sx={{fontSize:30, mr: 1}}/>
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField 
          type='text'
          variant='filled'
          fullWidth
          placeholder='Ingrese un título'
          label= 'Titulo'
          sx={{border: 'none', mb: 1}}
          name= 'title'
          value={title}
          onChange={onInputChange}
        />
        <TextField 
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder='¿Qué sucedió en el día de hoy?'
          
          sx={{border: 'none', mb: 1}}
          minRows={5}
          name='body'
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      {/* Galeria de imagenes */}
      <ImageGallery />

    </Grid>
  )
}
