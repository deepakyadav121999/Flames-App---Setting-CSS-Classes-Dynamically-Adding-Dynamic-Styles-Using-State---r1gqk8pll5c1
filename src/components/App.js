import React, {Component, useState} from "react";
import '../styles/App.css';

const App=()=> {
   

        const[ans,setans]= useState("");
        const[ip1,setip1]= useState("");
        const[ip2,setip2]= useState("");
           const flames = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];
       const input1=(e)=>{
        setip1(e.target.value)
       }
       const input2=(e)=>{
        setip2(e.target.value)
       }
     function checkkar(){
        if(ip1==""|| ip2==""){
            setans("Please Enter valid input")
        }
        else{
                let first = ip1.replace(/\s+/g, '').toLowerCase();
                let second = ip2.replace(/\s+/g, '').toLowerCase();
            console.log(first);
            console.log(second);

            for (let i = 0; i < first.length; i++) {
                for (let j = 0; j < second.length; j++) {
                    if (first.charAt(i) === second.charAt(j)) {
                        first = first.substring(0, i) + first.substring(i + 1, first.length);

                        second = second.substring(0, j) + second.substring(j + 1, second.length);
                        i--;
                    }
                }
            }
            const len = first.length + second.length;
            console.log(len);
            setans(flames[len % 6]);
        }
     
     }
     function safai(){
        setip1("")
        setip2("")
        setans("")
        console.log("safai karmchari called")
     }


        return(
            <div id="main">
              <input type="text" data-testid="input1" value={ip1} onChange={input1}/>
              <input type="text" data-testid="input2" value={ip2} onChange={input2}/>
              <button data-testid="calculate_relationship" onClick={checkkar}>relationship</button>
              <button data-testid="clear" onClick={safai}>clear</button>
              <h3 data-testid="answer">{ans}</h3>
            </div>
        )
    
}


export default App;
