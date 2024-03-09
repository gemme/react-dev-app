import { useEffect, useState } from "react";

export const DigitalClock = () => {
  const [hora, setHora] = useState(new Date().toLocaleTimeString()); //montaje

  // useEffect(()=>{
  //     console.log('useEffect montaje');
  //     const id= setInterval(()=>{

  //         console.log(id);
  //         setHora(new Date().toLocaleTimeString())//actualización
  //     },1000)
  //     return ()=>{
  //         console.log('useEffect desmontaje');
  //         clearInterval(id) //desmontaje
  //     }

  // },[])

  useEffect(() => {
    console.log("useEffect montaje");
    const id = setInterval(() => {
      console.log(id);
      setHora(new Date().toLocaleTimeString()); //actualización
    }, 1000);
    return () => {
      console.log("useEffect desmontaje");
      clearInterval(id); //desmontaje
    };
  }, []);

  return (
    <div>
      <h1>Digital Clock</h1>
      <h2>{hora}</h2>
    </div>
  );
};
