import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from '..';
import TransactionType from '../../types/TransactionType';

const adapter = createEntityAdapter<TransactionType>({
  selectId: item => item.id
});

export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.transactions);

const contactsSlice = createSlice({
  name: 'transactions',
  initialState: adapter.getInitialState(),
  reducers: {
    addContact: adapter.addOne,
    removeContact: adapter.removeOne,
    updateContact: adapter.updateOne
  }
});

export const { addContact, removeContact, updateContact } = contactsSlice.actions;

export default contactsSlice.reducer;
