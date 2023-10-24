import React, { useEffect, useState } from 'react';
import { Box, Typography, Drawer, Button } from '@mui/material';

export default function SideMenu() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => {setOpen(false);};
  const openMenu = () => {setOpen(true);};

  return (
    <>
      <Drawer variant='permanent' open={open} anchor='left' sx={{ opacity: open ? 0 : 1 }}>
        <Button onClick={openMenu}>
          Menu
        </Button>
        <Box sx={{ display: 'flex' , flexWrap: 'wrap', flexDirection: 'column', gap: '10px'}}>
          <Typography>
            Menu
          </Typography>
          <Typography>
            Menu
          </Typography>
          <Typography>
            Menu
          </Typography>
        </Box>    
      </Drawer>
      <Drawer variant='persistent' anchor='left' open={open} sx={{ opacity: open ? 1 : 0 }}>
        <Button onClick={closeMenu}>
          cerrar
        </Button>
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
    </>
  );
}