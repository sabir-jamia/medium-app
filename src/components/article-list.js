/**@jsx jsx */
import { jsx } from '@theme-ui/core';
import { Flex, Heading, Text, Divider } from '@theme-ui/components';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import useMutateFavorite from '../hooks/use-mutate-favorite';
import { useRequireLoggedin } from '../hooks/use-require-loggedin';

import IconButton from './icon-button';
import ArticleMeta from './article-meta';
import TagList from './tag-list';

function ArticleList({ articles }) {
   const loggedinOnly = useRequireLoggedin();
   const [mutateFavorite] = useMutateFavorite();

   const handleFavorite = article => {
      const mutationArgs = { slug: article.slug, favorited: article.favorited };
      return loggedinOnly(
         () => Promise.resolve(''),
         () => mutateFavorite(mutationArgs)
      );
   };

   return articles.map(article => (
      <Fragment key={article.slug}>
         <Flex as='article' sx={{ flexDirection: 'column' }} mt={3}>
            <Flex
               sx={{
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
               }}
            >
               <ArticleMeta
                  author={article.author}
                  createdAt={article.createdAt}
               />
               <IconButton
                  icon='favorite'
                  content={article.favoritesCount}
                  onClick={() => handleFavorite(article)}
                  filled={article.favorited}
               />
            </Flex>
            <Flex mt={2}>
               <Link
                  to={`/articles/${article.slug}`}
                  sx={{ variant: 'styles.navlink' }}
               >
                  <Heading as='h3'>
                     {article.title.length > 25
                        ? `${article.title.substr(0, 25)}...`
                        : article.title}{' '}
                  </Heading>
                  <Text as='p' sx={{ mb: 3, fontWeight: 300 }}>
                     {article.description?.length > 25
                        ? `${article.description.substr(0, 25)}...`
                        : article.description}
                  </Text>
               </Link>
            </Flex>
            <Flex sx={{ justifyContent: 'space-between' }}>
               <Text as='p' sx={{ fontSize: '0.8rem', fontWeight: 300 }}>
                  Read more...
               </Text>
               <TagList tags={article.tagList} />
            </Flex>
         </Flex>
         <Divider />
      </Fragment>
   ));
}

export default ArticleList;
