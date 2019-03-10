export const inputPegawai = (dataPegawai) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('data_pegawai').add({
			...dataPegawai,
			noPeg: new Date(),
			namaPeg: dataPegawai.namaPeg,
			jk: dataPegawai.jk,
			ttl: dataPegawai.ttl,
			agama: dataPegawai.agama,
			kewarganegaraan: dataPegawai.kewarganegaraan,
			statusPernikahan: dataPegawai.statusPernikahan,
			noHP:dataPegawai.noHP,
			email: dataPegawai.email,
			noREK: dataPegawai.noREK,
			username: dataPegawai.username,
			noKTP: dataPegawai.noKTP,
			noSIM: dataPegawai.noSIM,
			noNPWP: dataPegawai.noNPWP,
			jabatan: dataPegawai.jabatan,
			golongan: dataPegawai.golongan,
			status: dataPegawai.status,
			mulaiKerja: dataPegawai.mulaiKerja,
			shift: dataPegawai.shift
		}).then(()=>{
			dispatch({
				type: "TAMBAH_PEGAWAI_BERHASIL"
			})
		}).catch((err)=>{
			dispatch({
				type: "TAMBAH_PEGAWAI_GAGAL",
				err
			})
		})
	}
}

export const updatePegawai = (dataPegawai) =>{
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('data_pegawai').doc(dataPegawai.idPeg).set({
			noPeg: dataPegawai.noPeg,
			namaPeg: dataPegawai.namaPeg,
			jk: dataPegawai.jk,
			ttl: dataPegawai.ttl,
			agama: dataPegawai.agama,
			kewarganegaraan: dataPegawai.kewarganegaraan,
			statusPernikahan: dataPegawai.statusPernikahan,
			noHP:dataPegawai.noHP,
			email: dataPegawai.email,
			noREK: dataPegawai.noREK,
			username: dataPegawai.username,
			noKTP: dataPegawai.noKTP,
			noSIM: dataPegawai.noSIM,
			noNPWP: dataPegawai.noNPWP,
			jabatan: dataPegawai.jabatan,
			golongan: dataPegawai.golongan,
			status: dataPegawai.status,
			mulaiKerja: dataPegawai.mulaiKerja,
			shift: dataPegawai.shift
		}).then(()=>{
			dispatch({
				type: "UBAH_PEGAWAI_BERHASIL"
			})
		}).catch((err)=>{
			dispatch({
				type: "UBAH_PEGAWAI_GAGAL",
				err
			})
		})
	}
}

export const deletePegawai = (idPeg) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('data_pegawai').doc(idPeg).delete().then(()=>{
			dispatch({
				type: "DELETE_PEGAWAI_BERHASIL"
			})
		})
	}
}