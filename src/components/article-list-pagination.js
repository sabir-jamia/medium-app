import React, { Fragment } from 'react';
import Pagination from './pagination';
import ArticleList from './article-list';

function ArticleListPagination({ articles, articleCount, page, onPageChange }) {
   const pages = Math.ceil(articleCount / 10);

   return (
      <Fragment>
         <ArticleList articles={articles} />
         <Pagination
            pages={pages}
            onPageChange={onPageChange}
            currentPage={page}
         />
      </Fragment>
   );
}

export default ArticleListPagination;
