type TransactionType = {
  description: string;
  value: number;
  type: 'Deposito' | 'Saque';
  id: number;
};

export default TransactionType;
