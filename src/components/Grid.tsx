import React, {useState} from 'react';
import Cell from "./Cell";

function Grid() {
    const [cells, setCells] = useState(Array(9).fill(null))
    const [isX, setIsX] = useState(true)

    function calcWin(cells: any) {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (const condition of winConditions) {
            const [a, b, c] = condition
            if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                return cells[a]
            }
        }
        return null
    }

    function handleClick(i: any) {
        if (calcWin(cells) || cells[i]) {
            return
        }
        cells[i] = isX ? "X" : "0"
        setCells(cells)
        setIsX(!isX)
        console.log(cells)
    }

    function handleRestart() {
        setIsX(true)
        setCells(Array(9).fill(null))
    }

    const winner = calcWin(cells)

    let status
    if (winner) {
        status = `Winner: ${winner}`
    } else {
        status = `Next Player: ${isX ? "X" : "0"}`
    }

    function renderCell(i: any) {
        return <Cell value={cells[i]} onChange={() => handleClick(i)}/>
    }

    return (
        <>
            <div className='border p-2 gap-1.5
         bg-green-500 grid grid-cols-3 grid-rows-3 justify-center items-center rounded-md'>
                {renderCell(0)}
                {renderCell(1)}
                {renderCell(2)}
                {renderCell(3)}
                {renderCell(4)}
                {renderCell(5)}
                {renderCell(6)}
                {renderCell(7)}
                {renderCell(8)}

            </div>
            <div>
                {status}
            </div>
            <div className="border px-4 py-2 border-2 border-red-700 bg-red-600 text-white rounded-md "
                 onClick={handleRestart}>
                Restart
            </div>
        </>
    );
}

export default Grid;
