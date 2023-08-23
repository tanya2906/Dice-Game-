const Button=(props)=>{
    return (
        // eslint-disable-next-line react/prop-types
        <button onClick={props.onClick}  style={props.style} className={props.className} value={props.text}>
            {props.text}
        </button>
    );
}
export default Button;