/**@jsx jsx */
import { jsx } from '@theme-ui/core';
import { Flex } from '@theme-ui/components';
import { Link, useLocation } from 'react-router-dom';

function Footer() {
   const { pathname } = useLocation();

   return pathname == '/article/create' ? null : (
      <Flex
         as='footer'
         className='padding'
         sx={{
            backgroundColor: 'gray',
            height: '64px',
            justifyContent: 'center',
            alignItems: 'center',
         }}
      >
         <div>
            <Link sx={{ fontWeight: 'bold' }} to='/'>
               Medium
            </Link>
            <span> 2020. A Simple medium clone for learning</span>
         </div>
      </Flex>
   );
}

export default Footer;
