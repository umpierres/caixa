import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const CreateTransaction: React.FC = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(''); // estado para armazenar o checkbox selecionado

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === setSelectedCheckbox) {
      setSelectedCheckbox('');
    } else {
      setSelectedCheckbox(event.target.value);
    }
  };

  const getButtonName = () => {
    if (selectedCheckbox === 'deposito') {
      return 'Depósito';
    } else if (selectedCheckbox === 'saque') {
      return 'Saque';
    } else {
      return 'Selecionar';
    }
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
              {getButtonName()} {/* atualiza o nome do botão de acordo com a seleção do checkbox */}
            </Button>
          </Grid>
          <Grid item lg={6} xs={6}>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="deposito"
                control={<Checkbox checked={selectedCheckbox === 'deposito'} onChange={handleCheckboxChange} />}
                label="Depósito"
                labelPlacement="top"
                disabled={selectedCheckbox === 'saque'}
                // desabilita o checkbox "Depósito" se o "Saque" estiver selecionado
              />
              <FormControlLabel
                value="saque"
                control={<Checkbox checked={selectedCheckbox === 'saque'} onChange={handleCheckboxChange} />}
                label="Saque"
                labelPlacement="top"
                disabled={selectedCheckbox === 'deposito'} // desabilita o checkbox "Saque" se o "Depósito" estiver selecionado
              />
            </FormGroup>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CreateTransaction;
