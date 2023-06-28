import { NavLink } from "react-router-dom"


export const Home = () => {

    return(
        <>
            <h1>Welcome to the games!</h1>
            
            <NavLink to={'/tictactoe'}><button>Tic Tac Toe</button></NavLink>
            <NavLink to={'/connectfour'}><button>Connect 4</button></NavLink>
        </>
    )
}