import { useState } from "react"

export default function Register(){
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");
    return(
         //background blue, height of screen 
        <>
            <div className="bg-blue-50 h-screen flex items-center">
                <form className="w-64 mx-auto mb-12">
                    {/* padding 2 p-2 margin_bottom 2 bm-2*/}
                    <input value = {username} type="text" placeholder="username" className="block w-full rounded-sm p-2 mb-2 border" onChange={ev => setUsername(ev.target.value)}/>
                    <input value = {password} type="password" placeholder="password" className="block w-full rounded-sm p-2 mb-2 border" onChange={ev => setPassword(ev.target.value)}/>
                    <button className="bg-blue-500 text-white block w-full rounded-sm p-2">Register</button>
                </form>
            
            </div>
        </>
    )
   
}