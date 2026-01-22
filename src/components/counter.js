
import  { useState } from "react"
import './App.css'

const App=()=>
{
  const [isLoggedin,setIsLoggedIn]=useState(true)
  const changestate=()=>
  {
    setIsLoggedIn(!isLoggedin)
  }
  let auth
  if(isLoggedin===true)
  {
    auth=<button onClick ={changestate}>Logout</button>
  }
  else{
    auth=<button onClick={changestate}>Login</button>
  }


  return (
    <div calassName="container">
    <h1>Hello</h1>
    {auth}
    </div>
    
  )
}

export default App;
