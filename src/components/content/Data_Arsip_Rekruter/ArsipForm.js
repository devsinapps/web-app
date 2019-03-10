import React from 'react'
//Reactstrap
import { Row, Col, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
export class ArsipForm extends React.Component{
	render(){
		const { value } = this.props
		return(
			<Form onSubmit={this.props.inputRekruter}>
				<Row form>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='namaRekruter'> Nama </Label>
							<Input
								id='namaRekruter'
								value={value.namaRekruter}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='ttl'> Tempat, Tanggal Lahir </Label>
							<Input
								id='ttl'
								value={value.ttl}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
						<Label htmlFor='pendidikan'> Pendidikan </Label>
						<Input
							id='pendidikan'
							value={value.pendidikan}
							onChange={this.props.onChange}
						/>
					</FormGroup>
					</Col>
				</Row>
				<FormGroup>
					<Label htmlFor='alamat'> Alamat </Label>
					<Input
						id='alamat'
						type='textarea'
						value={value.alamat}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<Row form>
					<Col lg='3'>
						<FormGroup>
							<Label htmlFor='wartegg'> Nilai Test Wartegg </Label>
							<Input
								id='wartegg'
								type='number'
								value={value.wartegg}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='3'>
						<FormGroup>
							<Label htmlFor='kraepelin'> Nilai Test Kraepelin </Label>
							<Input
								id='kraepelin'
								type='number'
								value={value.kraepelin}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='3'>
						<FormGroup>
							<Label htmlFor='logikaPenalaran'> Nilai Test Logika Penalaran </Label>
							<Input
								id='logikaPenalaran'
								type='number'
								value={value.logikaPenalaran}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='3'>
						<FormGroup>
							<Label htmlFor='nilaiRata'> Nilai Rata Rata </Label>
							<Input
								id='nilaiRata'
								value={value.nilaiRata}
								onChange={this.props.onChange}
								disabled
							/>
						</FormGroup>
					</Col>
				</Row>
				<FormGroup className='text-center'>
					<Button color='danger' onClick={this.props.deleteRekruter}> Hapus </Button>{' '}
					<Button color='info' onClick={this.props.resetForm}> Reset </Button>
				</FormGroup>
			</Form>
		)
	}
}
