type TransactionType = {
    description?:string;
    value: number;
    type:  'Depositar' | 'Sacar';
}

export default TransactionType;