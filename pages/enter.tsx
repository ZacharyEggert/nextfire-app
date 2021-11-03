import React from 'react';
import Button from '../components/Button';
import { useUserContext } from '../lib/context';
import { signInWithGoogle, signOut } from '../lib/firebase';

const SignInButton: React.FC = () => {
    const signIn = async () => {
        await signInWithGoogle();
    };

    return <Button onClick={signIn}>Sign in with Google</Button>;
};

const SignOutButton: React.FC = () => {
    return <Button onClick={signOut}>Sign out</Button>;
};

const UsernameForm: React.FC = () => {
    return <></>;
};

interface Props {}
const Enter: React.FC<Props> = () => {
    const { user, username } = useUserContext();

    return (
        <main className='flex flex-row items-center w-full h-full p-2'>
            {user ? (
                !username ? (
                    <UsernameForm />
                ) : (
                    <SignOutButton />
                )
            ) : (
                <SignInButton />
            )}
        </main>
    );
};

export default Enter;
