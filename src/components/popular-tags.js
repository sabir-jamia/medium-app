/**@jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Badge } from '@theme-ui/components';

import { useTags } from '../hooks/use-tags';

function PopularTags({ onTagSelect }) {
   const { data: tags, status, error } = useTags();

   if (status === 'loading') {
      return <span>Loading...</span>;
   }

   if (status === 'error') {
      return <span>Error: {error.message}</span>;
   }

   return (
      <Box p={3} color='primary' bg='muted'>
         <p>Popular Tags</p>

         {tags.map(tag => (
            <a key={tag} onClick={() => onTagSelect(tag)}>
               <Badge variant='accent' ml={1}>
                  {tag}
               </Badge>
            </a>
         ))}
      </Box>
   );
}

export default PopularTags;
