import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap='40px' alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="50px" />
        <Typography variant='h7' pb="20px" pt="20px">
          Made with ❤️ by Aman
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;