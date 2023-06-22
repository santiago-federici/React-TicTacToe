

export function WinnerModal({winner, modal, resetGame, setModal}) {

    
	function closeModal() {
		setModal(false)
	}

    const winnerText = winner == false ? 'DRAW' : `Winner is ${winner} !` 

    if (winner == null) return null

    return (
        <>
            {
				modal && (
					<div className='modal'>
						<div className='modal-overlay' onClick={ closeModal }></div>
						<div className='modal-content'>
							{
                                <h2>{ winnerText } </h2>
							}
							<button className='reset-game' onClick={ resetGame }>Play again</button>
						</div>
					</div>

				)
			}
        </>
    )
}