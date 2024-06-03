export default function Log({turns}){
    return (
        <ol id="log">
            {turns.map((turn)=>(
                <li key={`${turn.square.row}${turn.square.col}`}>player {turn?.player} played row {turn.square.row} and col {turn.square.col}</li>
            ))}
        </ol>
    )
}