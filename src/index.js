import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose} from 'redux'
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import { ReactReduxFirebaseProvider, getFirebase  } from 'react-redux-firebase'
import thunk from 'redux-thunk';
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'
// import 'firebase/<auth>';
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'
import rootReducer from './store/reducers/rootReducer'
// require('firebase/<auth>');

const store = createStore(
  rootReducer,
  compose(
      applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
      reduxFirestore(firebase, fbConfig)
  )
);

const profileSpecificProps = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false
};  

const rrfProps = {
  firebase,
  config: fbConfig,
  config: profileSpecificProps,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
          <AuthIsLoaded>
          <App />
          </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>splash screen...</div>;
  return children
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
