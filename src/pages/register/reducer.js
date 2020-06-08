function init() {
   return {
      username: '',
      email: '',
      password: '',
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

   return state;
}

export { init, reducer };
