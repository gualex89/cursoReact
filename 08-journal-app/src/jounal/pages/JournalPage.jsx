import { AddOutlined, MailOutline } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { useDispatch } from 'react-redux'
import { starNewNote } from '../../store/journal/thunks'

export const JournalPage = () => {
  
  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(starNewNote())
  }

  return (
    <JournalLayout>
      {/* <NothingSelectedView /> */}
      <NothingSelectedView />
      
      <IconButton
        onClick={onClickNewNote}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50

        }}
      >
        <AddOutlined sx={{fontSize: 30}} />

      </IconButton>
    
    </JournalLayout>
  
  )
}
