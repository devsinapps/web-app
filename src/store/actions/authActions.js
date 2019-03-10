export const signIn = (credentials) => {
	return(dispatch , getState, {getFirebase})=>{
		const firebase = getFirebase();

		firebase.auth().signInWithEmailAndPassword(
			credentials.email,
			credentials.password
		).then(()=>{
			dispatch({
				type: "SIGNIN_BERHASIL"
			})
		}).catch((err)=>{
			dispatch({
				type: "SIGNIN_GAGAL",
				err
			})
		})
	}
}

export const signOut = () => {
	return(dispatch , getState, {getFirebase})=>{
		const firebase = getFirebase();

		firebase.auth().signOut().then(()=>{
			dispatch({
				type: "SIGNOUT_BERHASIL"
			})
		})
	}
}

export const signUp = (dataUser) => {
	return(dispatch, getState, {getFirebase, getFirestore})=>{
		const firebase = getFirebase();
		const firestore = getFirestore();

		firebase.auth().createUserWithEmailAndPassword(
			dataUser.email,
			dataUser.password
		).then((resp)=>{
			return firestore.collection('data_akun_pegawai').doc(resp.user.uid).set({
				firstName: dataUser.firstName,
				lastName: dataUser.lastName,
				username: dataUser.username,
				email: dataUser.email,
				phone: dataUser.phone,
				position: dataUser.position,
				gender: dataUser.gender,
				initials: dataUser.firstName[0]+ dataUser.lastName[0],
				level: 3,
				createdAt: new Date()
			})
		}).then(()=>{
			dispatch({
				type: "SIGNUP_BERHASIL"
			})
		}).catch((err)=>{
			dispatch({
				type: "SIGNUP_GAGAL",
				err
			})
		})
	}
}