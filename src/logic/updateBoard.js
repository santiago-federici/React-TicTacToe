// import confetti from 'canvas-confetti';


// export const updateBoard = (index, checkWinner, board, setBoard, turn, setTurn) => {

//     if(board[index] || winner) return
    
//     const newBoard = [...board]
//     newBoard[index] = turn
//     setBoard(newBoard)

//     const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
//     setTurn(newTurn)

//     // saveToStorage({
//     //     board: newBoard,
//     //     turn: newTurn
//     // })

//     const newWinner = checkWinner(newBoard)

//     if(newWinner){
//         confetti()
//         setWinner(newWinner)
//         setModal(true)
//     } else if(checkDraw(newBoard)){
//         setWinner(false)
//         setModal(true)
//     }
// }