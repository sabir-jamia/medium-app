/**@jsx jsx */
import { jsx } from 'theme-ui';
import { Flex, Box, Input, Label, Button } from '@theme-ui/components';
import { useReducer } from 'react';
import { useHistory } from 'react-router-dom';

import useLogin from '../../hooks/use-login';
import { init, reducer } from './reducer';

function LoginPage() {
   const [state, dispatch] = useReducer(reducer, '', init);
   const { email, password } = state;
   const [mutate] = useLogin();
   const history = useHistory();

   const handleSubmit = event => {
      event.preventDefault();
      mutate(
         { email, password },
         {
            onSuccess: response => {
               localStorage.setItem('jwt-token', response.token);
               history.push('/');
            },
            onError: error => {
               dispatch({
                  type: 'ERROR',
                  error: error,
               });
            },
         }
      );
   };

   return (
      <Box className='content-width' m={4} bg='muted' p={5}>
         {state.errors.map(error => (
            <li key={error}>{error}</li>
         ))}
         <Flex
            as='form'
            sx={{
               flexDirection: 'column',
               alignItems: 'flex-end',
            }}
            onSubmit={handleSubmit}
         >
            <Label htmlFor='email'>Email</Label>
            <Input
               id='email'
               name='email'
               value={email}
               mb={3}
               onChange={e =>
                  dispatch({ type: 'SET_EMAIL', email: e.target.value })
               }
            />
            <Label htmlFor='password'>Password</Label>
            <Input
               id='password'
               name='password'
               value={password}
               type='password'
               mb={3}
               onChange={e =>
                  dispatch({ type: 'SET_PASSWORD', password: e.target.value })
               }
            />
            <Button type='submit'>Sign in</Button>
         </Flex>
      </Box>
   );
}

export default LoginPage;
