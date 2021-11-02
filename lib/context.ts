import {createContext, useContext} from "react";

export const UserContext = createContext<{username:string|null, user:any|null}>({user:null, username:null});
export const useUserContext = () => useContext(UserContext);