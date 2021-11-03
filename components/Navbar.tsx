import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useUserContext } from '../lib/context';

interface NavbarProps {
}

const Navbar: React.FC<NavbarProps> = () => {

    const { user, username } = useUserContext();

    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <Link href='/' passHref={true}>
                        <button className='rounded-sm navlink clickable-black'>Feed</button>
                    </Link>
                </li>
                {user && (
                    <>
                        <li>
                            <Link href='/admin' passHref={true}>
                                <button className='navlink'>Admin</button>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${username}`} passHref={true}>
                                {// eslint-disable-next-line @next/next/no-img-element
                                <img src={user?.photoURL} alt='USERPHOTO' className='rounded-full'/>}
                            </Link>
                        </li>
                    </>
                )}
                {!user && (
                    <li>
                        <Link href='/enter' passHref={true}>
                            <button className='navlink clickable-blue'>Log in</button>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
