import './App.css';
import { useEffect, useState } from 'react';
// Montaje / Mount
// Updating
// Unmount

// react hooks tienen reglas / useState / useEffect
// 1.- Siempre tienen que declararse al inicio
// 2.- no pueden estar dentro de condicionales
// 3.- se pueden implementar mas de uno

// interface Props { clicked: any; setClicked?: any };

function ChildComponent() {
  const [clicked, setClicked] = useState(false);
  // Montaje
  // ejemplos
  // para cargar algun recurso en red al inicio
  useEffect(() => {
    console.log('mounting component');
    // componentDidMount -> Mounting
  }, []);
  // Mount / Updating
  useEffect(() => {
    setClicked(true);
    console.log('mounting and updating component');
  }, [clicked]);
  // Unmount
  useEffect(() => {
    // este callback se ejecuta antes de desmontarse
    return () => {
      // Chat cerrar un canal
      // setInterval -> id -> memory leaks
      // clearInterval(id)
      console.log('unmounting');
    };
  });

  return (
    <div className="child-container">
      <button onClick={() => setClicked(true)}>Clicked</button>
      ChildComponent
      {clicked}
    </div>
  );
}

function ParentComponent() {
  const [unmount, setUnmount] = useState(false);
  return (
    <>
      <div>React phases</div>
      <button onClick={() => setUnmount(true)}>Unmount</button>
      {!unmount && (
        <ChildComponent />
      )}
    </>
  );
}

export default ParentComponent;
