import { useMutation, queryCache } from 'react-query';
import { sendRequest } from '../utils/send-request';

function followAuthor({ username, following }) {
   const pathname = `/profiles/${username}/follow`;
   const method = following == false ? 'POST' : 'DELETE';

   return sendRequest({ pathname, method }).then(response => {
      return response.profile;
   });
}

function useMutateFollow(slug) {
   return useMutation(followAuthor, {
      onSuccess: (data, variables) => {
         queryCache.refetchQueries(['article', variables.username]);
         queryCache.refetchQueries(['article', slug]);
         queryCache.refetchQueries(['profile', variables.username]);
      },
   });
}

export default useMutateFollow;
