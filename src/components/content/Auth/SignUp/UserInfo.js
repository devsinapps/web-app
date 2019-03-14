import React from 'react'

//Reactstrap
import { Row, Col, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
class UserInfo extends React.Component{
	state = {
		position: []
	}

	getPosition = (jbtn) => {
		this.setState({
			position: jbtn.position
		})
	}
	render(){
		const { position } = this.state
		const { value, jkPeg, jabatanPeg } = this.props
		const enabled = value.firstName.length > 0 &&
						value.lastName.length > 0 &&
						value.username.length > 0 &&
						value.email.length > 0 &&
						value.phone.length > 0 &&
						value.gender.length > 0 &&
						value.division.length > 0 &&
						value.position.length > 0;
		return(
			<Form>
				<Row form>
					<Col lg='6'>
						<FormGroup>
							<Label htmlFor='firstName'> Nama Depan </Label>
							<Input
								id='firstName'
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<Label htmlFor='lastName'> Nama Belakang </Label>
							<Input
								id='lastName'
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
				</Row>
				<FormGroup>
					<Label htmlFor='username'> Username </Label>
					<Input
						id='username'
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<Row form>
					<Col lg='6'>
						<FormGroup>
							<Label htmlFor='email'> Email </Label>
							<Input
								id='email'
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='6'>
						<FormGroup>
							<Label htmlFor='phone'> No.Handphone </Label>
							<Input
								id='phone'
								value={value.phone}
								min='0'
								max='100'
								maxLength='14'
								pattern="^-?[0-9]\d*\.?\d*$"
								onChange={this.props.handleChangeOnPhone}
							/>
						</FormGroup>
					</Col>
				</Row>
				<Row form>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='gender'> Jenis Kelamin </Label>
							<CustomInput type='select' id='gender' onChange={this.props.onChange}>
								<option value=''> Pilih Jenis Kelamin </option>
								{jkPeg.map((jk)=>{
									return(
										<option value={jk}> {jk} </option>
									)
								})}
							</CustomInput>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='division'> Bagian </Label>
							<CustomInput type='select' id='division' onChange={this.props.onChange}>
								<option value=''> Pilih Bagian </option>
								{jabatanPeg.map((jbtn)=>{
									return(
										<option value={jbtn.division} onClick={() => this.getPosition(jbtn)}> {jbtn.division} </option>
									)
								})}
							</CustomInput>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='position'> Jabatan </Label>
							<CustomInput type='select' id='position' onChange={this.props.onChange}>
								<option value=''> Pilih Jabatan </option>
								{position.map((pstn)=>{
									return(
										<option value={pstn} > {pstn} </option>
									)
								})}
							</CustomInput>
						</FormGroup>
					</Col>
				</Row>
				<FormGroup>
					<Button color='primary' block onClick={this.props.nextStep} disabled={!enabled}> Next </Button>
				</FormGroup>
			</Form>
		)
	}
}

export default UserInfo