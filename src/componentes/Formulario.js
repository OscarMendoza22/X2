import React, { Fragment, useState } from "react";


const Formulario = () => {

    const [DatosU, setDatosU] = useState ({
        Nombre:"",
        Identificacion:""
    }) 
    const handleInputChange = (evento) => {
       console.log(evento.target.value) 
        setDatosU ({
            ...DatosU,[evento.target.name] : evento.target.value
        })
    }
     const enviodatos = (evento) => {
       evento.preventDefault();
        console.log(DatosU.Nombre+ " "+ DatosU.Identificacion)
     }
     <button className="btn btn-primary" >Send</button>
  return (
    <Fragment>
      <h1>Formulario</h1>
      <form className="row" onSubmit={enviodatos}>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Nombre Completo"
            className="form-control"
            name="Nombre"
            onChange={handleInputChange}/>
        </div>
        <div className="col-md-3">
          <input
            type="number"
            placeholder=" Numero de Identificacion"
            className="form-control"
            name="Identificacion"
            onChange={handleInputChange}/>
        </div>

        <div className="col-md-3">
          <button className="btn btn-primary">Enviar XD </button>
        </div>
      </form>
      <h3>{DatosU.Nombre} : {DatosU.Identificacion}</h3>
    </Fragment>
  );
};

export default Formulario;
