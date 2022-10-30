import React from 'react';
import {Route, Routes} from "react-router";
import TicTacPage from "./pages/TicTacPage";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <Routes>
            <Route element={<HomePage/>} path={"/"}/>
            <Route element={<TicTacPage/>} path={"/tic-tac"}/>
        </Routes>
    );
}

export default App;
