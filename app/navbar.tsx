'use client'
import Link from 'next/link'
import React from 'react'
import { BugIcon, Text } from 'lucide-react'
import { usePathname } from 'next/navigation'
import classnames from 'classnames'
import { Avatar, Box, Container, DropdownMenu, Flex } from '@radix-ui/themes'
import { useSession } from 'next-auth/react'

const Navbar = () => {

    const currentPath = usePathname();
    const { status, data: session } = useSession()


    const NavLinks = [
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
        <nav className="   h-16    px-5 py-4 mb-5 border-b ">
            <Container>

                <Flex gap="3" justify={'between'} >
                    <Flex align='center'>
                        <Link href={'/'} className="text-2xl font-bold"> <BugIcon />  </Link>
                        <ul className='flex space-x-2'>
                            {NavLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={classnames({
                                            'text-slate-900 ': link.href === currentPath,
                                            'text-slate-500 ': link.href !== currentPath,
                                            'mx-4 font-medium font-sans hover:text-slate-700  transition-colors': true
                                        })}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}

                        </ul>
                    </Flex>
                    <Box>
                        {status === 'authenticated' && (
                            <DropdownMenu.Root>
                                <DropdownMenu.Trigger>
                                    <Avatar
                                        fallback='?'
                                        src={session.user!.image!}
                                        size={'2'}
                                        radius='full'
                                        className='cursor-pointer'
                                        
                                    />

                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content>

                              
                                        <DropdownMenu.Label> 
                                          
                                            {session.user!.email}    
                                        </DropdownMenu.Label>
                               
                                    <DropdownMenu.Item>
                                        <Link href={'/api/auth/signout'}> Signout</Link>
                                    </DropdownMenu.Item>
                                </DropdownMenu.Content>
                            </DropdownMenu.Root>
                        )}

                        {/* // <Link href={'/api/auth/signout'}>Signout</Link>)} */}
                        {status === 'unauthenticated' && (
                            <Link href={'/api/auth/signin'} className='text-slate-600 text-base font-medium'>Signin</Link>)}
                    </Box>
                </Flex>


            </Container>

        </nav>
    )
}

export default Navbar