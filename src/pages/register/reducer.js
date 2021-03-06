function init() {
   return {
      username: '',
      email: '',
      password: '',
      errors: [],
   };
}

function reducer(state, action) {
   if (action.type == 'SET_EMAIL') {
      return { ...state, email: action.email };
   }

   if (action.type == 'SET_PASSWORD') {
      return { ...state, password: action.password };
   }

   if (action.type == 'SET_USERNAME') {
      return { ...state, username: action.username };
   }

   if (action.type == 'ERROR') {
      return { ...state, errors: JSON.parse(action.error.message) };
   }

   return state;
}

export { init, reducer };
