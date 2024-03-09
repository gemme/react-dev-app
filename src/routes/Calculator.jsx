<<<<<<< HEAD
import { Button } from 'semantic-ui-react'
import {useState} from 'react'
 
export const Calculator = () => {
    const [operations,setOperations]=useState("4+4")    
 
    return (
        <>
        <div>
            <input type="text" value={operations} />
        </div>
        <div>
            <Button onClick={()=>{setOperations((beforeOperations)=>{return(beforeOperations+'7')})}}>7</Button>
            <Button onClick={()=>{setOperations((beforeOperations)=>{return(beforeOperations+'8')})}}>8</Button>
            <Button onClick={()=>{setOperations((beforeOperations)=>{return(beforeOperations+'9')})}}>9</Button>
            <Button onClick={()=>{setOperations((beforeOperations)=>{return(beforeOperations+'+')})}}>+</Button>
        </div>
        <div>
            <Button onClick={()=>{setOperations((beforeOperations)=>{return(beforeOperations+'4')})}}>4</Button>
            <Button onClick={()=>{setOperations((beforeOperations)=>{return(beforeOperations+'5')})}}>5</Button>
            <Button onClick={()=>{setOperations((beforeOperations)=>{return(beforeOperations+'6')})}}>6</Button>
            <Button onClick={()=>{setOperations((beforeOperations)=>{return(beforeOperations+'-')})}}>-</Button>
        </div>
        <div>
            <Button onClick={()=>{setOperations((beforeOperations)=>{return(beforeOperations+'1')})}}>1</Button>
            <Button onClick={()=>{setOperations((beforeOperations)=>{return(beforeOperations+'2')})}}>2</Button>
            <Button onClick={()=>{setOperations((beforeOperations)=>{return(beforeOperations+'3')})}}>3</Button>
            <Button onClick={()=>{setOperations((beforeOperations)=>{return(beforeOperations+'*')})}}>*</Button>
        </div>
        <div>
            <Button onClick={()=>{setOperations((beforeOperations)=>{return(beforeOperations+'0')})}}>0</Button>
            <Button onClick={()=>{setOperations((beforeOperations)=>{return(beforeOperations+'.')})}}>.</Button>
            <Button onClick={()=>{setOperations(eval(operations))}}>=</Button>
            <Button onClick={()=>{setOperations((beforeOperations)=>{return(beforeOperations+'/')})}}>/</Button>
        </div>
        </>
 
    );
   
=======
import { Button } from "semantic-ui-react";

export const Calculator = () => {
  return (
    <>
      <div>
        <input type="text" value="0" />
      </div>
      <div>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>+</Button>
      </div>
      <div>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>-</Button>
      </div>
      <div>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>*</Button>
      </div>
      <div>
        <Button>0</Button>
        <Button>.</Button>
        <Button>=</Button>
        <Button>/</Button>
      </div>
    </>
  );
>>>>>>> 52297cb15da7ccb3919795d53476128ebcfad91e
};
 