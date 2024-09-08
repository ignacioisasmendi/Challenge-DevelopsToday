import { Box, CircularProgress, Typography } from '@mui/material';

export default function Loading() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <CircularProgress
        size={60}
        thickness={4}
        sx={{
          color: '#1976d2',
          marginBottom: 2,
        }}
      />
      <Typography
        variant="h6"
        component="h1"
        sx={{
          color: '#333',
          fontWeight: 'light',
        }}
      >
        Loading...
      </Typography>
    </Box>
  );
}
