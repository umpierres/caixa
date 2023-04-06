import React from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

const CreateTransaction: React.FC = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Container
        maxWidth="lg"
        fixed
        sx={{
          backgroundColor: 'LightGray',
          paddingBottom: '20px',
          marginTop: '50px'
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant="h4">Saldo: R$ 0,00</Typography>
          </Grid>
          <Grid item lg={6} xs={6}>
            <TextField label="Entrada" fullWidth type={'number'} id="outlined-size-small" size="small" />
            <Button variant="contained" sx={{ marginTop: '7px' }}>
              Adicionar
            </Button>
          </Grid>
          <Grid item lg={6} xs={6}>
            <TextField label="Saída" fullWidth type={'number'} id="outlined-size-small" size="small" />
            <Button variant="contained" sx={{ marginTop: '7px' }}>
              Retirar
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CreateTransaction;
