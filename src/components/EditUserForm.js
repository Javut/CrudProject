import React, { useState } from 'react';
import { useForm } from 'react-hook-form'


const EditUserForm = (props) => {
  
    const {register, errors, handleSubmit, setValue} = useForm({
        
        defaultValues: props.currentUser
    
    
    });

    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);
       
    const onSubmit = (data, e) => {

            props.updateUser(props.currentUser.id, data)

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
            <button>Edit user</button>


        </form>


     );
}
 
export default EditUserForm;