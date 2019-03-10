const initState = {
	jobdeskErr: ''
}

const dataJobdeskPegawaiReducer = (state = initState, action) => {
	switch(action.type){
		case "POST_JOBDESK_BERHASIL":
			console.log("POST_JOBDESK_BERHASIL")
			return{
				...state,
				jobdeskErr: ''
			}

		case "POST_JOBDESK_GAGAL":
			console.log("POST_JOBDESK_GAGAL")
			return{
				...state,
				jobdeskErr: 'POST_JOBDESK_GAGAL'
			}

		case "UPDATE_JOBDESK_BERHASIL":
			console.log("UPDATE_JOBDESK_BERHASIL")
			return{
				...state,
				jobdeskErr: ''
			}

		case "UPDATE_JOBDESK_GAGAL":
			console.log("UPDATE_JOBDESK_GAGAL")
			return{
				...state,
				jobdeskErr: 'UPDATE_JOBDESK_GAGAL'
			}

		case "HAPUS_JOBDESK_BERHASIL":
			console.log("HAPUS_JOBDESK_BERHASIL")
			return{
				...state,
				jobdeskErr: ''
			}

		default:
			return state
	}
}

export default dataJobdeskPegawaiReducer