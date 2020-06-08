/**@jsx jsx */
import { jsx } from '@theme-ui/core';
import { Flex, Divider } from '@theme-ui/components';
import { Fragment } from 'react';

import { useAuth } from '../../hooks/use-auth';

import ArticleHeader from './article-header';
import ArticleBody from './article-body';
import ArticleFooter from './article-footer';
import ArticleComment from './article-comment';

function Article({
   article,
   handleFavorite,
   handleDelete,
   handleEdit,
   handleFollow,
   handleCreateComment,
   handleDeleteComment,
}) {
   const auth = useAuth();
   const isMyArticle = article?.author.username == auth?.user?.username;

   return (
      <Fragment>
         <Flex
            as='article'
            sx={{
               alignItems: 'center',
               flexDirection: 'column',
               flex: '1 1 auto',
            }}
         >
            <ArticleHeader
               article={article}
               handleFavorite={handleFavorite}
               handleFollow={handleFollow}
               handleEdit={handleEdit}
               handleDelete={handleDelete}
               isMyArticle={isMyArticle}
            />
            <ArticleBody article={article} />
            <Divider sx={{ width: '100%' }} />
            <ArticleFooter
               article={article}
               handleFavorite={handleFavorite}
               handleFollow={handleFollow}
               handleEdit={handleEdit}
               handleDelete={handleDelete}
               isMyArticle={isMyArticle}
            />
            <ArticleComment
               onComment={handleCreateComment}
               onDelete={handleDeleteComment}
            />
         </Flex>
      </Fragment>
   );
}

export default Article;
