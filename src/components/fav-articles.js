import React, { Fragment } from 'react';

import { useFavArticles } from '../hooks/use-articles';

import ArticleList from './article-list';
import Pagination from './pagination';

function FavArticles({ page, favoritedBy, dispatch }) {
   const { status, resolvedData, error } = useFavArticles({
      favoritedBy,
      page,
   });

   return status == 'loading' ? (
      <span>Loading favorite articles...</span>
   ) : status == 'error' ? (
      <span>Error: {error.message}</span>
   ) : (
      <Fragment>
         <ArticleList articles={resolvedData.articles} />
         <Pagination
            currentPage={page}
            pages={resolvedData.articlesCount / 10}
            onPageChange={page => dispatch({ type: 'PAGE_CHANGE', page })}
         />
      </Fragment>
   );
}

export default FavArticles;
