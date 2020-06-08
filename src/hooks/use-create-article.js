import { useMutation } from 'react-query';
import { sendRequest } from '../utils/send-request';

function createArticle(article) {
   const pathname = 'articles';
   return sendRequest({
      pathname,
      method: 'POST',
      body: { article },
   }).then(response => response.article);
}

function useCreateArticle() {
   return useMutation(createArticle);
}

export default useCreateArticle;
