import { useMutation, queryCache } from 'react-query';
import { sendRequest } from '../utils/send-request';

function register(body) {
   const pathname = 'users';
   return sendRequest({ pathname, method: 'POST', body: { user: body } }).then(
      response => response.user
   );
}

function useRegister() {
   return useMutation(register, {
      onSuccess: data => {
         queryCache.setQueryData('user', data);
      },
   });
}

export default useRegister;
