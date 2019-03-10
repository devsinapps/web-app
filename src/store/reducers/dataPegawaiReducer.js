const initState = {
	actionError: ''
}

const dataPegawaiReducer = (state = initState, action) => {
	switch(action.type){
		case "TAMBAH_PEGAWAI_BERHASIL":
			console.log("TAMBAH_PEGAWAI_BERHASIL")
			return{
				...state,
				actionError: ''
			}

		case "TAMBAH_PEGAWAI_GAGAL":
			console.log("TAMBAH_PEGAWAI_GAGAL")
			return{
				...state,
				actionError: 'TAMBAH_PEGAWAI_GAGAL'
			} 

		case "UBAH_PEGAWAI_BERHASIL":
			console.log("UBAH_PEGAWAI_BERHASIL")
			return{
				...state,
				actionError: ''
			}

		case "UBAH_PEGAWAI_GAGAL":
			console.log("UBAH_PEGAWAI_GAGAL")
			return{
				...state,
				actionError: 'UBAH_PEGAWAI_GAGAL'
			} 

		case "DELETE_PEGAWAI_BERHASIL":
			console.log("DELETE_PEGAWAI_BERHASIL")
			return{
				...state,
				actionError: ''
			}
				
		default:
			return state
	}
}

export default dataPegawaiReducer