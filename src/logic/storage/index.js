export const saveToStorage = ({board, turn}) => {
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export const resetStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}