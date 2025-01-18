'use client'
import { Avatar, Box, Container, DropdownMenu, Flex } from '@radix-ui/themes'
import classnames from 'classnames'
import delay from 'delay'
import { BugIcon } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';


const Navbar = () => {

    

    return (
        <nav className="   h-16    px-5 py-4 mb-5 border-b ">
            <Container>

                <Flex gap="3" justify={'between'} >
                    <Box>
                        <AuthLinks/>
                    </Box>
                    <Box>
                        <AuthStatus/>
                    </Box>
                    
                </Flex>


            </Container>

        </nav>
    )
};

const AuthStatus =   ()=>{
    const { status, data: session } = useSession()
    
    if(status === 'loading') return  <Skeleton width="3"/>
 

    if(status === 'unauthenticated') 
        return <Link href={'/api/auth/signin'} className='text-slate-600 text-base font-medium'>Signin</Link>

    return (
        <>
                   
                            <DropdownMenu.Root>
                                <DropdownMenu.Trigger>
                                    <Avatar
                                        src={session!.user!.image!}
                                        fallback='?'
                                        size={'2'}
                                        radius='full'
                                        className='cursor-pointer'
                                        referrerPolicy='no-referrer'
                                        
                                    />

                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content>

                              
                                        <DropdownMenu.Label> 
                                          
                                            {session!.user!.email}    
                                        </DropdownMenu.Label>
                               
                                    <DropdownMenu.Item>
                                        <Link href={'/api/auth/signout'}> Signout</Link>
                                    </DropdownMenu.Item>
                                </DropdownMenu.Content>
                            </DropdownMenu.Root>
                       

                      
                        
                    </>
    )
};

const AuthLinks=()=>{
    const currentPath = usePathname();



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
        <Flex align='center'>
                        <Link href={'/'} className="text-2xl font-bold"> <BugIcon />  </Link>
                        <ul className='flex space-x-2'>
                            {NavLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={classnames({
                                            "nav-link" : true,
                                            '!text-slate-900 ': link.href === currentPath,
                                            'mx-4 font-medium font-sans hover:text-slate-700  transition-colors ': true
                                        })}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}

                        </ul>
                    </Flex>
                    
    )
}

export default Navbar