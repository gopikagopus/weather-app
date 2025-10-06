import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
 
  
  return (
    <>
     <div className='container'>
      <div className="weather">
        <div className="search">
          <input type="text" placeholder='Enter city Name'/>
        </div>
       
       <div className="winfo">
        <h1>22°C </h1>
        <h2>Kerala</h2>
        <div className='details'>
         <div className="col">
          <img src="https://cdn-icons-png.flaticon.com/512/1182/1182902.png " alt="" width="90px"/>
          <div className='humidity'>
            <h2>20%</h2>
          <h2>Humidity</h2>
          </div>
          
         </div>
         <div className="col">
          <img src="https://png.pngtree.com/png-vector/20190328/ourmid/pngtree-vector-wind-icon-png-image_884044.jpg " alt="" width="70px"/>
          <div className='wind'>
            <h2> 22 km/h</h2>
          <h2>Wind</h2>
          </div>
          
         </div>
        </div>
       </div>



      </div>
     </div>
    </>
  )
}

export default App
