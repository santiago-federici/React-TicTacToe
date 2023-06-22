

export function Square({children, updateBoard, index, isSelected}){

    const className = `square ${isSelected ? 'is-selected' : ''}`


    function handleClick(){
        updateBoard(index)
    }

    return(
        <div className={ className } onClick={handleClick}>
            { children }
        </div>
    )
}