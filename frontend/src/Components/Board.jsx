import "./Board.css"


export default function Board({ board, size, handleClick, value }){

    return <div className = "container" style = {{ gridTemplateColumns: `repeat(${size}, 1fr)` }}>
        {board.map((row, rowIndex)=>{
            return row.map((col, colIndex)=>{
                return <div key = {colIndex} onClick = {()=>{handleClick(rowIndex, colIndex)}} className={`box ${value}`}>
                        <b>{col}</b>
                    </div>
            })
        })}
    </div>
}