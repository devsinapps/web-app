import React from 'react'

//Reactstrap
import { Row, Col, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
class PegawaiForm extends React.Component{
	render(){
		const { value } = this.props
		const { jkPeg, religionPeg, countries, jabatanPeg, statusPeg, golonganPeg } = this.props
		const checkedShiftT = value.shift === 't' ? 'checked' : '';
		const checkedShiftF = value.shift === 'f' ? 'checked' : '';
		return(
			<Form>
				<Row form>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='noPeg'> No Pegawai </Label>
							<Input 
								id='noPeg'
								disabled
								value={value.noPeg}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='namaPeg'> Name Pegawai </Label>
							<Input 
								id='namaPeg'
								value={value.namaPeg}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='jk'> Jenis Kelamin </Label>
							<CustomInput type='select' id='jk' onChange={this.props.onChange}>
								<option value={value.jk}> {value.jk} </option>
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
							<Label htmlFor='ttl'> TTL </Label>
							<Input 
								id='ttl'
								value={value.ttl}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='agama'> Agama </Label>
							<CustomInput type='select' id='agama' onChange={this.props.onChange}>
								<option value={value.agama}> {value.agama} </option>
								{religionPeg.map((agama)=>{
									return(
										<option value={agama}> {agama} </option>
									)
								})}
							</CustomInput>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='kewarganegaraan'> Kewarganegaraan </Label>
							<CustomInput type='select' id='kewarganegaraan' onChange={this.props.onChange}>
								<option value={value.kewarganegaraan}> {value.kewarganegaraan} </option>
								{countries.map((countryData)=>{
									return(
										<option value={countryData.country}> {countryData.country} </option>
									)
								})}
							</CustomInput>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='statusPernikahan'> Status Pernikahan </Label>
							<Input 
								id='statusPernikahan'
								value={value.statusPernikahan}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='noHP'> Nomor Handphone </Label>
							<Input 
								id='noHP'
								value={value.noHP}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='email'> Email </Label>
							<Input 
								id='email'
								value={value.email}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='noREK'> No Rekening </Label>
							<Input 
								id='noREK'
								value={value.noREK}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='username'> Username </Label>
							<Input 
								id='username'
								value={value.username}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='noKTP'> No KTP </Label>
							<Input 
								id='noKTP'
								value={value.noKTP}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='noSIM'> No SIM </Label>
							<Input 
								id='noSIM'
								value={value.noSIM}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='noNPWP'> No NPWP </Label>
							<Input 
								id='noNPWP'
								value={value.noNPWP}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='jabatan'> Jabatan </Label>
							<CustomInput type='select' id='jabatan' onChange={this.props.onChange}>
								<option value={value.jabatan}> {value.jabatan} </option>
								{jabatanPeg.map((jbtn)=>{
									return(
										<option value={jbtn}> {jbtn} </option>
									)
								})}
							</CustomInput>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='golongan'> Golongan </Label>
							<CustomInput type='select' id='golongan' onChange={this.props.onChange}>
								<option value={value.golongan}> {value.golongan} </option>
								{golonganPeg.map((glg)=>{
									return(
										<option value={glg}> {glg} </option>
									)
								})}
							</CustomInput>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='status'> Status </Label>
							<CustomInput type='select' id='status' onChange={this.props.onChange}>
								<option value={value.status}> {value.status} </option>
								{statusPeg.map((sts)=>{
									return(
										<option value={sts}> {sts} </option>
									)
								})}
							</CustomInput>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='mulaiKerja'> Mulai Kerja </Label>
							<Input 
								id='mulaiKerja'
								type='date'
								value={value.mulaiKerja}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='mulaiKerja'> Shift </Label>
						</FormGroup>
						<FormGroup check inline>
			                <Input type="radio" name="radio2" id='shift' value='t' onChange={this.props.onChange} checked={checkedShiftT}/>{' '}
			                ya
			                <Input type="radio" name="radio2" id='shift' value='f' onChange={this.props.onChange} checked={checkedShiftF}/>{' '}
			                Tidak
			            </FormGroup>
					</Col>
				</Row>
				<FormGroup className='text-center'>
					<Button color='primary' onClick={this.props.inputPegawai}> Simpan </Button> {' '}
					<Button color='warning' onClick={this.props.updatePegawai}> Ubah </Button> {' '}
					<Button color='danger' onClick={this.props.deletePegawai}> Hapus </Button> {' '}
					<Button color='info' onClick={this.props.resetForm}> Reset </Button> {' '}
				</FormGroup>
			</Form>
		)
	}
}

export default PegawaiForm