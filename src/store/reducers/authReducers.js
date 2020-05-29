const initState = {
    authError: null,
    message: null
}

const authReducer = (state = initState, action) => {
     switch(action.type){
         case 'LOGIN_ERROR':
             console.log('login error');
             return {
                 ...state,
                 authError: 'Login Failed',
                 message: null
             }
             case 'LOGIN_SUCCESS':
                 console.log('login success');
                 return {
                     ...state,
                     authError: null,
                     message: "Login successful, Welcome!"
                 }
             case 'SIGNOUT_SUCCESS':
                 console.log('logout success');
                 return {
                     state,
                     authError: null,
                     message: null
                 }
             case 'SIGNUP_SUCCESS':
                 console.log('Signup success');
                 return {
                     ...state,
                     authError: null,
                     message: "Signed up successfully"
                 }
             case 'SIGNUP_ERROR':
                 console.log('Signup error');
                 return {
                     ...state,
                     authError: action.err.message,
                     message: null
                 }
            default: 
                 return state;
     }
}

export default authReducer