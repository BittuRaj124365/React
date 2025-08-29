import {useState} from 'react';
import '../ComponentCss/LudoBoard.css'
export default function LudoBoard(){
    const [move,setMove]=useState({blue:0,red:0,green:0, magenta:0});
    const [count,setCount]=useState(0);
    // for blue
    let updateBlue=()=>{
        console.log(`move.blue= ${move.blue}`)
        setMove((preMove)=>{
            return {...preMove,blue:preMove.blue+1}
        })
    }
    // for magenta
    let updateMagenta=()=>{
        console.log(`move.magenta= ${move.magenta}`)
        setMove((preMove)=>{
            return {...preMove,magenta:preMove.magenta+1}
        })
    }
    // for green
    let updateGreen=()=>{
        console.log(`move.green= ${move.green}`)
        setMove((preMove)=>{
            return {...preMove,green:preMove.green+1}
        })
    }
    // for red
    let updateRed=()=>{
        console.log(`move.red= ${move.red}`)
        setMove((preMove)=>{
            return {...preMove,red:preMove.red+1}
        })
    }
    let buttonClicked=()=>{
        console.log("Button is clicked.");
    }
    return( 
        <>
        <div className="board">
            <h1 style={{color:"cyan"}}>Ludo board</h1>
                {/* blue color */}
            <p style={{color:"blue"}}>Blue Move: {move.blue}</p>
            <button style={{color:"blue"}}
                    onClick={updateBlue}>+1
            </button>
                {/* green color */}
            <p style={{color:"green"}}>Green Move: {move.green}</p>
            <button style={{color:"green"}}
                    onClick={updateGreen}>+1
            </button>
                {/* magenta color */}
           <p style={{color:"Magenta"}}>Magenta Move: {move.magenta}</p>
            <button style={{color:"Magenta"}}
                    onClick={updateMagenta}>+1
                </button>
                {/* red color */}
            <p style={{color:"Red"}}>Red Move: {move.red}</p>
            <button style={{color:"Red"}}
                    onClick={updateRed}>+1
            </button>
        </div>
        </>
    )
}