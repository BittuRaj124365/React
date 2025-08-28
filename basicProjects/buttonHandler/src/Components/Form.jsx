function formHandler(event){
    event.preventDefault();
   console.log("Form submitted.");
}
export default function Form(){
    return(
        <>
            <form>
                <input placeholder="Write here"></input>
                <button onClick={formHandler}>Submit</button>
            </form>
        </>
    )
}