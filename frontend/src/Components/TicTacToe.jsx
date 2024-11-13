import Board from "./Board";
import { useState } from "react"
import io from "socket.io-client"
import { checkWinner, initial} from "./Utils/checkWinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./TicTacToe.css"
import Chatbox from "./Chatbox/Chatbox"


const SOCKET_SERVER = "http://localhost:3000"
const socket = io(SOCKET_SERVER, {
  withCredentials: true
})

export default function TicTacToe({ size }){
    const [board, setBoard] = useState(initial(size))
    const [values, setValues] = useState("")
    const winner = checkWinner(board, size)
    const [turn, setTurn] = useState(true)


    const navigate = useNavigate();

    const user = sessionStorage.getItem("user")
    const roomId = sessionStorage.getItem("roomId")

    const status = winner 
        ? `${winner} wins`
        : values == "X"
        ? "O's turn"
        : "X's turn"

    useEffect(()=>{
        if(!user){
            navigate("/")
        }else{

            socket.emit("roomId", roomId)

            socket.on("o-turn", (message)=>{
                console.log(message)
                setBoard(message.deepCopy)
                setValues(message.symbol)
                setTurn(true)
            })
        }
}, [])


function handleClick(rowIndex, colIndex){

        if(board[rowIndex][colIndex] || winner || !turn){
            return;
        }
        let deepCopy = JSON.parse(JSON.stringify(board));
        {values === "X" ? deepCopy[rowIndex][colIndex] = "O" : deepCopy[rowIndex][colIndex] = "X"}

        setValues(deepCopy[rowIndex][colIndex])
        setBoard(deepCopy)

        const symbol = deepCopy[rowIndex][colIndex]

        socket.emit("x-turn", {deepCopy, symbol, roomId})

        setTurn(false)  

    }



function handleReset(){
    setBoard(initial(size))
    setValues("")
}

    return <div className = "page-wrapper">
        <p className="room-id"><p>Welcome to the Game, {user}!</p>Room ID: {roomId}</p>
        <div className = "game-container">
        <Board board = {board} size = {size} handleClick = {handleClick} value = {values}/>
        <button className = "status">
            {status}
        </button>
        </div>
        <div className="chatbox-container">
        <Chatbox />
        </div>
    </div>
}