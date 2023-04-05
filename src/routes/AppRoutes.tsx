import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowTransaction from "../pages/ShowTransaction";
import CreateTransaction from "../pages/CreateTransaction";

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ShowTransaction />} />
                <Route path="/transactions" element={<CreateTransaction />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
