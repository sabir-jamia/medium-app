/**@jsx jsx */
import { jsx } from '@theme-ui/core';
import { Flex } from '@theme-ui/components';
import UserInfo from '../../components/user-info';
import MyUserInfo from '../../components/my-user-info';

function ArticleFooter({
   article,
   handleFavorite,
   handleFollow,
   handleEdit,
   handleDelete,
   isMyArticle,
}) {
   return (
      <Flex as='footer' sx={{ width: '100%' }} py={3}>
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
   );
}

export default ArticleFooter;
