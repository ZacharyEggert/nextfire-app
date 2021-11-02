import React from 'react';
import Button from '../components/Button';

interface Props {}
const Enter: React.FC<Props> = () => {
    const usernameRef = React.useRef<HTMLInputElement>(null);
    const passwordRef = React.useRef<HTMLInputElement>(null);

    const logIn = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (usernameRef.current && !usernameRef.current.value) {
            usernameRef.current.focus();
            return;
        }
        if (passwordRef.current && !passwordRef.current.value) {
            passwordRef.current.focus();
            return;
        }

        console.log(usernameRef.current?.value, passwordRef.current?.value);
    };

    return (
        <main className='flex flex-row items-center w-full h-full p-2'>
            <form className='w-6/12 px-8 py-6 mx-auto bg-gray-300 rounded-xl'>
                <h2 className='sr-only' >Log In Form</h2>
                <input
                    aria-label='Username'
                    ref={usernameRef}
                    type='text'
                    placeholder='Enter your username'
                    autoComplete='current-username'
                    className='block w-full p-2 px-4 my-4 text-2xl rounded-md bg-gray-50'
                />
                <input
                    aria-label='Password'
                    ref={passwordRef}
                    type='password'
                    placeholder='Enter your password'
                    autoComplete='current-password'
                    className='block w-full p-2 px-4 my-8 text-2xl rounded-md bg-gray-50'
                />
                <Button onClick={logIn} className='float-right px-4 py-2 text-2xl rounded-md clickable-blue'>Log In</Button>
            </form>
        </main>
    );
};

export default Enter;
