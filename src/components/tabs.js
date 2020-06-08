/**@jsx jsx */
import { jsx } from '@theme-ui/core';
import { Box } from '@theme-ui/components';
import { Fragment } from 'react';

const Tabs = ({ children, tabs, tabNames, onTabChange, selectedTab }) => (
   <Fragment>
      <Box mt={4} py={3} sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.3)' }}>
         {tabs.map(tab => (
            <a
               key={tab}
               sx={{
                  p: '1rem',
                  color: 'primary',
                  borderBottom: t =>
                     tab == selectedTab
                        ? `2px solid ${t.colors.primary}`
                        : 'none',
               }}
               onClick={() => onTabChange(tab)}
            >
               {tabNames.get(tab) ?? `#${tab}`}
            </a>
         ))}
      </Box>
      {children}
   </Fragment>
);

export default Tabs;
