/**@jsx jsx  */
import { jsx } from '@theme-ui/core';
import { Flex, Box } from '@theme-ui/components';

import IconButton from './icon-button';
import ArticleMeta from './article-meta';

function MyUserInfo({ article, onEdit, onDelete }) {
   return (
      <Flex sx={{ alignItems: 'center' }}>
         <ArticleMeta author={article.author} createdAt={article.createdAt} />
         <Box ml={3}>
            <IconButton
               icon='edit'
               content='Edit Article'
               onClick={onEdit}
               filled={article.author.following}
            />
         </Box>
         <Box ml={3}>
            <IconButton
               icon='delete'
               content='Delete Article'
               onClick={onDelete}
               filled={article.favorited}
            />
         </Box>
      </Flex>
   );
}

export default MyUserInfo;
