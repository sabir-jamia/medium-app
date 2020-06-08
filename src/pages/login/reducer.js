function init() {
   return {
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

   return state;
}

export { init, reducer };
