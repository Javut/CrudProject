
import React, {useState} from 'react';
import UserTable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/AddUserForm';


function App() {

  const usersData = [
    {id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    {id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    {id: uuidv4(), name: 'Ben', username: 'benisphere'},


  ]

  //state
  const[users, setUsers]= useState(usersData)

  //Agregar Usuarios

  const addUser = (user) => {
    
   
    
    user.id = uuidv4();
    setUsers([...users,
       user]);
  
  }
  


  return (
    <div className="container">
        <h1>CRUD App with Hooks</h1>
      <div className="flex-large">
        <h2>Add User</h2>
        <AddUserForm addUser={addUser}/>
      </div>
      <div className="flex-large">
        <h2>View User</h2>
       <UserTable users={users}/>
      </div>
     
    </div>
  );
}

export default App;
