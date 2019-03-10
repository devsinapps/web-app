import React from 'react'

//Reactstrap
import { Row, Col, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
class UserInfo extends React.Component{
	render(){
		const { jkPeg, jabatanPeg } = this.props
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
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
				</Row>
				<Row form>
					<Col lg='6'>
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
					<Col lg='6'>
						<FormGroup>
							<Label htmlFor='position'> Jabatan </Label>
							<CustomInput type='select' id='position' onChange={this.props.onChange}>
								<option value=''> Pilih Jabatan </option>
								{jabatanPeg.map((jabatan)=>{
									return(
										<option value={jabatan}> {jabatan} </option>
									)
								})}
							</CustomInput>
						</FormGroup>
					</Col>
				</Row>
				<FormGroup>
					<Button color='primary' block onClick={this.props.nextStep}> Next </Button>
				</FormGroup>
			</Form>
		)
	}
}

export default UserInfo