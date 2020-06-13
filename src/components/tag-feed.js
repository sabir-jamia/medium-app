import React from 'react';

import { useTagArticles } from '../hooks/use-articles';

function TagFeed({ tag, page, children }) {
   const { status, resolvedData, error } = useTagArticles({ tag, page });

   return status == 'loading' ? (
      <span>Loading ${tag} feed...</span>
   ) : status == 'error' ? (
      <span>Error: {error.message}</span>
   ) : (
      children(resolvedData.articles, resolvedData.articlesCount)
   );
}

export default TagFeed;
