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
   
};
 