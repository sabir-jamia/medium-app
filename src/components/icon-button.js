/**@jsx jsx */
import { jsx } from '@theme-ui/core';
import { useRef } from 'react';
import { IconButton } from '@theme-ui/components';

function MyIconButton({
   icon,
   content = '',
   onClick,
   filled,
   noBorder = false,
}) {
   const btn = useRef();

   return (
      <IconButton
         onClick={() => {
            btn.current.setAttribute('disabled', 'disabled');
            onClick().finally(() => {
               btn.current?.removeAttribute('disabled');
            });
         }}
         ref={btn}
         sx={{
            border: noBorder ? 0 : '',
            p: 2,
            width: 'auto',
            bg: t => (filled ? t.colors.primary : '#fff'),
            color: t => (filled ? '#fff' : t.colors.primary),
         }}
      >
         <span sx={{ fontSize: '16px', mr: '2px' }} className='material-icons'>
            {icon}
         </span>
         {content}
      </IconButton>
   );
}

export default MyIconButton;
