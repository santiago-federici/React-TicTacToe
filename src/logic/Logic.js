import { winnerCombos } from "../constants"

export const checkWinner = (boardToCheck) => {
    for(const combo of winnerCombos){
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