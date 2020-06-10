/**@jsx jsx */
import { jsx } from '@theme-ui/core';
import { Box, Text, Flex } from '@theme-ui/components';
import TagList from '../../components/tag-list';
import Prism from '@theme-ui/prism';
import { useArticleContent } from '../../hooks/use-article-content';

function ArticleBody({ article }) {
   const { status, data, error } = useArticleContent(article.slug);
   const markup = { __html: data };

   return status == 'loading' ? (
      <span>Loading article body...</span>
   ) : status == 'error' ? (
      <span>Error: {error.message}</span>
   ) : (
      <Flex
         sx={{
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'space-between',
         }}
         py={4}
      >
         <Box py={4} dangerouslySetInnerHTML={markup}></Box>
         <TagList tags={article.tagList} />
      </Flex>
   );
}

export default ArticleBody;
