import React from 'react';

import { useTagArticles } from '../hooks/use-articles';
import ArticleList from './article-list';

function TagFeed({ tag }) {
   const { status, data, error } = useTagArticles(tag);

   return status == 'loading' ? (
      'Loading tag feed...'
   ) : status == 'error' ? (
      <span>Error: {error.message}</span>
   ) : (
      <ArticleList articles={data.articles} />
   );
}

export default TagFeed;
