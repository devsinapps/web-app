import React from 'react'

//Reactstrap
import { Row, Col, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
class UserPass extends React.Component{
	render(){
		return(
			<Form>
				<FormGroup>
					<Label htmlFor='password'> Kata Sandi </Label>
					<Input
						id='password'
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='keypass'> Ulangi Kata Sandi </Label>
					<Input
						id='keypass'
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Button color='primary' block onClick={this.props.signUp}> Sign Up </Button>
				</FormGroup>
			</Form>
		)
	}
}

export default UserPass