export const inputJobdesk = (dataJobdesk) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('data_jobdesk_pegawai').add({
			...dataJobdesk,
			namaPeg: dataJobdesk.namaPeg,
			uidPeg: dataJobdesk.uidPeg,
			jobdesk: dataJobdesk.jobdesk,
			jobdeskTipe: dataJobdesk.jobdeskTipe,
			deadLine: dataJobdesk.deadLine,
			keterangan: dataJobdesk.keterangan,
			createdAt: new Date()
		}).then(()=>{
			dispatch({
				type: "POST_JOBDESK_BERHASIL"
			})
		}).catch((err)=>{
			dispatch({
				type: "POST_JOBDESK_GAGAL",
				err
			})
		})
	}
}

export const updateJobdesk = (dataJobdesk) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('data_jobdesk_pegawai').doc(dataJobdesk.idJobdesk).set({
			namaPeg: dataJobdesk.namaPeg,
			jobdesk: dataJobdesk.jobdesk,
			jobdeskTipe: dataJobdesk.jobdeskTipe,
			deadLine: dataJobdesk.deadLine,
			keterangan: dataJobdesk.keterangan,
			createdAt: dataJobdesk.createdAt
		}).then(()=>{
			dispatch({
				type: "UPDATE_JOBDESK_BERHASIL"
			})
		}).catch((err)=>{
			dispatch({
				type: "UPDATE_JOBDESK_GAGAL",
				err
			})
		})
	}
}

export const deleteJobdesk = (idJobdesk) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('data_jobdesk_pegawai').doc(idJobdesk).delete().then(()=>{
			dispatch({
				type: "HAPUS_JOBDESK_BERHASIL"
			})
		})
	}
}