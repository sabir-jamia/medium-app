import { createContext, useContext, useState, useEffect } from 'react';
import { queryCache } from 'react-query';
import useUser from './use-user';

const AuthContext = createContext();

export function AuthProvider({ children }) {
   const auth = useAuthProvider();
   return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
   return useContext(AuthContext);
};

function useAuthProvider() {
   const { status, data: user } = useUser();
   const [, setUser] = useState(null);

   useEffect(() => {
      const unsubscribe = queryCache.subscribe(cache => {
         setUser(cache.getQueryData('user') ? true : false);
      });

      return () => unsubscribe();
   }, []);

   return { status, user };
}
