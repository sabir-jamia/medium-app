import { useQuery } from 'react-query';
import { sendRequest } from '../utils/send-request';

function getComment(key, { slug }) {
   const pathname = `articles/${slug}/comments`;
   return sendRequest({ pathname }).then(response => response.comments);
}

export function useComment(slug) {
   return useQuery(['article-comments', { slug }], getComment);
}
