import React from 'react';

function Cell({value, onChange}: any) {
    return (
        <div className='w-[75px] h-[75px] p-2 bg-green-300
                 flex justify-center items-center rounded-md drop-shadow-md'
             onClick={onChange}>
            <span className='font-bold text-2xl'>{value}</span>
        </div>
    );
}

export default Cell;
