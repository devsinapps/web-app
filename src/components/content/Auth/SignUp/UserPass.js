import React from 'react'

//Reactstrap
import { Row, Col, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
class UserPass extends React.Component{
	render(){
		const { value } = this.props
		const enabled = value.password.length > 0 &&
						value.keypass.length > 0;
		return(
			<Form>
				<FormGroup>
					<Label htmlFor='password'> Kata Sandi </Label>
					<Input
						id='password'
						type='password'
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='keypass'> Ulangi Kata Sandi </Label>
					<Input
						id='keypass'
						type='password'
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Button color='primary' block onClick={this.props.signUp} disabled={!enabled}> Sign Up </Button>
				</FormGroup>
			</Form>
		)
	}
}

export default UserPass