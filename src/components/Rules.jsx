const Rules=(props)=>{
    return(
        <div className="rules" style={props.style}>
            <h3>How to play dice game</h3>
            <p>Select any number
                <br/>
                Click on dice image
                <br />
                after click on  dice  if selected number is equal to dice number you will get 4 points as dice if you get wrong guess then 1 point will be deducted 
            </p>
        </div>
    );
}
export default Rules;
