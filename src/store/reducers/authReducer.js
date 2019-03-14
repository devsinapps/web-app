const initState = {
	authError: ''
}

const authReducer = (state = initState, action) => {
	switch(action.type){
		case "SIGNIN_BERHASIL":
			console.log("SIGNIN_BERHASIL")
			return{
				...state,
				authError: ''
			}

		case "SIGNIN_GAGAL":
			console.log("SIGNIN_GAGAL")
			return{
				...state,
				authError: 'SIGNIN_GAGAL'
			}

		case "SIGNOUT_BERHASIL":
			console.log("SIGNOUT_BERHASIL")
			return{
				...state,
				authError: ''
			}

		case "SIGNUP_BERHASIL":
			console.log("SIGNUP_BERHASIL")
			return{
				...state,
				authError: ''
			}

		case "SIGNUP_GAGAL":
			console.log("SIGNUP_GAGAL")
			return{
				...state,
				authError: 'SIGNUP_GAGAL'
			}

		case "UPDATE_VIEW_MENU":
			console.log("UPDATE_VIEW_MENU")
			return{
				...state,
				authError: ''
			}

		case "UPDATE_VIEW_MENU_FAIL":
			console.log("UPDATE_VIEW_MENU_FAIL")
			return{
				...state,
				authError: 'UPDATE_VIEW_MENU_FAIL'
			}

		default:
			return state
	}
}

export default authReducer