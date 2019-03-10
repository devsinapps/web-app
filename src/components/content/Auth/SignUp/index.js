import React from 'react'
//Tools
import { connect } from 'react-redux'
//Component
import UserInfo from './UserInfo'
import UserPass from './UserPass'
//Actions
import { signUp } from './../../../../store/actions/authActions'
class SignUp extends React.Component{
	state = {
		step: 1,
		firstName: '',
		lastName: '',
		username: '',
		email: '',
		phone: '',
		position: '',
		gender: '',
		password: '',
		keypass: ''
	}

	nextStep = () => {
		this.setState({
			step: 2
		})
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	signUp = (e) => {
		e.preventDefault();
		const { firstName, lastName, username, email, phone, position, gender, password } = this.state
		const dataUser = {
			firstName, 
			lastName, 
			username, 
			email, 
			phone, 
			position, 
			gender, 
			password
		}
		this.props.signUp(dataUser)
	}
	render(){
		// console.log(this.state)
		const { step } = this.state
		const { jabatanPeg, jkPeg } = this.props
		switch(step){
			case 1:
				return(
					<UserInfo 
						jkPeg={jkPeg}
						jabatanPeg={jabatanPeg}
						nextStep={this.nextStep}
						onChange={this.onChange}
					/>
				)

			case 2:
				return(
					<UserPass 
						onChange={this.onChange}
						signUp={this.signUp}
					/>
				)
			default:
			return null;
		}
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return{
		jabatanPeg: state.jabatanPeg,
		jkPeg: state.jkPeg
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		signUp: (dataUser) => dispatch(signUp(dataUser))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
