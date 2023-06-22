import { Square } from "./Square"

export function Board({board, updateBoard}) {

    return(
            <div className='squares-container'>
                {
                    board.map((square, index) => {
                        return(
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