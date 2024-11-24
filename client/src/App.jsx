import Register from "./Register"
import axios from "axios"
import dotenv from 'dotenv'

function App() {
  dotenv.config()
  axios.defaults.baseURL = process.env.BASE_URL
  axios.defaults.withCredentials = true; 
  
  return (
    //import components
    <>
      <Register/>
    </>
 
  )

}

export default App
