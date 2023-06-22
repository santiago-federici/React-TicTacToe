import { useState } from 'react'
import confetti from 'canvas-confetti';
import { Square } from './components/Square';
import { TURNS} from './constants'
import { WinnerModal } from './components/WinnerModal';
import { checkWinner, checkDraw } from './logic/Logic';
import { Board } from './components/Board';

import './App.css'
import { resetStorage, saveToStorage } from './logic/storage';



function App() {

	

	const [board, setBoard] = useState(() => {

		const boardFromStorage = window.localStorage.getItem('board')
		if(boardFromStorage) return JSON.parse(boardFromStorage)
		return Array(9).fill(null)
	})

	const [turn, setTurn] = useState(() => {
		const turnFromStorage = window.localStorage.getItem('turn')
		if(turnFromStorage) return turnFromStorage
		return TURNS.x
	})

	const [winner, setWinner] = useState(null)

	const [modal, setModal] = useState(false)

	

	

	function updateBoard(index) {

		if(board[index] || winner) return
		
		const newBoard = [...board]
		newBoard[index] = turn
		setBoard(newBoard)

		const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
		setTurn(newTurn)

		saveToStorage({
			board: newBoard,
			turn: newTurn
		})

		const newWinner = checkWinner(newBoard)

		if(newWinner){
			confetti()
			setWinner(newWinner)
			setModal(true)
		} else if(checkDraw(newBoard)){
			setWinner(false)
			setModal(true)
		}
	}
	
	function resetGame() {
		setBoard(Array(9).fill(null))
		setTurn(TURNS.x)
		setWinner(null)
		setModal(false)

		resetStorage()
	}
	




	return (
		<main className='app-main'>

			<div className='turns-container'>
				<Square isSelected={turn === TURNS.x}> {TURNS.x} </Square>
				<Square isSelected={turn === TURNS.o}> {TURNS.o} </Square>
			</div>
		
			<h1>Tic Tac Toe!</h1>

			<Board board={ board } updateBoard={ updateBoard } />
			
			<button className='reset-game' onClick={ resetGame }>Reset</button>



		
			<WinnerModal winner={ winner } modal={ modal } resetGame={ resetGame } setModal={ setModal } />



		</main>
	)
}

export default App
