'use client'
import { useSession, signOut } from "next-auth/react";
import Link from "next/link"
import { usePathname } from "next/navigation";

import { useState } from "react"



export default function NavBar() {
    const [dropdown, setDropdown] = useState();
    const {data:session, status} = useSession()
    const pathname = usePathname()
    const isLoginPage = pathname === '/auth/signin' || pathname === '/api/auth/signin'
    return(
        <nav className="w-full border-b border-gray-200 bg-white  transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href={'/'} className="text-2xl font-bold text-indigo-800">
              CalCal
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {status ==="authenticated" ?
            <><div><Link href={'/dashboard'}>Dashboard</Link></div>
            <div className="text-gray-400">|</div>
            <div className="">{session.user.name || session.user.email}</div>
            <div className="relative" onMouseOver={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)}>
                <div className="cursor-pointer border-1 border-gray-200 rounded-[50%] shadow-lg p-1">
            👤

                </div>
            {dropdown && 
            <div className="bg-indigo-300 text-red-900 text-bold absolute cursor-pointer p-2 rounded-md z-50 right-0 top-full" onClick={()=>signOut()}>LogOut</div>
}
            </div></>: <div>{isLoginPage ? <Link className="border border-gray-200 py-1 px-3 rounded-sm hover:cursor-pointer hover:text-indigo-600" href={'/register'}>SignUp</Link>:<Link className="border border-gray-200 py-1 px-3 rounded-sm hover:cursor-pointer hover:text-indigo-600" href={'/auth/signin'}>LogIn</Link>}</div> }
          </div>
        </div>
      </div>
    </nav>
    )
}