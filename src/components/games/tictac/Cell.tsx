import React from 'react';

function Cell({value, onChange}: any) {
    return (
        <div className='w-[100px] h-[100px] p-2 bg-green-300
                 flex justify-center items-center rounded-md drop-shadow-md hover:cursor-pointer'
             onClick={onChange}>
            <span className='font-bold text-5xl text-green-700'>{value}</span>
        </div>
    );
}

export default Cell;
