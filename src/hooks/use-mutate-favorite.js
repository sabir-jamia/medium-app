import { useMutation, queryCache } from 'react-query';
import { sendRequest } from '../utils/send-request';

function favoriteArticle({ slug, favorited }) {
   const pathname = `/articles/${slug}/favorite`;
   const method = favorited == false ? 'POST' : 'DELETE';

   return sendRequest({ pathname, method }).then(response => {
      return response.article;
   });
}

function useMutateFavorite() {
   return useMutation(favoriteArticle, {
      onSuccess: (_, variables) => {
         queryCache.refetchQueries(['articles']);
         queryCache.refetchQueries(['article', variables.slug]);
      },
   });
}

export default useMutateFavorite;
