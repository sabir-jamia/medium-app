import React, { Fragment, lazy } from 'react';
import GlobalFeed from '../../components/global-feed';
import YourFeed from '../../components/your-feed';
import TagFeed from '../../components/tag-feed';

const ArticleListPagination = lazy(() =>
   import(
      /* webpackChunkName: "article-list-pagination"*/
      '../../components/article-list-pagination'
   )
);

function Feed({ feed, page, handlePageChange }) {
   return (
      <Fragment>
         {feed == 'global' ? (
            <GlobalFeed page={page}>
               {(articles, articleCount) => (
                  <ArticleListPagination
                     articles={articles}
                     articleCount={articleCount}
                     page={page}
                     onPageChange={handlePageChange}
                  />
               )}
            </GlobalFeed>
         ) : feed == 'your' ? (
            <YourFeed page={page}>
               {(articles, articleCount) => (
                  <ArticleListPagination
                     articles={articles}
                     articleCount={articleCount}
                     page={page}
                     onPageChange={handlePageChange}
                  />
               )}
            </YourFeed>
         ) : (
            <TagFeed page={page} tag={feed}>
               {(articles, articleCount) => (
                  <ArticleListPagination
                     articles={articles}
                     articleCount={articleCount}
                     page={page}
                     onPageChange={handlePageChange}
                  />
               )}
            </TagFeed>
         )}
      </Fragment>
   );
}

export default Feed;
