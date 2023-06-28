import { winnerCombosTic } from "../constants"
import { winnerCombosConnect } from "../constants"



export const checkWinnerTic = (boardToCheck) => {
    for(const combo of winnerCombosTic){
        const [a, b, c] = combo
        if(
            boardToCheck[a] &&
            boardToCheck[a] == boardToCheck[b] &&
            boardToCheck[a] == boardToCheck[c]
        ){
            return boardToCheck[a]	
        }
    }

    return null
}

export const checkDraw = (newBoard) => {
    return newBoard.every(square => square != null)
}


export const checkWinnerConnect = (boardToCheck) => {
    for(const combo of winnerCombosConnect){
        const [a, b, c, d] = combo
        if(
            boardToCheck[a] &&
            boardToCheck[a] == boardToCheck[b] &&
            boardToCheck[a] == boardToCheck[c] &&
            boardToCheck[a] == boardToCheck[d]
        ){
            return boardToCheck[a]	
        }
    }

    return null
}