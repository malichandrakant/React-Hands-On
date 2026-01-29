
function doSomething(){
    console.log("Hello React Developer");
}

function printBye(){
    console.log("Bye");
}
export default function Button(){
    return(
        <div> 
             <button onClick={doSomething}>Click Me !</button>
             <p onClick={printBye}>This paragraph is for even demo</p>
            </div>

    )
}