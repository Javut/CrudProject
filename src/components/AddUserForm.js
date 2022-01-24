import React, { useState } from 'react';
import { useForm } from 'react-hook-form'


const AddUserForm = (props) => {
  
    const {register, errors, handleSubmit} = useForm();
       
    const onSubmit = (data, e) => {


                console.log(props.addUser);

                props.addUser(data)

                e.target.reset();
    }



    return ( 

        <form onSubmit={handleSubmit(onSubmit)}> 

           

            <label>Name</label>
            <input 
             type="text"
             name="name" 
             {...register("name", {
                required: {value: true, message: 'Campo Requerido'}
            })}
          

            />
           
            <label>UserName</label>
            <input type="text" name="username" 
            {...register("username", {
                required: {value: true, message: 'Campo Requerido'}
            })}
    
            
                 
            
            
            
            />
           
            <br></br>
            <br></br>
            <button>Add new user</button>


        </form>


     );
}
 
export default AddUserForm;