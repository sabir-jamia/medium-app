import { useMutation, queryCache } from 'react-query';
import { sendRequest } from '../utils/send-request';

function DeleteArticle({ slug }) {
   const pathname = `/articles/${slug}`;
   const method = 'DELETE';

   return sendRequest({ pathname, method });
}

function useMutateArticle() {
   return useMutation(DeleteArticle, {
      onSuccess: (data, variables) => {
         queryCache.removeQueries(['article', variables.slug]);
      },
   });
}

export default useMutateArticle;
