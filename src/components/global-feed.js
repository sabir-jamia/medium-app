import React from 'react';

import { useArticles } from '../hooks/use-articles';

function GlobalFeed({ page, children }) {
   const { status, resolvedData, error } = useArticles(page);

   return status == 'loading' ? (
      <span>Loading global feed...</span>
   ) : status == 'error' ? (
      <span>Error: {error.message}</span>
   ) : (
      children(resolvedData.articles, resolvedData.articlesCount)
   );
}

export default GlobalFeed;
