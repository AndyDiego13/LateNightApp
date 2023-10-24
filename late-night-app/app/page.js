'use client'
import { Paper, Box, Typography, Container } from '@mui/material';
import SideMenu from './sideMenu';
import Modal from './modal';

export default function Home() {
  return (
    <Container maxWidth='xl' sx={{ display: 'flex', justifyContent: 'center', margin: 2}}>
      <SideMenu/>

      <Box sx={{ display: 'flex' , flexWrap: 'wrap', gap: '10px'}}>
        <Modal/>
      </Box>
    </Container>
  )
}
