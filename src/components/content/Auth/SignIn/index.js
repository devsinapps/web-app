import React from 'react'
//Tools
import { connect } from 'react-redux'
//Reactstrap
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
//Actions
import { signIn } from './../../../../store/actions/authActions'
class SignIn extends React.Component{
	state = {
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
		this.props.signIn(this.state)
	}
	render(){
		return(
			<Form onSubmit={this.signIn}>
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

	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		signIn: (credentials) => dispatch(signIn(credentials))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)