import React from 'react'
//Tools
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
//Container
import { ContainerRow, ColCard } from './../../grid/GridBootstrap'
//Component
import PegawaiTable from './PegawaiTable'
import PegawaiForm from './PegawaiForm'
//Actions
import { inputPegawai, updatePegawai, deletePegawai } from './../../../store/actions/dataPegawaiActions'
class Data_Pegawai extends React.Component{
	state = {
		idPeg: '',
		noPeg: '',
		namaPeg: '',
		jk: '',
		ttl: '',
		agama: '',
		kewarganegaraan: '',
		statusPernikahan: '',
		noHP:'',
		email: '',
		noREK: '',
		username: '',
		noKTP: '',
		noSIM: '',
		noNPWP: '',
		jabatan: '',
		golongan: '',
		status: '',
		mulaiKerja: '',
		shift: ''
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	} 
	getDataRow = (pegawai) => {
		this.setState({
			idPeg: pegawai.id,
			noPeg: pegawai.noPeg,
			namaPeg: pegawai.namaPeg,
			jk: pegawai.jk,
			ttl: pegawai.ttl,
			agama: pegawai.agama,
			kewarganegaraan: pegawai.kewarganegaraan,
			statusPernikahan: pegawai.statusPernikahan,
			noHP:pegawai.noHP,
			email: pegawai.email,
			noREK: pegawai.noREK,
			username: pegawai.username,
			noKTP: pegawai.noKTP,
			noSIM: pegawai.noSIM,
			noNPWP: pegawai.noNPWP,
			jabatan: pegawai.jabatan,
			golongan: pegawai.golongan,
			status: pegawai.status,
			mulaiKerja: pegawai.mulaiKerja,
			shift: pegawai.shift
		})
	}
	inputPegawai = (e) => {
		e.preventDefault();
		const { namaPeg, jk, ttl, agama, kewarganegaraan, statusPernikahan, noHP, email, noREK, username, noKTP, noSIM, noNPWP, jabatan, golongan, status, mulaiKerja, shift}  = this.state 
		const dataPegawai = {
			namaPeg, 
			jk, 
			ttl, 
			agama, 
			kewarganegaraan, 
			statusPernikahan, 
			noHP, 
			email, 
			noREK, 
			username, 
			noKTP, 
			noSIM, 
			noNPWP, 
			jabatan, 
			golongan, 
			status, 
			mulaiKerja, 
			shift
		}

		this.props.inputPegawai(dataPegawai)
		this.setState({
			namaPeg: '',
			jk: '',
			ttl: '',
			agama: '',
			kewarganegaraan: '',
			statusPernikahan: '',
			noHP:'',
			email: '',
			noREK: '',
			username: '',
			noKTP: '',
			noSIM: '',
			noNPWP: '',
			jabatan: '',
			golongan: '',
			status: '',
			mulaiKerja: '',
			shift: ''
		})
	}
	updatePegawai = (e) =>{
		e.preventDefault();
		const { idPeg, noPeg, namaPeg, jk, ttl, agama, kewarganegaraan, statusPernikahan, noHP, email, noREK, username, noKTP, noSIM, noNPWP, jabatan, golongan, status, mulaiKerja, shift}  = this.state 
		const dataPegawai = {
			idPeg,
			noPeg,
			namaPeg, 
			jk, 
			ttl, 
			agama, 
			kewarganegaraan, 
			statusPernikahan, 
			noHP, 
			email, 
			noREK, 
			username, 
			noKTP, 
			noSIM, 
			noNPWP, 
			jabatan, 
			golongan, 
			status, 
			mulaiKerja, 
			shift
		}

		const check = window.confirm('Update Pegawai?')
		if(check === true){
			this.props.updatePegawai(dataPegawai)
			this.setState({
				idPeg: '',
				noPeg: '',
				namaPeg: '',
				jk: '',
				ttl: '',
				agama: '',
				kewarganegaraan: '',
				statusPernikahan: '',
				noHP:'',
				email: '',
				noREK: '',
				username: '',
				noKTP: '',
				noSIM: '',
				noNPWP: '',
				jabatan: '',
				golongan: '',
				status: '',
				mulaiKerja: '',
				shift: ''
			})
		}else{
			return null
		}
	}
	deletePegawai = (e) =>{
		e.preventDefault();
		const { idPeg } = this.state
		const check = window.confirm('Delete Pegawai?')
		if(check === true){
			this.props.deletePegawai(idPeg)
			this.setState({
				idPeg: '',
				noPeg: '',
				namaPeg: '',
				jk: '',
				ttl: '',
				agama: '',
				kewarganegaraan: '',
				statusPernikahan: '',
				noHP:'',
				email: '',
				noREK: '',
				username: '',
				noKTP: '',
				noSIM: '',
				noNPWP: '',
				jabatan: '',
				golongan: '',
				status: '',
				mulaiKerja: '',
				shift: ''
			})
		}else{
			return null
		}
	}
	resetForm = () => {
		this.setState({
			idPeg: '',
			noPeg: '',
			namaPeg: '',
			jk: '',
			ttl: '',
			agama: '',
			kewarganegaraan: '',
			statusPernikahan: '',
			noHP:'',
			email: '',
			noREK: '',
			username: '',
			noKTP: '',
			noSIM: '',
			noNPWP: '',
			jabatan: '',
			golongan: '',
			status: '',
			mulaiKerja: '',
			shift: ''
		})
	}
	render(){
		// console.log(this.state)
		const { auth, dataPegawai } = this.props
		const { jkPeg, religionPeg, countries, jabatanPeg, statusPeg, golonganPeg } = this.props
		const { idPeg, noPeg, namaPeg, jk, ttl, agama, kewarganegaraan, statusPernikahan, noHP, email, noREK, username, noKTP, noSIM, noNPWP, jabatan, golongan, status, mulaiKerja, shift}  = this.state
		const value =  { idPeg, noPeg, namaPeg, jk, ttl, agama, kewarganegaraan, statusPernikahan, noHP, email, noREK, username, noKTP, noSIM, noNPWP, jabatan, golongan, status, mulaiKerja, shift} 
		if(auth.uid == null) return <Redirect to='/auth' />;
		return(
			<div className='Data_Pegawai'>
				<ContainerRow>
					<ColCard lgCol='6' mdCol='6' smCol='6' xsCol='6' colClass='mx-auto' brCard='mb-3' tlCard='Data Pegawai'>
						<PegawaiTable 
							dataPegawai={dataPegawai}
							getDataRow={this.getDataRow}
						/>
					</ColCard>
					<ColCard lgCol='6' mdCol='6' smCol='6' xsCol='6' colClass='mx-auto' brCard='mb-3' tlCard='Data Pegawai'>
						<PegawaiForm 
							jkPeg={jkPeg}
							religionPeg={religionPeg}
							countries={countries}
							jabatanPeg={jabatanPeg}
							statusPeg={statusPeg}
							golonganPeg={golonganPeg}
							value={value}
							onChange={this.onChange}
							inputPegawai={this.inputPegawai}
							updatePegawai={this.updatePegawai}
							deletePegawai={this.deletePegawai}
							resetForm={this.resetForm}
						/>
					</ColCard>
				</ContainerRow>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		jkPeg: state.jkPeg,
		religionPeg: state.religionPeg,
		countries: state.countries,
		jabatanPeg: state.jabatanPeg,
		statusPeg: state.statusPeg,
		golonganPeg: state.golonganPeg,
		dataPegawai: state.firestore.ordered.data_pegawai,
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		inputPegawai: (dataPegawai) => dispatch(inputPegawai(dataPegawai)),
		updatePegawai: (dataPegawai) => dispatch(updatePegawai(dataPegawai)),
		deletePegawai: (idPeg) => dispatch(deletePegawai(idPeg))
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect([{
		collection: 'data_pegawai'
	}])
)(Data_Pegawai)