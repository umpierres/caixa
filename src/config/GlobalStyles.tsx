import React from "react";
import { GlobalStyles } from "@mui/styled-engine";

const GStyles: React.FC = () => {
    return (
        <GlobalStyles
            styles={{
                body: {
                    padding: "0px",
                    margin: "0px",
                },
            }}
        />
    );
};

export default GStyles;
