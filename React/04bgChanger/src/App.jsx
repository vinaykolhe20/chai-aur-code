import { useState } from 'react'


function App() {
    const [color,setColor]=useState("#2ec7db")
  return (
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
          <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded'>
              <button onClick={()=>setColor("#de3333")} className='outline-none px-4 py-1 rounded-xl text-white' style={{backgroundColor:"red"}}>Red</button>
              <button onClick={()=>setColor("#17991b")}className='outline-none px-4 py-1 rounded-xl text-white' style={{backgroundColor:"green"}}>Green</button>
              <button onClick={()=>setColor("#dbdb2e")}className='outline-none px-4 py-1 rounded-xl text-black' style={{backgroundColor:"yellow"}}>Yellow</button>
              <button onClick={()=>setColor("#de3333")}className='outline-none px-4 py-1 rounded-xl text-white' style={{backgroundColor:"black"}}>Black</button>
              <button onClick={()=>setColor("#de3333")}className='outline-none px-4 py-1 rounded-xl text-white' style={{backgroundColor:"orange"}}>Orange</button>
              <button onClick={()=>setColor("#de3333")}className='outline-none px-4 py-1 rounded-xl text-black' style={{backgroundColor:"white"}}>White</button>
              <button onClick={()=>setColor("#de3333")}className='outline-none px-4 py-1 rounded-xl text-white' style={{backgroundColor:"blue"}}>Blue</button>

            </div>
          </div>
      </div>
  )
}

export default App
