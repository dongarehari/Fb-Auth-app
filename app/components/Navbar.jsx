import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { resolve } from 'styled-jsx/css';

const Navbar = () => {
    const { user, googleSignIn, logOut } = UserAuth();
    const [loading, setLoading] = useState(true);

    console.log(user);

    const handleSignIn = async () => {
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error)
        }
    };

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch(error) {
            console.log(error)
        }
    };

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50))
            setLoading(false)
        }
        checkAuthentication()
    }, [user]);


    return (
        <div className='h-20 w-full border-b-2 flex items-center justify-between p-2'>
            <ul className='flex'>
                <li className='p-2 cursor-pointer'>
                    <Link href={'/'}>Home</Link>
                </li>
                <li className='p-2 cursor-pointer'>
                    <Link href={'/profile'}>Profile</Link>
                </li>
            </ul>
        { loading? null : !user ? (
            <ul className='flex'>
                <li onClick={handleSignIn} className='p-2 cursor-pointer'>
                    Login
                </li>
                <li onClick={handleSignIn} className='p-2 cursor-pointer'>
                    Signup
                </li>
            </ul>) : (
                <div>
                    <p>Welcome, {user.displayName}</p>
                    <p className='cursor-pointer' onClick={handleSignOut}>Sign Out</p>
                </div>
            )}

            {/* <div class="pos-f-t">
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg-dark p-4">
                        <h4 class="text-white">Collapsed content</h4>
                        <span class="text-muted">Toggleable via the navbar brand.</span>
                    </div>
                </div>
                <nav class="navbar navbar-dark bg-dark">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div> */}

        </div>
    )
}

export default Navbar