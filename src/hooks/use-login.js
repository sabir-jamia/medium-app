import { useMutation, queryCache } from 'react-query';
import { sendRequest } from '../utils/send-request';

function login(body) {
   const pathname = 'users/login';
   return sendRequest({ pathname, method: 'POST', body: { user: body } }).then(
      response => response?.user
   );
}

function useLogin() {
   return useMutation(login, {
      onSuccess: data => {
         queryCache.setQueryData('user', data);
      },
   });
}

export default useLogin;
