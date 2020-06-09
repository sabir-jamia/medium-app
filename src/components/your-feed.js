import React from 'react';
import useFeed from '../hooks/use-feed';
import ArticleList from '../components/article-list';
import Pagination from './pagination';

function YourFeed({ page, onPageChange }) {
   const { status, resolvedData, error } = useFeed(page);

   return status == 'loading' ? (
      <span>Loading your feed...</span>
   ) : status == 'error' ? (
      <span>Error: {error.message}</span>
   ) : (
      <>
         <ArticleList articles={resolvedData.articles} />
         {resolvedData.articlesCount > 10 && (
            <Pagination
               currentPage={page}
               onPageChange={onPageChange}
               pages={Math.ceil(resolvedData.articlesCount / 10)}
            />
         )}
      </>
   );
}

export default YourFeed;
