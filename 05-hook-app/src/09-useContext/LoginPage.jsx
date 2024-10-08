import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const { user, setUser} = useContext(UserContext);
  console.log(user)

  return (
    <>
      <h1>LoginPage {user?.name}</h1>
      <hr />

      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>

      <button
      className="btn btn-outline-primary"
      onClick={()=> setUser({id:123, name: 'Juan', email: 'juan@gmail.com'})}
      >
        Establecer Usuario
      </button>
    
    </>
  )
}
