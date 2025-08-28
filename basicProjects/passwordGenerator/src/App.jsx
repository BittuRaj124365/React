import { useState,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength]=useState(6); //for length of password, also by default the length will be 10 so parameter is setted 10 inside the hook(useState)
  const [isNumber,setisNumber]=useState(false); // for choosing wether user wants the password with no or without no
  const [isCharacter,setisCharacter]=useState(false); //for choosing wether user want to include character or not
  const [password,setPassword]=useState(); // for password

    //  useRef hook
    const passwordRef=useRef(null);
// in useCallback, it require fn and dependencies. Read docs for more info. 
  const randomPassword=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(isNumber){
      str+="0123456789";
    } if(isCharacter){
      str+="!@#$%^&*()_+={}'][`~";
    }
    // for creating a password
    for(let i=1; i<=length; i++){
      let char=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }
    setPassword(pass);
  },[length,isNumber,isCharacter,setPassword])
  useEffect(()=>{
    // all those parameters inside the arr in useCallback are the dependencies.
    randomPassword()
  },[length,isNumber,isCharacter,randomPassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  },[password])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-800 ">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
           <input type="text" 
           value={password}
           className='outline-none w-full py-1 px-3'
           placeholder='password'
           readOnly //readOnly means nobody can write anything inside the input, they only can read the value
           ref={passwordRef}
           />
           {/* copy button  */}
           <button onClick={copyPasswordToClipboard}
           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
           >Copy</button>
        </div>
           <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input 
              type="range"
              min={6}
              max={30}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
              />
              <label>length:{length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type='checkbox'
              defaultChecked={isNumber}
              id='numberInput'
              onChange={()=>{
                setisNumber((prev)=>!prev);
              }}
              />
              <label >Numbers</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input type='checkbox'
              defaultChecked={isCharacter}
              id='characterInput'
              onChange={()=>{
                setisCharacter((prev)=>!prev);
              }}
              />
              <label >Characters</label>
            </div>
           </div>
      </div>
    </>
  )
}

export default App
