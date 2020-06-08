import { sendRequest } from '../utils/send-request';
import { useQuery } from 'react-query';

function getProfile(_, username) {
   const pathname = `/profiles/${username}`;
   return sendRequest({ pathname }).then(response => response.profile);
}

function useProfile(username) {
   return useQuery(['profile', username], getProfile);
}

export default useProfile;
