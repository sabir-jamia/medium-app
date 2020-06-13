import React, { lazy, Suspense } from 'react';
import useFeed from '../hooks/use-feed';

function YourFeed({ page, children }) {
   const { status, resolvedData, error } = useFeed(page);

   return status == 'loading' ? (
      <span>Loading your feed...</span>
   ) : status == 'error' ? (
      <span>Error: {error.message}</span>
   ) : (
      children(resolvedData.articles, resolvedData.articlesCount)
   );
}

export default YourFeed;
