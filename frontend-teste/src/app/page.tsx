'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

  const[isAuthenticated, setIsAuthenticated] = useState(false);
  


  useEffect(() => {
    const token = document.cookie.split(';').find(row => row.startsWith('token='));
    const isTokenPrsent = token && token.split('=')[1];

    setIsAuthenticated(!!isTokenPrsent);
  }, [])

  const handleLogout = () => {
    document.cookie = '';
    setIsAuthenticated(false)

  }


  return (
    <div className=" flex justify-center items-center h-screen ">
    <div className="flex gap-4 items-center">
      {isAuthenticated ? (<button onClick={handleLogout} className="border p-10 px-16 rounded">Logout</button>)
      : (<Link className="border p-10 px-16 rounded" href={"/login"}>Login</Link>)}
      
      <Link className="border p-10 rounded" href={"/info"}>Informações</Link>

    </div>
    </div>
    
  );
}
