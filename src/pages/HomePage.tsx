import React from 'react';
import {Link} from "react-router-dom";

function HomePage() {
    return (
        <div className='flex flex-col h-screen justify-center items-center'>
            <Link className="m-2 px-4 py-2 rounded bg-yellow-300
            flex justify-center w-1/3 hover:cursor-pointer" to={"/tic-tac"}>
                Tic-Tac
            </Link>
        </div>
    );
}

export default HomePage;
