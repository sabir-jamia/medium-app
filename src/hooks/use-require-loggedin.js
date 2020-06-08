import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';
import { useAuth } from './use-auth';

export function useRequireLoggedin(redirectUrl = '/register') {
   const history = useHistory();
   const auth = useAuth();

   const loggedinOnly = useCallback((leftFn, rightFn) => {
      if (!auth.user) {
         history.push('/register');
         return leftFn();
      }
      return rightFn();
   });

   return loggedinOnly;
}
