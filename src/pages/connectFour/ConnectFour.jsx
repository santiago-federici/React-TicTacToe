import { NavLink } from 'react-router-dom'
import { Square } from '../../components/Square'
import { TURNS } from '../../constants'
import { useState } from 'react'
import { Board } from '../../components/Board'
import { checkWinnerConnect } from '../../logic/Logic'

import './connectfour.css'
import confetti from 'canvas-confetti'
import { WinnerModal } from '../../components/WinnerModal'

export const ConnectFour = () => {

    const [board, setBoard] = useState(Array(42).fill(null))
    const [turn, setTurn] = useState(TURNS.x)
    const [winner, setWinner] = useState(false)
    const [modal, setModal] = useState(false)

    function updateBoard(index){

        if(board[index] || winner) return

        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)

        const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
        setTurn(newTurn)

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