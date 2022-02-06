
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import DeleteIcon from '@mui/icons-material/Delete';
import { TextField, Button, Box } from '@mui/material';


export default function Component1() {

   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')

   const dispatch = useDispatch()
   const params = useParams()
   const navigate = useNavigate()
   const state = useSelector(state => state)

   const create_update = () => {
      if (+params.id === -1 && (title !== '' && description !== '')) {
         dispatch({ type: 'CREATE', payload: { title, description } })

      }
      else {
         dispatch({ type: 'UPDATE', payload: { title, description, id: +params.id } })
         navigate('/TodoList/-1')
      }
   }

   const deleteTask = () => {
      dispatch({ type: 'DELETE', payload: +params.id })
      navigate('/TodoList/-1')
   }

   useEffect(() => {
      if (+params.id !== -1) {
         const current = state.find(state => state.id === +params.id)
         if (current) {
            setTitle(current.title)
            setDescription(current.description)
         }
      }
      else {
         setTitle('')
         setDescription('')
      }
   }, [params.id, state])

   return (
      <Box sx={{ textAlign: 'center', wordBreak: "break-all" }}>
         <TextField
            size='small'
            label='Title'
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            sx={{ width: '75%', marginBottom: '3vh' }}
         >
         </TextField>
         <TextField
            label='description...'
            sx={{ width: '75%', height: '35%' }}
            multiline
            rows={7}
            onChange={(event) => setDescription(event.target.value)}
            value={description}
         />
         <br></br>
         <Button sx={{ mr: 3, mt: 3 }} variant='outlined' size='small' color='success' onClick={create_update}>{+params.id === -1 ? 'add' : 'update'}</Button>
         {
            +params.id !== -1 && <Button sx={{mt:3}} variant='outlined' color='error' startIcon={<DeleteIcon />} size='small' onClick={deleteTask}>delete</Button>
         }
      </Box>
   )
}


