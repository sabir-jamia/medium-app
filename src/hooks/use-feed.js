import { usePaginatedQuery } from 'react-query';
import { sendRequest } from '../utils/send-request';

function getArtilces(key1, key2, page) {
   const pathname = `articles/feed`;
   return sendRequest({ pathname });
}

export default function useFeed(page) {
   return usePaginatedQuery(['articles', 'feed', page], getArtilces);
}
