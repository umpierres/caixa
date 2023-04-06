type TransactionType = {
  description: string;
  value: number;
  type: 'add' | 'remove' | '';
  id: number;
};

export default TransactionType;
