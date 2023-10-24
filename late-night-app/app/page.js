import Image from 'next/image'
import styles from './page.module.css'
import { Paper, Box, Typography } from '@mui/material'

export default function Home() {
  return (
    <main className={styles.main}>
      <Box sx={{ display: "flex" , flexWrap: "wrap", flexDirection: "column", gap: "10px"}}>
        <Typography>
          Menu vertical jaja
        </Typography>
        <Typography>
          Menu vertical jaja
        </Typography>
        <Typography>
          Menu vertical jaja
        </Typography>
      </Box>
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
