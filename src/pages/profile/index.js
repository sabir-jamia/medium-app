import React, { useReducer } from 'react';
import { useParams } from 'react-router-dom';

import useProfile from '../../hooks/use-profile';
import useMutateFollow from '../../hooks/use-mutate-follow';
import { useRequireLoggedin } from '../../hooks/use-require-loggedin';

import Profile from './profile';
import { init, profileReducer } from './reducer';

function ProfilePage() {
   const [state, dispatch] = useReducer(profileReducer, null, init);
   const { username } = useParams();
   const { status, error, data: profile } = useProfile(username);
   const loggedinOnly = useRequireLoggedin();
   const [mutateFollow] = useMutateFollow();

   const handleFollow = () => {
      const mutationArgs = {
         username: profile.username,
         following: profile.following,
      };
      return loggedinOnly(
         () => Promise.resolve(''),
         () => mutateFollow(mutationArgs)
      );
   };

   return status == 'loading' ? (
      <span>Loading profile...</span>
   ) : status == 'error' ? (
      <span>Error: {error.message}</span>
   ) : (
      <Profile
         state={state}
         username={username}
         profile={profile}
         handleFollow={handleFollow}
         dispatch={dispatch}
      />
   );
}

export default ProfilePage;
