import '../components/Frame1.css';
const Frame1=({start})=>{
    return(
        <main className='frame1'>
            <div className='d1'>
                <img src="/image/dices 1.png" alt="" />
            </div>
            <div className='d2'>
                <h1>DICE GAME</h1>
                <button onClick={start}>Play Now</button>
            </div>
        </main>
    );
}
export default Frame1;