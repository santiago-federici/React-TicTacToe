import { Square } from "./Square"

export function Board({ board, updateBoard, boardClassName }) {

    const boardclassName = boardClassName;

    return (
        <div className={boardClassName}>
            {
                board.map((square, index) => {
                    return (
                        <Square
                            key={index}
                            index={index}
                            updateBoard={updateBoard}>
                            {square}
                        </Square>
                    )
                })
            }
        </div>
    )
}