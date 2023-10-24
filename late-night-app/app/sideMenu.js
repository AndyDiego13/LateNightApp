import React, { useEffect, useState } from 'react';
import { Box, Typography, Drawer } from '@mui/material';

export default function SideMenu() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  const openMenu = () => setOpen(true);

  return (
    <Drawer variant='persistent' anchor='left' open={open}>
      <Box sx={{ display: 'flex' , flexWrap: 'wrap', flexDirection: 'column', gap: '10px'}}>
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
    </Drawer>
  );
}