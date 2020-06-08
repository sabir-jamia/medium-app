import React, { Fragment } from 'react';
import ArticleList from './article-list';
import { useAuthorArticles } from '../hooks/use-articles';
import Pagination from './pagination';

function MyArticles({ page, author, dispatch }) {
   const { status, resolvedData, error } = useAuthorArticles({ author, page });

   return status == 'loading' ? (
      'Loading my articles...'
   ) : status == 'error' ? (
      <span>Error: {error.message}</span>
   ) : (
      <Fragment>
         <ArticleList articles={resolvedData.articles} />
         {resolvedData.articlesCount > 10 && (
            <Pagination
               currentPage={page}
               pages={resolvedData.articlesCount / 10}
               onPageChange={page => dispatch({ type: 'PAGE_CHANGE', page })}
            />
         )}
      </Fragment>
   );
}

export default MyArticles;
