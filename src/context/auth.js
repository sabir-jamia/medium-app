import { createContext, useState } from 'react';
import useUser from '../hooks/use-user';

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
   const { data: user } = useUser();
   const state = useState(user);
   console.log('state', state, user);

   return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
