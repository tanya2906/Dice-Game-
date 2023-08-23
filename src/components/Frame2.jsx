import '../components/Frame2.css';
import Button from './Button';
import Rules from './Rules';
import {useState} from 'react'
const Frame2=()=>{
    const [score,setScore]=useState(0);
    const [number, setNumber]=useState(-2);
    const [valueofDice,setValueOfDice]=useState(-1);
    
    const [ruleVisible,setRuleVisible]=useState(
        {
            'display':'none'
        }
    );
    const [selectButton,setSelectButton]=useState();
    const [resetButton,setResetButton]=useState();
    const showRules=()=>{
        
        setRuleVisible(
            {
                'display':'block'
            }
        )
        setSelectButton(
            {
                'color': 'white',
                'backgroundColor': 'black'
            }
        )
        setResetButton(
            {
                'color': 'black',
                'backgroundColor': 'white'
            }
        )

    }
    const hideRules=()=>{
        setRuleVisible(
            {
                'display':'none'
            }
        )
        setSelectButton(
            {
                'color': 'black',
                'backgroundColor': 'white'
            }
        )
    }
    let a=document.getElementsByClassName('diceNo');
    
    const selectedDiceNo=(e)=>{
        setValueOfDice(e.target.value);
            for (let index = 0; index < a.length; index++) {
                a[index].style.color='black';
                a[index].style.backgroundColor='white';
            }
        e.target.style.color='white';
        e.target.style.backgroundColor='black';
        
        
    }
    const rollDice=(e)=>{
        setNumber(Math.floor((Math.random()*6)+1));
        //alert(number)
        if(valueofDice==-1)
        {
            alert("select number");
        }
        else{
            if(number==1){
                e.target.src='./image/dice_1.png';
            }
            else if(number==2){
                e.target.src='./image/dice_2.png';
            }
            else if(number==3){
                e.target.src='./image/dice_3.png';
            }
            else if(number==4){
                e.target.src='./image/dice_4.png';
            }
            else if(number==5){
                e.target.src='./image/dice_5.png';
            }
            else if(number==6){
                e.target.src='./image/dice_6.png';
            }
            if(number==valueofDice)
            {
                setScore(score+4);
            }
            else
            {
                setScore(score-1);
            }
        }
    }
    const resetScore=()=>{
        setScore(0);
        hideRules();
        setResetButton(
            {
                'color': 'white',
                'backgroundColor': 'black'
            }
        )
        setSelectButton(
            {
                'color': 'black',
                'backgroundColor': 'white'
            }
        )
    }
    
    return(
        <main className='frame2'>
            <div className='top'>
                <div className='scoreBoard'>
                    <h1>{score}</h1>
                    <h4>Total Score</h4>
                </div>
                <div className='selectBoard'>
                    <div className='btns' >
                        <Button text='1' onClick={selectedDiceNo} className="diceNo"/>
                        <Button text='2' onClick={selectedDiceNo} className="diceNo"/>
                        <Button text='3' onClick={selectedDiceNo} className="diceNo"/>
                        <Button text='4' onClick={selectedDiceNo} className="diceNo"/>
                        <Button text='5' onClick={selectedDiceNo} className="diceNo"/>
                        <Button text='6' onClick={selectedDiceNo} className="diceNo"/>
                    </div>
                    <h4>Select Number</h4>
                </div>
            </div>
            <div className='body'>
                <div className='dice'>
                    <img src="./image/dice_1.png" alt="" className='d' onClick={rollDice}/>
                    <p>Click on Dice to roll</p>
                </div>
                <div className='options' >
                    <Button text="Reset Score" onClick={resetScore} style={resetButton}/>
                    <Button text="Show Rules" onClick={showRules}  style={selectButton}/>
                </div>
            </div>
            <Rules style={ruleVisible}/>
        </main>
    );
}
export default Frame2;