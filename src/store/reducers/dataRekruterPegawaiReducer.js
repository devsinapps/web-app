const initState = {
	rekrutErr: ''
}

const dataRekruterPegawaiReducer = (state = initState, action) => {
	switch(action.type){
		case "TAMBAH_REKRUTER_BERHASIL":
			console.log("TAMBAH_REKRUTER_BERHASIL")
			return{
				...state,
				rekrutErr: ''
			}

		case "TAMBAH_REKRUTER_ERR":
			console.log("TAMBAH_REKRUTER_ERR")
			return{
				...state,
				rekrutErr: 'TAMBAH_REKRUTER_ERR'
			}

		case "UBAH_REKRUTER_BERHASIL":
			console.log("UBAH_REKRUTER_BERHASIL")
			return{
				...state,
				rekrutErr: ''
			}

		case "UBAH_REKRUTER_ERR":
			console.log("UBAH_REKRUTER_ERR")
			return{
				...state,
				rekrutErr: 'UBAH_REKRUTER_ERR'
			}

		case "HAPUS_REKRUTER_BERHASIL":
			console.log("HAPUS_REKRUTER_BERHASIL")
			return{
				...state,
				rekrutErr: ''
			}

		case "ARSIP_REKRUTER_BERHASIL":
			console.log("ARSIP_REKRUTER_BERHASIL")
			return{
				...state,
				rekrutErr: ''
			}

		case "ARSIP_REKRUTER_ERR":
			console.log("ARSIP_REKRUTER_ERR")
			return{
				...state,
				rekrutErr: 'ARSIP_REKRUTER_ERR'
			}

		default:
			return state
	}
}

export default dataRekruterPegawaiReducer