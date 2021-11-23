import React, {Fragment} from 'react'
import { useForm } from 'react-hook-form'

const HookForm = () => {

        const {register,handleSubmit, formState: { errors }} = useForm();
        
        const onsubmit = (data,evento) =>{
            console.log(data);
            //evento.target.reset()
        }
       return(
        <Fragment>
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit(onsubmit)}>
                <input
                    className="form-control my-2"
                    placeholder="Nombre Completo"
                    type="text"
                    name="form"
                    {...register("form", { 
                        required:{
                            value: true,
                            message: '*Campos invalidos*' 
                        },
                        maxLength: {
                            value: 15, 
                            message: 'No más de 15 carácteres!'
                            },
                        minLength: {
                            value: 5, 
                            message: 'Mínimo 5 carácteres'
                            }

                    })}   
                />
                <span className="text-danger text-small d-block mb-2">
                    {errors.form &&  errors.form.message}
                </span>
                
                
                <button className="btn btn-primary" >Enviar</button>
            </form>
        </Fragment>
       )
    }
 
export default HookForm; 



