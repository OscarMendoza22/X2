import React, { Fragment, useState } from "react";

const Listas = () => {
  const [numeros, setNumeros] = useState([1, 2, 3, 4,5]);
  const [numero, setNumero] = useState(5);

  const Agregar = () => {
    setNumero(numero + 1);
    setNumeros([...numeros, numero]);
  };
  const Restar = () => {
    setNumero(numero - 1);
    setNumeros([...numeros , numero ]);
 
  };
  const onsubmit = (evento)=>{
    setNumero([...numeros, numero.evento.targe.reset()])
};

  return (
    <Fragment>
      <h2>Lista</h2>
      <button onClick={Agregar}>Agregar</button>
      <button onClick={Restar}>Restar</button>
      <button onSubmit={(onsubmit)}>Reset</button>
      {numeros.map((item, index) => (
        <p key={index+1}>
          {index+1} - {item}
        </p>
      ))}
    </Fragment>
  );
};

export default Listas;
