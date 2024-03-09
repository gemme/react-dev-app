import { useEffect, useState } from "react";

export const DigitalClock = () => {
<<<<<<< HEAD
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
=======
  return (
    <div>
      <h1>Digital Clock</h1>
      <h2>{new Date().toLocaleTimeString()}</h2>
>>>>>>> 52297cb15da7ccb3919795d53476128ebcfad91e
    </div>
  );
};
