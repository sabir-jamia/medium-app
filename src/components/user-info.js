/**@jsx jsx */
import { jsx } from '@theme-ui/core';
import { Box, Flex } from '@theme-ui/components';

import IconButton from './icon-button';
import ArticleMeta from './article-meta';

function UserInfo({ article, onFavorited, onFollowed }) {
   const followContent =
      `${article.author.following ? 'Unfollow' : 'Follow'}` +
      ` ${article.author.username}`;
   const favoriteContent = `Favorite Article (${article.favoritesCount})`;

   return (
      <Flex sx={{ alignItems: 'center' }}>
         <ArticleMeta author={article.author} createdAt={article.createdAt} />
         <Box ml={3}>
            <IconButton
               icon='add'
               content={followContent}
               onClick={onFollowed}
               filled={article.author.following}
            />
         </Box>
         <Box ml={3}>
            <IconButton
               icon='favorite'
               content={favoriteContent}
               onClick={onFavorited}
               filled={article.favorited}
            />
         </Box>
      </Flex>
   );
}

export default UserInfo;
