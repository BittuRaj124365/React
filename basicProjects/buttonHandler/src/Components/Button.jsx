function buttonTask(){
    console.log("button is clicked.");
}function doubleClick(){
  console.log("Button is double clicked.");
}
 function Button(){
    return(
        <>
          <div>
            <button onClick={buttonTask}>Click me !</button>
            <button onDoubleClick={doubleClick}>Double click !</button>
          </div>
        </>
    )
}
export default Button;