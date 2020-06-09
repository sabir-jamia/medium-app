import React, { Fragment } from 'react';

import { useTagArticles } from '../hooks/use-articles';
import ArticleList from './article-list';
import Pagination from './pagination';

function TagFeed({ tag, page, onPageChange }) {
   const { status, resolvedData, error } = useTagArticles({ tag, page });

   return status == 'loading' ? (
      <span>Loading ${tag} feed...</span>
   ) : status == 'error' ? (
      <span>Error: {error.message}</span>
   ) : (
      <Fragment>
         <ArticleList articles={resolvedData.articles} />
         {resolvedData.articlesCount > 10 && (
            <Pagination
               currentPage={page}
               onPageChange={onPageChange}
               pages={Math.ceil(resolvedData.articlesCount / 10)}
            />
         )}
      </Fragment>
   );
}

export default TagFeed;
