/**@jsx jsx */
import { jsx } from '@theme-ui/core';
import { Box, Text, Flex } from '@theme-ui/components';
import TagList from '../../components/tag-list';
import Prism from '@theme-ui/prism';

function ArticleBody({ article }) {
   return (
      <Flex
         sx={{
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'space-between',
         }}
         py={4}
      >
         <Box py={4}>
            <Prism className='language-markdown'>{article.body}</Prism>
         </Box>
         <TagList tags={article.tagList} />
      </Flex>
   );
}

export default ArticleBody;
