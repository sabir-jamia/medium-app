function init() {
   return {
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

   if (action.type == 'ERROR') {
      return { ...state, errors: [action.error.message] };
   }

   return state;
}

export { init, reducer };
