import React from 'react';
import Grid from "../components/games/tictac/Grid";

function TicTacPage() {
    return (
        <div className='flex flex-col justify-center items-center w-screen h-screen bg-yellow-300'>
            <Grid/>
        </div>
    );
}

export default TicTacPage;
