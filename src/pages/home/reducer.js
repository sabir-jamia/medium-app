const INIT_PAGE = 1;

function homeReducer(state, action) {
   if (action.type == 'ADD_TAG') {
      const newFeedTabs = action.loggedInUser
         ? [...state.feedTabs.slice(0, 2), action.tag]
         : [...state.feedTabs.slice(0, 1), action.tag];
      return { ...state, feedTabs: newFeedTabs };
   }

   if (action.type == 'FEED_CHANGE') {
      return { ...state, feed: action.feed, page: INIT_PAGE };
   }

   if (action.type == 'PAGE_CHANGE') {
      return { ...state, page: action.page };
   }

   return state;
}

function init(loggedIn) {
   return () => ({
      feedTabs: loggedIn ? ['your', 'global'] : ['global'],
      feed: loggedIn ? 'your' : 'global',
      page: INIT_PAGE,
   });
}

export { init, homeReducer };
