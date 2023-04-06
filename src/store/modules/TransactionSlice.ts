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
    salvarLocalStorage: (state, action) => {
      const retorno = adapter.addOne(state, action.payload);

      localStorage.setItem('retorno', JSON.stringify(retorno));

      return retorno;
    },
    addTransiction: adapter.addOne,
    removeTransiction: adapter.removeOne,
    updateTransiction: adapter.updateOne
  }
});

export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.transactions);

export const { addTransiction, removeTransiction, updateTransiction } = transactionSlice.actions;

export default transactionSlice.reducer;
