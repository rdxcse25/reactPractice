

function Button2(){
    // let count = 0;
    // const handleClick = () => console.log("Ouch!!");
    // const handleClick2 = (name) => {
    //     if(count<3){
    //         count++;
    //         console.log(`${name} stop clicked me ${count} time/s`);
    //     }
    //     else{
    //         console.log(`${name} stop clicking me`);
    //     }
    // }
    const handleClick3 = (e) => e.target.textContent = "Ouch!!:(" 
    return(
        // <button onClick={handleClick2("bro")}>Click Me:)</button> // calling a function with parenthesis directly makes it work  
        // <button onClick={()=>handleClick2("bro")}>Click Me:)</button> //instead use a call back function
        <button onDoubleClick={(e)=>handleClick3(e)}>Click Me:)</button>
    );
}

export default Button2