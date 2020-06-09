/**@jsx jsx */
import { jsx } from '@theme-ui/core';

function Pagination({ currentPage, onPageChange, pages }) {
   return (
      <nav>
         <ul
            sx={{
               display: 'inline-block',
               mt: '1rem',
               mb: '1rem',
               '& > li': {
                  display: 'inline-block',
                  listStyle: 'none',
                  border: '1px solid #ddd',
               },
            }}
         >
            {Array.from({ length: pages }, (_, key) => key + 1).map(page => (
               <li key={page}>
                  <a
                     onClick={() => onPageChange(page)}
                     sx={{ variant: 'styles.navlink', p: '0.5rem 0.75rem' }}
                  >
                     {page}
                  </a>
               </li>
            ))}
         </ul>
      </nav>
   );
}

export default Pagination;
