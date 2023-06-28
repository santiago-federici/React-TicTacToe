import { TicTacToe } from './pages/ticTacToe/TicTacToe'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages//home/Home'
import { ConnectFour } from './pages/connectFour/ConnectFour'


import './App.css'



function App() {






	return (
		<main className='app-main'>
			<Router>
				<Routes>
					<Route path='/' element={ <Home /> } />
					<Route path='/tictactoe' element={ <TicTacToe /> } />
					<Route path='/connectfour' element={ <ConnectFour /> } />
				</Routes>
			</Router>
		</main>
	)
}

export default App
