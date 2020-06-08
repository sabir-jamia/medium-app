/**@jsx jsx */
import { jsx } from '@theme-ui/core';
import { Avatar, Flex, Text } from '@theme-ui/components';
import { Link } from 'react-router-dom';

import { getFormattedDate } from '../utils/format-date';

function ArticleMeta({ author, createdAt }) {
   return (
      <Flex>
         <Link
            to={`/profiles/${author.username}`}
            sx={{ display: 'flex', alignItems: 'center' }}
         >
            <Avatar src={author.image} />
         </Link>
         <Flex sx={{ flexDirection: 'column' }} ml={2}>
            <Link
               to={`/profiles/${author.username}`}
               sx={{ variant: 'styles.navlink' }}
            >
               {author.username}
            </Link>
            <Text sx={{ fontSize: '0.8rem' }}>
               {getFormattedDate(createdAt)}
            </Text>
         </Flex>
      </Flex>
   );
}

export default ArticleMeta;
