import React from 'react'
import {Button,Stack} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <Stack>
      This is Home Page
       <Button onClick={() => navigate('/about-us')} variant="contained" color="primary">
        About Us
      </Button> </Stack>

    </div>
  )
}
