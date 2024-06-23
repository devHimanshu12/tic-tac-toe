import { useState } from "react"

export default function Player({initialName,symbol,isActive,onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing,setEditing] = useState(false)

    function handleEdit(){
        setEditing(editing => !editing)
        if(isEditing){
            onChangeName(symbol,playerName)
        }
    }

    function handleInput(event){
        setPlayerName(event.target.value)
    }

    let player = <span className="player-name">{playerName}</span>
    if(isEditing){
        player = <input type="text" required value={playerName} onChange={handleInput}/>
    }


    return (<li className={isActive ? 'active' : undefined}>
        <span className="player">
            {player}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>)
}