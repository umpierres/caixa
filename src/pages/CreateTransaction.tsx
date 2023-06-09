import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import TransactionType from '../types/TransactionType';
import { useAppDispatch } from '../store/hooks';
import { addTransaction } from '../store/modules/TransactionSlice';

const CreateTransaction: React.FC = () => {
  const [transactions, setTransactions] = useState<TransactionType>({} as TransactionType);

  const dispatch = useAppDispatch();
  const [typeTransaction, setTypeTransaction] = useState('Deposito');

  const saveTransaction = () => {
    dispatch(
      addTransaction({
        id: Date.now(),
        value: transactions.value,
        type: transactions.type,
        description: transactions.description
      })
    );
  };

  const handleTransactions = (e: ChangeEvent<HTMLInputElement>) => {
    setTransactions({ ...transactions, [e.target.name]: e.target.value });
  };
  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    setTransactions({ ...transactions, type: e.target.value as 'Deposito' | 'Saque' });
  };
  return (
    <>
      <ResponsiveAppBar />
      <Container
        maxWidth="lg"
        fixed
        sx={{
          backgroundColor: 'SteelBlue',
          paddingBottom: '20px',
          marginTop: '50px'
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant="h4">Saldo: R$ 0,00</Typography>
          </Grid>
          <Grid item lg={6} xs={6}>
            <TextField
              sx={{ m: 2 }}
              name="value"
              label="Valor"
              onChange={handleTransactions}
              fullWidth
              type="number"
              id="outlined-size-small"
              size="small"
            />

            <TextField
              sx={{ m: 2 }}
              name="description"
              label="Descrição"
              fullWidth
              type={'text'}
              id="outlined-size-small"
              size="small"
              onChange={handleTransactions}
            />
            <Button variant="contained" sx={{ m: 2 }} onClick={saveTransaction}>
              {transactions.type === 'Deposito' ? 'Depósito' : 'Saque'}
            </Button>
          </Grid>
          <Grid item lg={6} xs={6}>
            <RadioGroup
              sx={{ m: 2 }}
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={transactions.type}
              onChange={handleSelect}
            >
              <FormControlLabel value="Deposito" control={<Radio />} label="Depósito" />
              <FormControlLabel value="Saque" control={<Radio />} label="Saque" />
            </RadioGroup>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CreateTransaction;
