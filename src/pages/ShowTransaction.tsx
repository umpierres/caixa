import React from 'react';
import { useSelector } from 'react-redux';
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
import { selectAll } from '../store/modules/TransactionSlice';

const ShowTransaction: React.FC = () => {
  const transaction = useSelector(selectAll);

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
                  {transaction.map(transaction => (
                    <TableRow key={transaction.id}>
                      <TableCell>{transaction.id}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell>{transaction.value}</TableCell>
                      <TableCell>{transaction.type}</TableCell>
                    </TableRow>
                  ))}
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
