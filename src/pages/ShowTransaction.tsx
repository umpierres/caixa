import React from "react";

interface ShowTransactionProps {
    property: string;
}

const ShowTransaction: React.FC<ShowTransactionProps> = ({ property }) => {
    return (
        <>
            <h1>Growdev</h1>
            <p>{property}</p>
        </>
    );
};

export default ShowTransaction;
