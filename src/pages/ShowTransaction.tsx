import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import {
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import Paper from '@mui/material/Paper';

const ShowTransaction: React.FC = () => {
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
            <Typography sx={{ color: '#FFFFFF' }} variant="h4">
              Extrato Transação
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ color: '#FFFFFF', textAlign: 'right' }} variant="h4">
              Saldo: R$ 0,00
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Descrição</TableCell>
                    <TableCell>Valor</TableCell>
                    <TableCell>Tipo</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>01</TableCell>
                    <TableCell>Mercado Pago</TableCell>
                    <TableCell>R$4,50</TableCell>
                    <TableCell>Saque</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ShowTransaction;
