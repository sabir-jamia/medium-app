import { useMutation, queryCache } from 'react-query';
import { sendRequest } from '../utils/send-request';

function createComment({ slug, comment }) {
   const pathname = `articles/${slug}/comments`;
   return sendRequest({ pathname, method: 'POST', body: { comment } }).then(
      response => response.comment
   );
}

function deleteComment({ slug, commentId }) {
   const pathname = `articles/${slug}/comments/${commentId}`;
   return sendRequest({ pathname, method: 'DELETE' }).then(
      response => response.comment
   );
}

export function useCreateComment() {
   return useMutation(createComment, {
      onSuccess: (data, variables) => {
         queryCache.refetchQueries([
            'article-comments',
            { slug: variables.slug },
         ]);
      },
   });
}

export function useDeleteComment() {
   return useMutation(deleteComment, {
      onSuccess: (data, variables) => {
         queryCache.refetchQueries([
            'article-comments',
            { slug: variables.slug },
         ]);
      },
   });
}
