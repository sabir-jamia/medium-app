import { useQuery } from 'react-query';
import { sendRequest } from '../utils/send-request';

function getArtilce(_, slug) {
   const pathname = `articles/${slug}`;
   return sendRequest({ pathname }).then(response => response.article);
}

export default function useArticle(slug) {
   return useQuery(['article', slug], getArtilce);
}
