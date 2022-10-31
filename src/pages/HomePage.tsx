import React from 'react';
import {Link} from "react-router-dom";

const style = 'm-2 px-4 py-2 rounded font\n' +
    '            flex justify-center w-1/3 ' +
    'hover:cursor-pointer text-white '

function HomePage() {
    return (
        <div className='flex flex-col h-screen
        justify-center items-center bg-green-300 text-3xl'>
            <Link className={`${style} bg-blue-500 `} to={"/todo"}>
                Todo List
            </Link>
            <Link className={`${style} bg-yellow-500`} to={"/tic-tac"}>
                Tic-Tac
            </Link>
        </div>
    );
}

export default HomePage;
