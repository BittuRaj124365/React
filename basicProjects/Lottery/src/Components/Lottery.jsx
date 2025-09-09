import {useState} from 'react'
import '../ComponentCss/Lottery.css'
import { generateTicket, sumOfArr } from '../Helper';
// import { sum } from '../Helper';
export default function Lottery(){
    const [ticket,setTicket]=useState(generateTicket(3));
    let isWin=sumOfArr(ticket) === 15;
    // 3 is the parameter for 3 no's in ticket.

    let newTicket=()=>{
        setTicket(generateTicket(3));
    }
    return (
        <div className='lottery'>
             <h1>Lottery Game</h1>
             <h4>If the sum of numbers of ticket is 15, u Won.</h4>
             <div className="ticket">
            <span><h1>{ticket[0]}</h1></span>
            <span><h1>{ticket[1]}</h1></span>
            <span><h1>{ticket[2]}</h1></span>
             </div>
             <button onClick={newTicket}>Buy new ticket</button>
             <h2>{isWin && "Congratulation ! U Won.."}</h2>
        </div>
    )
}