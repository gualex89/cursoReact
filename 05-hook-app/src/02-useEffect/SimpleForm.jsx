import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'strider',
    email: ''

  })  

  const {username, email} = formState;

  const onInputChange = ({target}) => {
    
    const {name, value} = target;
    setFormState({
      ...formState,
      [name] : value
    })

  }


  useEffect(() => {
    // console.log("El useEffect se llamó ")
  }, []);

  useEffect(() => {
    // console.log("El formState cambió ")
  }, [formState]);
  
  useEffect(() => {
    // console.log("El Email cambió ")
  }, [email]);
  


  return (
    
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input 
      type="text" 
      className="form-control"
      placeholder="Username"
      name= "username"
      value= {username}
      onChange={onInputChange}
      />

      <input 
      type="email" 
      className="form-control mt-2"
      placeholder="email"
      name= "email"
      value= {email}
      onChange={onInputChange}
      />
      
      {
        (username === 'strider2') && <Message />
      }
    </>
  )
}
