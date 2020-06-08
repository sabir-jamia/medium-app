import { useQuery } from 'react-query';
import { sendRequest } from '../utils/send-request';

function getUser() {
   const pathname = 'user';
   if (!localStorage.getItem('jwt-token')) {
      return Promise.resolve(null);
   }

   return sendRequest({ pathname }).then(response => response.user);
}

function useUser() {
   return useQuery('user', getUser);
}

export default useUser;
