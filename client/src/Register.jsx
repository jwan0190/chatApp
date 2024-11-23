export default function Register(){
    return(
         //background blue, height of screen 
        <>
            <div className="bg-blue-50 h-screen flex items-center">
                <form className="w-64 mx-auto">
                    {/* padding 2 p-2 margin_bottom 2 bm-2*/}
                    <input type="text" placeholder="username" className="block w-full rounded-sm p-2 mb-2 border"/>
                    <input type="password" placeholder="password" className="block w-full rounded-sm p-2 mb-2 border"/>
                    <button className="bg-blue-500 text-white block w-full rounded-sm">Register</button>
                </form>
            
            </div>
        </>
    )
   
}