import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const CreateTransaction: React.FC = () => {
  const [typeTransaction, setTypeTransaction] = useState('deposit');

  const handleChangeTypeTransaction = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypeTransaction(event.target.value);
  };

  return (
    <>
      <ResponsiveAppBar />
      <Container
        maxWidth="lg"
        fixed
        sx={{
          backgroundColor: 'DeepSkyBlue',
          paddingBottom: '20px',
          marginTop: '50px'
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant="h4">Saldo: R$ 0,00</Typography>
          </Grid>
          <Grid item lg={6} xs={6}>
            <TextField label="Valor" fullWidth type={'number'} id="outlined-size-small" size="small" />
            <Button variant="contained" sx={{ marginTop: '7px' }}>
              {typeTransaction === 'deposit' ? 'Depositar' : 'Sacar'}
            </Button>
          </Grid>
          <Grid item lg={6} xs={6}>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={typeTransaction}
              onChange={handleChangeTypeTransaction}
            >
              <FormControlLabel value="deposit" control={<Radio />} label="Depósito" />
              <FormControlLabel value="withdraw" control={<Radio />} label="Saque" />
            </RadioGroup>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CreateTransaction;
