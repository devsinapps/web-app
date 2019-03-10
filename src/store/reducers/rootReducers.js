import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import { jkReducer, religionReducer, statusPernikahanReducer, countriesReducer, jabatanReducer, statusReducer, golonganReducer } from './dataReducer'
import authReducer from './authReducer'
import dataPegawaiReducer from './dataPegawaiReducer'
import dataRekruterPegawaiReducer from './dataRekruterPegawaiReducer'
import dataJobdeskPegawaiReducer from './dataJobdeskPegawaiReducer'

const rootReducers = combineReducers({
	jkPeg: jkReducer,
	religionPeg: religionReducer,
	statusPernikahan: statusPernikahanReducer,
	countries: countriesReducer,
	jabatanPeg: jabatanReducer,
	statusPeg: statusReducer,
	golonganPeg: golonganReducer,
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	auth: authReducer,
	dataPegawai: dataPegawaiReducer,
	dataRekrut: dataRekruterPegawaiReducer,
	dataJobdesk: dataJobdeskPegawaiReducer
})

export default rootReducers