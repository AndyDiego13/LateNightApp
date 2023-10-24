import { Paper, Box, Typography, Container } from '@mui/material';

export default function Modal() {
  return (
    <>
      <Paper sx={{ width: '100%', height: '100%', gap: '10px', bgcolor: '#fefeeb', border: 1, borderColor: '#0ca5b0' }}>
        <Box sx={{ display: 'flex' , flexWrap: 'wrap', flexDirection: 'column', gap: '10px', margin: 2}}>
          <Typography>
            Nombre del activo
          </Typography>
          <Typography>
            Dato
          </Typography>
          <Typography>
            Dato
          </Typography>
        </Box>
      </Paper>
    </>
  )
}