import React from 'react';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber } from './Action/index';



const App = () => {
  const myState=useSelector((state)=>state.changeNumber)
  const dispatch=useDispatch();
  return (
    <>
      <div className='Container'>
          <h1>
            Increment/Decrement counter
          </h1>
          <h2>
            Using React and Redux
          </h2>
          <div className='quantity'>
            <a className='minus' title='Decrement'
            onClick={()=>dispatch(decNumber())}
            ><span> - </span></a>
            <input type="text" className='quantity_input' value={myState} name="quantity"/>
            <a className='plus' title='Increment'
            onClick={()=>dispatch(incNumber())}
            ><span> + </span></a>
          </div>
      </div>
    </>
  )
}

export default App