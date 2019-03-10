import React from 'react'
//Tools
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
//Container
import { ContainerRow, ColCard } from './../../grid/GridBootstrap'
//Component
import { RekruterTable } from './RekruterTable'
import { RekruterForm } from './RekruterForm'
//Actions
import { inputRekruter, updateRekruter, deleteRekruter, arsipRekruter } from './../../../store/actions/dataRekrutPegawaiActions'
class Data_Rekrut_Pegawai extends React.Component{
	state = {
		idRekruter: '',
		namaRekruter: '',
		ttl: '',
		alamat: '',
		pendidikan: '',
		wartegg: '',
		kraepelin: '',
		logikaPenalaran: '',
		nilaiRata: ''
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	getDataRow = (rekruter) => {
		this.setState({
			idRekruter: rekruter.id,
			namaRekruter: rekruter.namaRekruter,
			ttl: rekruter.ttl,
			alamat: rekruter.alamat,
			pendidikan: rekruter.pendidikan,
			wartegg: rekruter.wartegg,
			kraepelin: rekruter.kraepelin,
			logikaPenalaran: rekruter.logikaPenalaran,
			nilaiRata: rekruter.nilaiRata
		})
	}
	inputRekruter = (e) => {
		e.preventDefault();
		const nilaiRata = e.target.nilaiRata.value
		const { namaRekruter, ttl, alamat, pendidikan, wartegg, kraepelin, logikaPenalaran } = this.state
		const dataRekruter = {
			namaRekruter, 
			ttl, 
			alamat, 
			pendidikan, 
			wartegg, 
			kraepelin, 
			logikaPenalaran,
			nilaiRata
		}
		this.props.inputRekruter(dataRekruter)
		this.setState({
			namaRekruter: '',
			ttl: '',
			alamat: '',
			pendidikan: '',
			wartegg: '',
			kraepelin: '',
			logikaPenalaran: '',
			nilaiRata: ''
		})
	}

	updateRekruter = (e) => {
		const { idRekruter, namaRekruter, ttl, alamat, pendidikan, wartegg, kraepelin, logikaPenalaran, nilaiRata } = this.state
		const dataRekruter = {
			idRekruter,
			namaRekruter, 
			ttl, 
			alamat, 
			pendidikan, 
			wartegg, 
			kraepelin, 
			logikaPenalaran,
			nilaiRata
		}
		const check = window.confirm('Update?')
		if(check === true){
			this.props.updateRekruter(dataRekruter)
			this.setState({
				idRekruter: '',
				namaRekruter: '',
				ttl: '',
				alamat: '',
				pendidikan: '',
				wartegg: '',
				kraepelin: '',
				logikaPenalaran: '',
				nilaiRata: ''
			})
		}else{
			return null
		}
	}

	deleteRekruter = (e) => {
		const {idRekruter } = this.state
		const check = window.confirm('Delete?')
		if(check === true){
			this.props.deleteRekruter(idRekruter)
			this.setState({
				idRekruter: '',
				namaRekruter: '',
				ttl: '',
				alamat: '',
				pendidikan: '',
				wartegg: '',
				kraepelin: '',
				logikaPenalaran: '',
				nilaiRata: ''
			})
		}else{
			return null
		}
	}

	arsipRekruter = (e) => {
		const { idRekruter, namaRekruter, ttl, alamat, pendidikan, wartegg, kraepelin, logikaPenalaran, nilaiRata } = this.state
		const dataRekruter = {
			idRekruter,
			namaRekruter, 
			ttl, 
			alamat, 
			pendidikan, 
			wartegg, 
			kraepelin, 
			logikaPenalaran,
			nilaiRata
		}
		const check = window.confirm('Arsip?')
		if(check === true){
			this.props.arsipRekruter(dataRekruter)
			this.setState({
				idRekruter: '',
				namaRekruter: '',
				ttl: '',
				alamat: '',
				pendidikan: '',
				wartegg: '',
				kraepelin: '',
				logikaPenalaran: '',
				nilaiRata: ''
			})
		}else{
			return null
		}
	}

	resetForm = (e) => {
		this.setState({
			idRekruter: '',
			namaRekruter: '',
			ttl: '',
			alamat: '',
			pendidikan: '',
			wartegg: '',
			kraepelin: '',
			logikaPenalaran: '',
			nilaiRata: ''
		})
	}
	render(){
		const { auth, data_rekrut_pegawai } = this.props
		const { idRekruter, namaRekruter, ttl, alamat, pendidikan, wartegg, kraepelin, logikaPenalaran } = this.state
		const nilaiRata = Math.round((+wartegg + +kraepelin + +logikaPenalaran) / 3);
		const value = { idRekruter, namaRekruter, ttl, alamat, pendidikan, wartegg, kraepelin, logikaPenalaran, nilaiRata } 
		if(auth.uid == null) return <Redirect to='/auth' />;
		return(
			<div id='Data_Rekrut_Pegawai'>
				<ContainerRow>
					<ColCard lgCol='12' mdCol='12' smCol='12' xsCol='12' colClass='mx-auto' brCard='mb-3' tlCard='Data Rekruter'>
						<RekruterTable 
							data_rekrut_pegawai={data_rekrut_pegawai}
							getDataRow={this.getDataRow}
						/>
					</ColCard>
				</ContainerRow>
				<ContainerRow>
					<ColCard lgCol='12' mdCol='12' smCol='12' xsCol='12' colClass='mx-auto' brCard='mb-3' tlCard='Form Test Rekruter'>
						<RekruterForm 
							value={value}
							onChange={this.onChange}
							inputRekruter={this.inputRekruter}
							updateRekruter={this.updateRekruter}
							deleteRekruter={this.deleteRekruter}
							arsipRekruter={this.arsipRekruter}
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
		auth: state.firebase.auth,
		data_rekrut_pegawai: state.firestore.ordered.data_rekrut_pegawai
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		inputRekruter: (dataRekruter) => dispatch(inputRekruter(dataRekruter)),
		updateRekruter: (dataRekruter) => dispatch(updateRekruter(dataRekruter)),
		deleteRekruter: (idRekruter) => dispatch(deleteRekruter(idRekruter)),
		arsipRekruter: (dataRekruter) => dispatch(arsipRekruter(dataRekruter))
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect([{
		collection: 'data_rekrut_pegawai'
	}])
)(Data_Rekrut_Pegawai) 