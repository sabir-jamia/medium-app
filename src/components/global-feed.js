import React from 'react';

import { useArticles } from '../hooks/use-articles';
import ArticleList from './article-list';
import Pagination from './pagination';

function GlobalFeed({ page, onPageChange }) {
   const { status, resolvedData, error } = useArticles(page);

   return status == 'loading' ? (
      <span>Loading global feed...</span>
   ) : status == 'error' ? (
      <span>Error: {error.message}</span>
   ) : (
      <>
         <ArticleList articles={resolvedData.articles} />
         <Pagination
            currentPage={page}
            onPageChange={onPageChange}
            pages={Math.ceil(resolvedData.articlesCount / 10)}
         />
      </>
   );
}

export default GlobalFeed;
