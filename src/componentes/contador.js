import React, { useState } from 'react';
/* import { useForm } from 'react-hook-form'  */
const Contador = () => {

      const [Numero, setNumero,] = useState(18);  
    /*  const { handleSubmit } = useForm();  */

     const aumentar =()=>{
        if(Numero <=34){
            console.log(Numero)
            setNumero (Numero +1)
        }
        else{
            console.log('maximo 55')
        }
         
        
     }
     const Restar =()=>{
        setNumero (Numero -1)
        console.log(Numero)
       
    }
    const mostrar  =()=>{
        if(Numero <=35){
            console.log(Numero)
        }
        else{
            console.log('Numero es invalido')
        }
        <h3>{Numero}</h3>
    }
    
    const Resetear =(evento)=>{
        evento.target.reset();
    }
    
  
    return (             

            <div>
                <h3> Tu edad es: {Numero} </h3>
                <button onClick={aumentar}>Aumentar</button>
                <button onClick={Restar}>Restar</button>
                <button onClick={mostrar}>Enviar</button>
                <button onClick={Resetear}>Reset</button>
            </div>
            
        );
    }
 
export default Contador;
