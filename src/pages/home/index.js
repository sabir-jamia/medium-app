/**@jsx jsx */
import { jsx } from '@theme-ui/core';
import { Box } from '@theme-ui/components';
import { useReducer, Fragment } from 'react';
import { queryCache } from 'react-query';

import GlobalFeed from '../../components/global-feed';
import YourFeed from '../../components/your-feed';
import Tabs from '../../components/tabs';
import PopularTags from '../../components/popular-tags';
import TagFeed from '../../components/tag-feed';

import { homeReducer, init } from './reducer';

const feedTabNames = new Map([
   ['your', 'Your Feed'],
   ['global', 'Global Feed'],
]);

function HomePage() {
   const loggedInUser = queryCache.getQueryData('user');
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
               {feed == 'global' ? (
                  <GlobalFeed page={page} onPageChange={handlePageChange} />
               ) : feed == 'your' ? (
                  <YourFeed page={page} onPageChange={handlePageChange} />
               ) : (
                  <TagFeed
                     tag={feed}
                     page={page}
                     onPageChange={handlePageChange}
                  />
               )}
            </Tabs>
         </Box>
         <Box mt={4} ml={3} sx={{ maxWidth: '18%' }}>
            <PopularTags onTagSelect={handleTagSelect} />
         </Box>
      </Fragment>
   );
}

export default HomePage;
