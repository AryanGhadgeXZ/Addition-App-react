import {useState, useRef} from "react";

function Addition(){
    const rNum1 = useRef();
    const rNum2 = useRef();
    const [num1,setNum1] = useState("");
    const [num2,setNum2] = useState("");
    const [msg,setMsg] = useState("");
    
    const hNum1 = (event) => {setNum1(event.target.value);}
    const hNum2 = (event) => {setNum2(event.target.value);}

    const add = (event) => {
        event.preventDefault();

        if (num1 == ""){
            alert("U did not Enter first number");
            setMsg("");
            rNum1.current.focus();
            return;
        }

        if(num2 == ""){
            alert("U did not enter the Second Number");
            setMsg("");
            rNum2.current.focus();
            return;
        }
        
        let n1 = parseFloat(num1);
        let n2 = parseFloat(num2);
        let res = n1 + n2;
        let ans = "addition = " + res.toFixed(2);
        setMsg(ans);
    }


return(
    <>
    <center>
        <h1>Addition App</h1>
        <form onSubmit = {add}>
            <input type="number" step="any" placeholder="Enter First Number" onCharge={hNum1} ref={rNum1}/>
            <br/><br/>
            <input type="number" step="any" placeholder="Enter Second Number" onCharge={hNum2} ref={rNum2}/>
            <br/><br/>
            <input type="submit" value="Add" />
        </form>
        <h2>{msg}</h2>
    </center>
    </>
);
}

export default Addition;
