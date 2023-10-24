'use client'
import styles from './page.module.css'
import { Paper, Box, Typography } from '@mui/material'
import SideMenu from './sideMenu'

export default function Home() {
  return (
    <main className={styles.main}>
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
