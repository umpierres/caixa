import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from '../';
import TransactionType from '../../types/TransactionType';

const adapter = createEntityAdapter<TransactionType>({
  selectId: item => item.id
});

const transactionSlice = createSlice({
  name: 'transactions',
  initialState: adapter.getInitialState(),
  reducers: {

    addTransaction: adapter.addOne,
    removeTransaction: adapter.removeOne,
    updateTransaction: adapter.updateOne
  }
});

export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.transactions);

export const { addTransaction, removeTransaction, updateTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;
