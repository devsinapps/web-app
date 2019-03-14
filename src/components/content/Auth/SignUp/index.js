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
		division: '',
		position: '',
		gender: '',
		password: '',
		keypass: ''
	}

	nextStep = () => {
		const { email } = this.state
		const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(!regex.test(email)){
			return alert('Email Tidak Sesuai');
		}else{
			this.setState({
				step: 2
			})
		}
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleChangeOnPhone = (e) => {
		const { phone } = this.state
		const rest = e.target.value;
		if(e.target.validity.valid){
			this.setState({
				phone: rest
			})
		}else if(rest === '' || rest === '-'){
			this.setState({
				phone: rest
			})
		}
	}

	signUp = (e) => {
		e.preventDefault();
		const { firstName, lastName, username, email, phone, division, position, gender, password, keypass } = this.state
		const dataUser = {
			firstName, 
			lastName, 
			username, 
			email, 
			phone, 
			division,
			position, 
			gender, 
			password
		}
		if(password !== keypass){
			return alert('Password Tidak Sama')
		}else{
			this.props.signUp(dataUser)
		}
	}
	render(){
		// console.log(this.state)
		const { step } = this.state
		const { firstName, lastName, username, email, phone, division, position, gender, password, keypass } = this.state
		const { jabatanPeg, jkPeg } = this.props
		const value = { firstName, lastName, username, email, phone, division, position, gender, password, keypass };
		switch(step){
			case 1:
				return(
					<UserInfo
						value={value} 
						jkPeg={jkPeg}
						jabatanPeg={jabatanPeg}
						nextStep={this.nextStep}
						onChange={this.onChange}
						handleChangeOnPhone={this.handleChangeOnPhone}
					/>
				)

			case 2:
				return(
					<UserPass
						value={value} 
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
	// console.log(state)
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
