import { useState } from "react";
import Card from "../Card/Card";
import './Grid.css'
import { ToastContainer, toast } from 'react-toastify';

function isWinner(board,symbol){
    if(board[0]==symbol &&board[1]==symbol && board[2]==symbol) return symbol;
    if(board[3]==symbol &&board[4]==symbol && board[5]==symbol) return symbol;
    if(board[6]==symbol &&board[7]==symbol && board[8]==symbol) return symbol;

    if(board[0]==symbol &&board[3]==symbol && board[6]==symbol) return symbol;
    if(board[1]==symbol &&board[4]==symbol && board[7]==symbol) return symbol;
    if(board[2]==symbol &&board[5]==symbol && board[8]==symbol) return symbol;

    if(board[0]==symbol &&board[4]==symbol && board[8]==symbol) return symbol;
    if(board[2]==symbol &&board[4]==symbol && board[6]==symbol) return symbol;

    return '';
}
function Grid({numberOfCards}){
    const [turn,setTurn]=useState(true); //  false=X , true=O
    const [board,setBoard]=useState(Array(numberOfCards).fill(""));
    const [winner,setWinner]=useState();

    function play(index){
       
        console.log(`Move Played ${index}`);
        if(turn===true){
            board[index]="O";
            
        }
        else {
            board[index]="X";
            
        }
        const Win = isWinner(board,turn ?"O":"X");
         if(Win){
            setWinner(`Crongratulations ${Win} is the winner.`);
            toast(`Crongratulations ${Win} is the winner.`)
        }
        if (!Win && board.every(cell => cell !== "")) {
            setWinner("Draw Match! Please reset the game")
    toast("Draw Match! Please reset the game");
}
    
        setBoard([...board]);
        setTurn(!turn);

    }
    function reset(){
        setBoard(Array(numberOfCards).fill(""));
        setWinner(null);
        setTurn(true);
    }
    return (
        <>
        
        {winner && <h1 className="win">{winner}</h1>}
        <ToastContainer position="top-right"/>
        
        {!winner &&<h1 className="highlight">Current Turn: {(turn)? 'O':'X'}</h1>}
         
        <button className="reset" onClick={reset}>Reset</button>
        
       <div className="mid">
            <div className="grid">
        {
            board.map((value,idx)=>{
                return (<Card gameEnd={winner?true:false }onPlay ={play} player={value} key={idx} index={idx} />)
            })
        }
        </div>
        </div>
        
        </>
        
    )
}

export default Grid; 