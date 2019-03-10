export const inputRekruter = (dataRekruter) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('data_rekrut_pegawai').add({
			...dataRekruter,
			namaRekruter: dataRekruter.namaRekruter,
			ttl: dataRekruter.ttl,
			alamat: dataRekruter.alamat,
			pendidikan: dataRekruter.pendidikan,
			wartegg: dataRekruter.wartegg,
			kraepelin: dataRekruter.kraepelin,
			logikaPenalaran: dataRekruter.logikaPenalaran,
			nilaiRata: dataRekruter.nilaiRata,
			arsip: false 
		}).then(()=>{
			dispatch({
				type: "TAMBAH_REKRUTER_BERHASIL"
			})
		}).catch((err)=>{
			dispatch({
				type: "TAMBAH_REKRUTER_ERR",
				err
			})
		})
	}
}

export const updateRekruter = (dataRekruter) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('data_rekrut_pegawai').doc(dataRekruter.idRekruter).set({
			namaRekruter: dataRekruter.namaRekruter,
			ttl: dataRekruter.ttl,
			alamat: dataRekruter.alamat,
			pendidikan: dataRekruter.pendidikan,
			wartegg: dataRekruter.wartegg,
			kraepelin: dataRekruter.kraepelin,
			logikaPenalaran: dataRekruter.logikaPenalaran,
			nilaiRata: dataRekruter.nilaiRata,
			arsip: false 
		}).then(()=>{
			dispatch({
				type: "UBAH_REKRUTER_BERHASIL"
			})
		}).catch((err)=>{
			dispatch({
				type: "UBAH_REKRUTER_ERR",
				err
			})
		})
	}
}

export const deleteRekruter = (idRekruter) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('data_rekrut_pegawai').doc(idRekruter).delete().then(()=>{
			dispatch({
				type: "HAPUS_REKRUTER_BERHASIL"
			})
		})
	}
}

export const arsipRekruter = (dataRekruter) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('data_rekrut_pegawai').doc(dataRekruter.idRekruter).set({
			namaRekruter: dataRekruter.namaRekruter,
			ttl: dataRekruter.ttl,
			alamat: dataRekruter.alamat,
			pendidikan: dataRekruter.pendidikan,
			wartegg: dataRekruter.wartegg,
			kraepelin: dataRekruter.kraepelin,
			logikaPenalaran: dataRekruter.logikaPenalaran,
			nilaiRata: dataRekruter.nilaiRata,
			arsip: true 
		}).then(()=>{
			dispatch({
				type: "ARSIP_REKRUTER_BERHASIL"
			})
		}).catch((err)=>{
			dispatch({
				type: "ARSIP_REKRUTER_ERR",
				err
			})
		})
	}
}