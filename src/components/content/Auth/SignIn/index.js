import React from 'react'
//Tools
import { connect } from 'react-redux'
//Reactstrap
import { Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
//Actions
import { signIn, updateViewMenu } from './../../../../store/actions/authActions'
class SignIn extends React.Component{
	state = {
		viewMenuUser: '',
		email: '',
		password: ''
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	signIn = (e) => {
		e.preventDefault();
		const { email, password } = this.state
		const { viewMenuUser } = this.state
		const credentials = {
			email,
			password
		}
		this.props.signIn(credentials)
		this.props.updateViewMenu(viewMenuUser)
	}
	render(){
		const { systemMenu } = this.props
		return(
			<Form onSubmit={this.signIn}>
				<FormGroup>
					<Label htmlFor='viewMenuUser'> Portal </Label>
					<CustomInput type='select' id='viewMenuUser' onChange={this.onChange}>
						<option value='admin'> Pilih Portal </option>
						{systemMenu.map((menu)=>{
							return(
								<option value={menu}> {menu} </option>
							)
						})}
					</CustomInput>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='email'> Email </Label>
					<Input
						id='email'
						type='email'
						onChange={this.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='password'> Password </Label>
					<Input
						id='password'
						type='password'
						onChange={this.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Button color='primary' block> Sign In </Button>
				</FormGroup>
			</Form>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		systemMenu: state.systemMenu
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		signIn: (credentials) => dispatch(signIn(credentials)),
		updateViewMenu: (viewMenuUser) => dispatch(updateViewMenu(viewMenuUser))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)