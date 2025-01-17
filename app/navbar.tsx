'use client'
import Link from 'next/link'
import React from 'react'
import { BugIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import classnames from 'classnames'
import { Box } from '@radix-ui/themes'
import { useSession } from 'next-auth/react'

const Navbar = () => {

    const currentPath =usePathname();
    const {status, data: session} =useSession()
   

    const NavLinks= [
        {
            label: 'Dashboard',
            href: '/',
        },
        {
            label: 'Issues',
            href: '/issues/list',
        },

    ]

  return (
    <nav className=" flex h-16  w-screen items-center space-x-7 px-5 mb-5 border-b ">
       
            <Link href={'/'} className="text-2xl font-bold"> <BugIcon/>  </Link>
            <ul className='flex space-x-2'>
                {NavLinks.map((link) => (
                    <li  key={link.href}>
                    <Link 
                    href={link.href} 
                    className={classnames({
                       'text-slate-900 ' :  link.href=== currentPath,
                       'text-slate-500 ' :  link.href!== currentPath,
                       'mx-4 font-medium font-sans hover:text-slate-700  transition-colors': true
                    }) }>
                        {link.label}
                    </Link>
                    </li>
                ))}
                 
            </ul>
            <Box>
                {status === 'authenticated'&& (
                    <Link href={'/api/auth/signout'}>Signout</Link>)}
                {status === 'unauthenticated'&& (
                    <Link href={'/api/auth/signin'}>Signin</Link>)}
            </Box>
           
    </nav>
  )
}

export default Navbar