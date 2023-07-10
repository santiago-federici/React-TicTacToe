import { NavLink } from 'react-router-dom'
import { Square } from '../../components/Square'
import { TURNS } from '../../constants'
import { useState, useEffect } from 'react'
import { Board } from '../../components/Board'
import { checkWinnerConnect } from '../../logic/Logic'

import './connectfour.css'
import confetti from 'canvas-confetti'
import { WinnerModal } from '../../components/WinnerModal'

export const ConnectFour = () => {

    const [board, setBoard] = useState(Array(42).fill(null))
    const [turn, setTurn] = useState(TURNS.x)



    //This is for the local storage
    
    // const [board, setBoard] = useState( () => {
        //     const boardFromStorage = window.localStorage.getItem('boardConnect')
        // 	if(boardFromStorage) return JSON.parse(boardFromStorage)
        //     Array(42).fill(null)
        // })
        // const [turn, setTurn] = useState(() => {
    //     const turnFromStorage = window.localStorage.getItem('turnConnect')
    //     if(turnFromStorage) return turnFromStorage
    //     return TURNS.x
    // })

    
    
    const [winner, setWinner] = useState(false)
    const [modal, setModal] = useState(false)
    
    useEffect(() => {
        board[35] = false
        board[36] = false
        board[37] = false
        board[38] = false
        board[39] = false
        board[40] = false
        board[41] = false
    }, [/* I need something to use here. If I use winner, there is a bug with the second turn: the first "x" disappears... */]);

    function updateBoard(index){

        
        if(board[index] || winner) return
        
        const newBoard = [...board]

        if(newBoard[index] == false){
            newBoard[index] = turn
            setBoard(newBoard)
        } else if(newBoard[index] != null || newBoard[index + 7]){
            newBoard[index] = turn
            setBoard(newBoard)
        } else{
            return
        }

        const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
        setTurn(newTurn)
        
        
        //This is for the local storage. It breaks doe to the local storage of the Tic Tac Toe. So I need a way to have "two" separate local storages for each game.
        // saveToStorage({
		// 	boardConnect: newBoard,
		// 	turnConnect: newTurn
		// })

        const newWinner = checkWinnerConnect(newBoard)

        if(newWinner){
            confetti()
            setWinner(newWinner)
            setModal(true)
        } else{
            setWinner(false)
            setModal(false)
        }
        setWinner(newWinner)
    }



    function resetGame() {
        setBoard(Array(42).fill(null))
        setTurn(TURNS.x)
        setWinner(null)
        setModal(false)
    }
    

    return(
        <div className='connect-container'>
            <NavLink to={'/'}><button className='goback-button'>Go back</button></NavLink>

            <div className='turns-container'>
                <Square> { TURNS.x } </Square>
                <Square> { TURNS.o } </Square>
            </div>

            <Board board={ board } boardClassName={ 'square-container-connect' } updateBoard={ updateBoard } />

            <button onClick={ resetGame }>Reset game</button>

            <WinnerModal winner={ winner } modal={ modal } resetGame={ resetGame } setModal={ setModal } />

            
        </div>
    )
}