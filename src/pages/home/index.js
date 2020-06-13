/**@jsx jsx */
import { jsx } from '@theme-ui/core';
import { Box } from '@theme-ui/components';
import { useReducer, Fragment, Suspense } from 'react';

import Tabs from '../../components/tabs';
import PopularTags from '../../components/popular-tags';
import Feed from './feed';
import { homeReducer, init } from './reducer';
import { useAuth } from '../../hooks/use-auth';

const feedTabNames = new Map([
   ['your', 'Your Feed'],
   ['global', 'Global Feed'],
]);

function HomePage() {
   const { user: loggedInUser } = useAuth();
   const [{ feedTabs, feed, page }, dispatch] = useReducer(
      homeReducer,
      null,
      init(loggedInUser)
   );

   const handleFeedTabChange = feed => {
      dispatch({ type: 'FEED_CHANGE', feed });
   };

   const handleTagSelect = tag => {
      dispatch({ type: 'ADD_TAG', tag, loggedInUser });
      dispatch({ type: 'FEED_CHANGE', feed: tag });
   };

   const handlePageChange = page => {
      dispatch({ type: 'PAGE_CHANGE', page });
   };

   return (
      <Fragment>
         <Box sx={{ width: '100%' }}>
            <Tabs
               tabs={feedTabs}
               tabNames={feedTabNames}
               onTabChange={handleFeedTabChange}
               selectedTab={feed}
            >
               <Suspense fallback={<span>Article list loading...</span>}>
                  <Feed
                     feed={feed}
                     page={page}
                     handlePageChange={handlePageChange}
                  />
               </Suspense>
            </Tabs>
         </Box>
         <Box mt={4} ml={3} sx={{ maxWidth: '18%' }}>
            <PopularTags onTagSelect={handleTagSelect} />
         </Box>
      </Fragment>
   );
}

export default HomePage;
