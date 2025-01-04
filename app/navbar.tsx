'use client'
import Link from 'next/link'
import React from 'react'
import { BugIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import classnames from 'classnames'

const Navbar = () => {

    const currentPath =usePathname();
    console.log(currentPath)

    const NavLinks= [
        {
            label: 'Dashboard',
            href: '/',
        },
        {
            label: 'Issues',
            href: '/issues',
        },

    ]

  return (
    <nav className=" flex h-16  w-screen items-center space-x-7 px-5 mb-5 border-b ">
       
           
            <Link href={'/'} className="text-2xl font-bold"> <BugIcon/>  </Link>
            <div>
                {NavLinks.map((link) => (
                    <Link  key={link.href} 
                    href={link.href} 
                    className={classnames({
                       'text-slate-900 ' :  link.href=== currentPath,
                       'text-slate-500 ' :  link.href!== currentPath,
                       'mx-4 font-medium font-sans hover:text-slate-700  transition-colors': true


                    }) }>
                        {link.label}
                    </Link>
                ))}
                 
            </div>
          
     
        
    </nav>
  )
}

export default Navbar