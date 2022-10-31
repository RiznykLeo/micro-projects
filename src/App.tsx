import React from 'react';
import {Route, Routes} from "react-router";
import TicTacPage from "./pages/TicTacPage";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";

function App() {
    return (
        <Routes>
            <Route element={<HomePage/>} path={"/"}/>
            <Route element={<TicTacPage/>} path={"/tic-tac"}/>
            <Route element={<TodoPage/>} path={"/todo"}/>
        </Routes>
    );
}

export default App;
