import React from "react";

interface CreateTransactionProps {
    property: string;
}

const CreateTransaction: React.FC<CreateTransactionProps> = ({ property }) => {
    return (
        <>
            <h1>Growdev</h1>
            <p>{property}</p>
        </>
    );
};

export default CreateTransaction;
