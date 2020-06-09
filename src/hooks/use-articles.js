import { useQuery, usePaginatedQuery } from 'react-query';
import { sendRequest } from '../utils/send-request';

function getArtilces(key, { page, ...rest } = {}) {
   const pathname = 'articles';
   const limit = process.env.PAGE_LIMIT;
   const params = page
      ? { ...rest, limit, offset: limit * (page - 1) }
      : { ...rest };

   return sendRequest({ pathname, params }).then(response => response);
}

function useArticles(page) {
   return usePaginatedQuery(['articles', { page }], getArtilces);
}

function useAuthorArticles({ author, page }) {
   return usePaginatedQuery(['articles', { author, page }], getArtilces);
}

function useFavArticles({ favoritedBy, page }) {
   return usePaginatedQuery(
      ['articles', { favorited: favoritedBy, page }],
      getArtilces
   );
}

function useTagArticles({ page, tag }) {
   return usePaginatedQuery(['articles', { page, tag }], getArtilces);
}

export { useArticles, useAuthorArticles, useFavArticles, useTagArticles };
