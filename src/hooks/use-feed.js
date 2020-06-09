import { usePaginatedQuery } from 'react-query';
import { sendRequest } from '../utils/send-request';

function getArtilces(key1, key2, page) {
   const pathname = 'articles/feed';
   const limit = process.env.PAGE_LIMIT;
   return sendRequest({
      pathname,
      params: { limit, offset: limit * (page - 1) },
   });
}

export default function useFeed(page) {
   return usePaginatedQuery(['articles', 'feed', page], getArtilces);
}
