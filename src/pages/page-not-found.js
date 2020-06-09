/**@jsx jsx */
import { jsx, Heading } from 'theme-ui';
import { Flex, Image } from 'theme-ui';

function PageNotFoundPage() {
   return (
      <Flex
         sx={{
            width: '100%',
            height: '100%',
            minHeight: '100vh',
            backgroundImage: `url(${process.env.PAGE_NOT_FOUND})`,
            justifyContent: 'center',
            alignItems: 'center',
         }}
      >
         <Heading as='h1'>Oops PAGE NOT FOUND</Heading>
      </Flex>
   );
}

export default PageNotFoundPage;
