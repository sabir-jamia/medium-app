/**@jsx jsx */
import { jsx } from '@theme-ui/core';
import { Flex, Box, Avatar } from '@theme-ui/components';
import Tabs from '../../components/tabs';
import MyArticles from '../../components/my-articles';
import FavArticles from '../../components/fav-articles';
import IconButton from '../../components/icon-button';
import { useAuth } from '../../hooks/use-auth';

const articleTabNames = new Map([
   ['my', 'My Articles'],
   ['favorited', 'Favorited Articles'],
]);
const articleTabs = ['my', 'favorited'];

function Profile({ state, username, profile, handleFollow, dispatch }) {
   const auth = useAuth();
   const isMyProfile = auth?.user.username == profile.username;

   const followContent =
      `${profile.following ? 'Unfollow' : 'Follow'}` + ` ${profile.username}`;

   return (
      <Box as='article' sx={{ width: '100%' }}>
         <Flex as='header' mt={5} sx={{ justifyContent: 'space-between' }}>
            <Flex sx={{ alignItems: 'center' }}>
               <h1 sx={{ mr: 3 }}>{profile.username}</h1>
               {!isMyProfile && (
                  <IconButton
                     icon='add'
                     content={followContent}
                     filled={profile.following}
                     onClick={handleFollow}
                  />
               )}
            </Flex>
            <Avatar variant='big' src={profile.image} />
         </Flex>
         <section>
            <Tabs
               selectedTab={state.tab}
               tabNames={articleTabNames}
               tabs={articleTabs}
               onTabChange={tab => dispatch({ type: 'TAB_CHANGE', tab })}
            >
               {state.tab == 'my' ? (
                  <MyArticles
                     page={state.page}
                     author={username}
                     dispatch={dispatch}
                  />
               ) : (
                  <FavArticles
                     page={state.page}
                     favoritedBy={username}
                     dispatch={dispatch}
                  />
               )}
            </Tabs>
         </section>
      </Box>
   );
}

export default Profile;
