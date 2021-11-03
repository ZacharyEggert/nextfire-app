import { doc, collection, onSnapshot } from "@firebase/firestore";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "./firebase";

export const useUserData = () => {
    const [user, initialising, error] = useAuthState(auth);
    const [username, setUsername] = useState(null);

    useEffect(() => {
        // unsubrcribe from firebase realtime subscription
        let unsubscribe: any;

        if (user) {
            const ref = doc(collection(firestore, 'users'), user.uid);
            unsubscribe = onSnapshot(ref, (doc) => {
                if (doc.exists()) {
                    setUsername(doc.data()?.username);
                }
            });
        } else {
            setUsername(null);
        }

        return unsubscribe;
    }, [user]);

    return { user, username };
};
