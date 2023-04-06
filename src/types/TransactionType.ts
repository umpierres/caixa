type TransactionType = {
  description?: string;
  value: number;
  type: 'Depositar' | 'Sacar';
  id: number;
};

export default TransactionType;
