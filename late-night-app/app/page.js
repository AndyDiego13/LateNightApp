'use client'
import { Paper, Box, Typography, Container } from '@mui/material';
import SideMenu from './sideMenu';

export default function Home() {
  return (
    <Container maxWidth='xl' sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', bgcolor: 'black', justifyContent: 'center' }}>
      <SideMenu/>

      <Box sx={{ display: 'flex' , flexWrap: 'wrap', gap: '10px'}}>
        <Paper>
          <Typography variant='h4' component='div' gutterBottom>
            data
          </Typography>
        </Paper>
        <Paper>
          <Typography variant='h4' component='div' gutterBottom>
            data
          </Typography>
        </Paper>
        <Paper>
          <Typography variant='h4' component='div' gutterBottom>
            data
          </Typography>
        </Paper>
      </Box>
    </Container>
  )
}
