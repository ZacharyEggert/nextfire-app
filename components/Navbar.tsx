import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
    user?: any;
    username?: string;
}

const Navbar: React.FC<NavbarProps> = ({ user = null, username = null }) => {
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <Link href='/' passHref={true}>
                        <button className='navlink clickable-black rounded-sm'>Feed</button>
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
                                <Image src={user?.photoURL} alt='USERPHOTO' />
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
