/**@jsx jsx */
import { jsx } from 'theme-ui';
import { Flex, Box, Label, Input, Button } from '@theme-ui/components';
import { useReducer } from 'react';
import { useHistory } from 'react-router-dom';

import useRegister from '../../hooks/use-register';
import { init, reducer } from './reducer';

function Register() {
   const [state, dispatch] = useReducer(reducer, '', init);
   const { email, password, username } = state;
   const [mutate] = useRegister();
   const history = useHistory();

   const handleSubmit = event => {
      event.preventDefault();
      mutate(
         { email, password, username },
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
      <Box sx={{ width: '60%' }} m={4} bg='muted' p={5}>
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
            <Label htmlFor='username'>Username</Label>
            <Input
               id='username'
               name='username'
               value={username}
               type='username'
               mb={3}
               onChange={e =>
                  dispatch({ type: 'SET_USERNAME', username: e.target.value })
               }
            />
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
            <Button type='submit'>Sign up</Button>
         </Flex>
      </Box>
   );
}

export default Register;
