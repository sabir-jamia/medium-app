const PAGE_INIT = 1;

export function init() {
   return {
      tab: 'my',
      page: PAGE_INIT,
   };
}

export function profileReducer(state, action) {
   if (action.type == 'TAB_CHANGE') {
      return {
         page: PAGE_INIT,
         tab: action.tab,
      };
   }

   if (action.type == 'PAGE_CHANGE') {
      return {
         ...state,
         page: action.page,
      };
   }

   return state;
}
