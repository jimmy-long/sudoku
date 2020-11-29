import React, { useEffect, useState } from 'react';
import cell from './Cell/Cell';

import Cell from './Cell/Cell';

import styles from './Board.module.css';

type BoardProp = {
    initialBoard: Cell[]
}

export type Cell = {
    digit: number | null,
    given: boolean,
    active: boolean
}

const Board = ({
    initialBoard
}: BoardProp) => {
    const chunk = (array: any[], size: number) => array.reduce((accumulator, element, index) => 
        (index % size ? accumulator[accumulator.length - 1].push(element) : accumulator.push([element]), accumulator), []);

    const [board, setBoard] = useState(initialBoard);
    const [multiSelectKeyDown, setMultiSelectKeyDown] = useState(false);
    const [mouseDown, setMouseDown] = useState(false);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
    }, [])

    const handleKeyDown = (event: KeyboardEvent) => {
        const digit = Number(event.key);

        if (!isNaN(digit)) {
            digitEntered(digit);
        }
    }

    const getBorderProps = (rowIndex: number, colIndex: number) => {
        return {
            left: true,
            top: true,
            right: colIndex === 8,
            bottom: rowIndex === 8
        }
    }

    const getThickBorderProps = (rowIndex: number, colIndex: number) => {
        return {
            left: colIndex % 3 === 0,
            top: rowIndex % 3 === 0
        }
    }

    const cellSelected = (rowIndex: number, colIndex: number) => {
        const oldBoard = [...board];
        oldBoard[rowIndex * 9 + colIndex].active = true;
        setBoard(oldBoard);
    }

    const cellEntered = (rowIndex: number, colIndex: number) => {
        if (mouseDown) {
            cellSelected(rowIndex, colIndex);
        }
    }

    const cellClicked = (rowIndex: number, colIndex: number) => {
        console.log("cellClicked");
        const oldBoard = [...board];
        const newBoard = oldBoard.map(cell => { return { ...cell, active: false } });
        newBoard[rowIndex * 9 + colIndex].active = true;
        setBoard(newBoard);
    }

    const digitEntered = (digit: number) => {
        const oldBoard = [...board];
        const newBoard = oldBoard.map(cell => {
            console.log(cell);
            return {
                ...cell,
                digit: cell.active ? digit : cell.digit
            }
        });
        setBoard(newBoard);
    }

    return (
        <div 
            className={styles.board}
            onMouseDown={() => setMouseDown(true)} 
            onMouseUp={() => setMouseDown(false)}>
            {
                chunk(board, 9).map((row: Cell[], rowIndex: number) => (
                    <div>
                        {
                            row.map((cell: Cell, colIndex: number) => 
                                <Cell 
                                    active={ cell.active }
                                    digit={ cell.digit }
                                    given={ cell.given }
                                    borders={ getBorderProps(rowIndex, colIndex) }
                                    thickBorders={ getThickBorderProps(rowIndex, colIndex) }
                                    handleMouseDown={ () =>  cellSelected(rowIndex, colIndex) }
                                    handleMouseEnter={ () => cellEntered(rowIndex, colIndex) }
                                    handleClick={ () => cellClicked(rowIndex, colIndex) } />)
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Board;