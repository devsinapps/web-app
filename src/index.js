import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/style/minify/main.css'
import * as serviceWorker from './serviceWorker';

//Tools
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import thunk from 'redux-thunk'

//Reducers
import rootReducers from './store/reducers/rootReducers'
//Firebase Config
import firebaseConfig from './config/firebaseConfig'

const store = createStore(rootReducers,
		compose(
			applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
			reduxFirestore(firebaseConfig),
			reactReduxFirebase(firebaseConfig,{useFirestoreForProfile: true, userProfile: 'data_akun_pegawai', attachAuthIsReady: true})
		)
	)

ReactDOM.render(
	<Provider store={store}>
	<Routes />
	</Provider>, document.getElementById('root'));
serviceWorker.unregister();
