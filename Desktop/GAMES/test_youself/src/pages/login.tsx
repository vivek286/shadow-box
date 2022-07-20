import React, { useRef, useState } from 'react';
export default function App() {
    const [data,setdata]=useState({email:"",pass:""});
    const [showdata,setshowdata]=useState({});
   async function finduser(){
console.log(data);
const response=await fetch('/../api/user',{
    method:'POST',
body:(JSON.stringify(data)),
headers:{
    'content-type':'application/json'
}
  })
    }
    return(
 <div>
<title>Login</title>
<div className="w-full h-screen flex">
    <img src="https://images.unsplash.com/photo-1540569876033-6e5d046a1d77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="background" className="object-cover object-center h-screen w-7/12"/>
    <div className="bg-white flex flex-col justify-center items-center w-5/12 shadow-lg">
      <h1 className="text-3xl font-bold text-orange-500 mb-2">LOGIN</h1>
      <div className="w-1/2 text-center">
        <input type="text" name="username" placeholder="Email"
            className="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"
            onChange={e=>setdata({ ...data, email: e.target.value })}
            />
        <input type="password" name="password" placeholder="password"
            className="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"
            onChange={e=>setdata({ ...data, pass: e.target.value })}
            />
        <button className=" border-transparent  inline-block bg-indigo-50 p-2 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-green-100" onClick={finduser}>Sign In</button>
      </div>
    </div>
  </div>


 </div>
    )  
}
