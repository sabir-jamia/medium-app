/**@jsx jsx */
import { jsx } from 'theme-ui';
import { Badge, Flex } from '@theme-ui/components';

function TagList({ tags }) {
   return (
      <Flex sx={{ flexWrap: 'wrap' }}>
         {tags.map(tag => (
            <Badge
               key={tag}
               variant='accent'
               ml={1}
               mt={1}
               sx={{ wordBreak: 'break-all', whiteSpace: 'normal' }}
            >
               {tag}
            </Badge>
         ))}
      </Flex>
   );
}

export default TagList;
