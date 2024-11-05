'use client'
import axios from "axios";
import { redirect } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function Login() {

  const[user, setUser] = useState({
    username: '',
    password: ''
  })

  const redirectButton = () => {
    redirect('/')
  }
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {

    setUser({

      ...user,

      [e.target.name]: e.target.value

    })

  }

  async function logar(e: ChangeEvent<HTMLFormElement>){
    e.preventDefault()
    try {
     const res = await axios.post("http://localhost:3001/auth/login", user)
     console.log(res.data)
     const data = await res.data
     document.cookie = `token=${data.access_token}; path=/`
    } catch (error) {
      console.log(error)
      
    }
  }

    return (
      <div className=" flex justify-center items-center h-screen ">
        <form onSubmit={logar} className="flex flex-col items-center gap-4 " action="">
          <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input className="text-black" type="text" name="username" id="username" value={user.username}
                 onChange={atualizarEstado}/>
            <label htmlFor="password">password</label>
            <input className="text-black" type="password" name="password" id="password" value={user.password}
                 onChange={atualizarEstado}/>

          </div>
          <div>
          <button onClick={redirectButton} type="submit" className="border rounded px-4">send</button>
          </div>
        </form>
    
      </div>
      
    );
  }