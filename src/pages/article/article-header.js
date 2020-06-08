/**@jsx jsx */
import { jsx } from '@theme-ui/core';
import { Flex, Box, Heading } from '@theme-ui/components';
import UserInfo from '../../components/user-info';
import MyUserInfo from '../../components/my-user-info';

function ArticleHeader({
   article,
   handleFavorite,
   handleFollow,
   handleEdit,
   handleDelete,
   isMyArticle,
}) {
   return (
      <Box as='header' py={2} sx={{ width: '100%' }}>
         <Heading sx={{ wordBreak: 'break-all' }}>{article.title}</Heading>
         <Flex>
            {isMyArticle ? (
               <MyUserInfo
                  article={article}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
               />
            ) : (
               <UserInfo
                  article={article}
                  onFavorited={handleFavorite}
                  onFollowed={handleFollow}
               />
            )}
         </Flex>
      </Box>
   );
}

export default ArticleHeader;
