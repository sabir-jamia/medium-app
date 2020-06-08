import { useQuery } from 'react-query';
import { sendRequest } from '../utils/send-request';

function getTags() {
   const pathname = 'tags';
   return sendRequest({ pathname }).then(response => response.tags);
}

function useTags() {
   return useQuery('tags', getTags);
}

export { useTags };
