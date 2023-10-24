'use client'
import { Paper, Box, Typography } from '@mui/material'
import SideMenu from './sideMenu'

export default function Home() {
  return (
    <main>
      <SideMenu/>

      <Box sx={{ display: "flex" , flexWrap: "wrap", gap: "10px"}}>
        <Paper>
          <Typography variant="h4" component="div" gutterBottom>
            data
          </Typography>
        </Paper>
        <Paper>
          <Typography variant="h4" component="div" gutterBottom>
            data
          </Typography>
        </Paper>
        <Paper>
          <Typography variant="h4" component="div" gutterBottom>
            data
          </Typography>
        </Paper>
      </Box>
    </main>
  )
}
