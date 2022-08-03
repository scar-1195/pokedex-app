import { CircularProgress, Grid } from '@mui/material';

export const Loading = () => {
  return (
    <Grid
      alignItems='center'
      container
      direction='column'
      justifyContent='center'
      spacing={0}
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid container direction='row' justifyContent='center'>
        <CircularProgress color='warning' />
      </Grid>
    </Grid>
  );
};
