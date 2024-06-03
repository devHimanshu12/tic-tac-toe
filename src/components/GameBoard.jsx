import { useState } from "react"

const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]


export default function GameBoard({setActivePlayer,turns}){
    let gameBoard = initialGameBoard
    // const [gameBoard,setGameBoard] = useState(initialGameBoard)

    // function handleSelectSquare(rowIndex,colIndex) {
    //     setGameBoard((prevGameBoard)=>{
    //         const updateGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
    //         updateGameBoard[rowIndex][colIndex]=activePlayerSymbol
    //         return updateGameBoard
    //     })

    //     setActivePlayer()
    // }

    for(const turn of turns){
        const {square,player} = turn
        const {row,col}=square
        
        gameBoard[row][col] = player
    }



    return (<ol id="game-board" >
        {gameBoard.map((row,rowIndex)=> (
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol,colIndex)=>(
                        <li key={colIndex}><button onClick={()=>setActivePlayer(rowIndex,colIndex)}>{playerSymbol}</button></li>
                    ))}
                </ol>
            </li>
        ))}
    </ol>)
}