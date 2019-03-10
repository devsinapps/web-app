import React from 'react'

//Reactstrap
import { Row, Col, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
export class JobdeskForm extends React.Component{
	render(){
		return(
			<Form onSubmit={this.props.inputJobdesk}>
				<Row form>
					<Col lg='3'>
						<FormGroup>
							<Label htmlFor='jobdesk'> Jobdesk </Label>
							<Input
								id='jobdesk'
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='3'>
						<FormGroup>
							<Label htmlFor='jobdeskTipe'> Tipe Jobdesk </Label>
							<CustomInput type='select' id='jobdeskTipe' onChange={this.props.onChange}>  
								<option vlaue=''> Pilih </option>
								<option value='kuantitas'> Kuantitas </option>
								<option value='kualitas'> Kualitas </option>
							</CustomInput>
						</FormGroup>
					</Col>
					<Col lg='2'>
						<FormGroup>
							<Label htmlFor='deadLine'> Dead Line </Label>
							<Input
								id='deadLine'
								type='date'
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='keterangan'> Keterangan </Label>
							<Input
								id='keterangan'
								type='textarea'
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
				</Row>
				<FormGroup className='text-center'>
					<Button color='primary'> Post </Button>
				</FormGroup>
			</Form>
		)
	}
}