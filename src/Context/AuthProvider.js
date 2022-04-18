import React, { createContext } from 'react';
import { children } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const allProvider = useFirebase();
    
    return (
        <AuthContext.Provider  value={allProvider}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;