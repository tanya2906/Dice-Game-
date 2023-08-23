import './App.css';
import Frame1 from "./components/Frame1";
import Frame2 from './components/Frame2';
import {useState} from 'react'
const App=()=>{
  const [isGameStart, setGameStart]=useState(false);
  const startGame=()=>{
    setGameStart(true);
  }
  return (
    <>
    {isGameStart?<Frame2/>:<Frame1 start={startGame}/>}
   
    </>
  );
}
export default App;