import React from 'react'

//Tools
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
//Container
import { ContainerRow, ColCard } from './../../grid/GridBootstrap'
//Componnent
import { ArsipTable } from './ArsipTable'
import { ArsipForm } from './ArsipForm'
//Actions
import { deleteRekruter } from './../../../store/actions/dataRekrutPegawaiActions'
class Data_Arsip_Rekruter extends React.Component{
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
			<div id='Data_Arsip_Rekruter'>
				<ContainerRow>
					<ColCard lgCol='12' mdCol='12' smCol='12' xsCol='12' colClass='mx-auto' brCard='mb-3' tlCard='Data Arsip Rekruter'>
						<ArsipTable 
							data_rekrut_pegawai={data_rekrut_pegawai}
							getDataRow={this.getDataRow}
						/>
					</ColCard>
					<ColCard lgCol='12' mdCol='12' smCol='12' xsCol='12' colClass='mx-auto' brCard='mb-3' tlCard='Data Form Rekruter'>
						<ArsipForm
							value={value}
							onChange={this.onChange}
							deleteRekruter={this.deleteRekruter}
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
		deleteRekruter: (idRekruter) => dispatch(deleteRekruter(idRekruter))
	}
}


export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect([{
		collection: 'data_rekrut_pegawai'
	}])
)(Data_Arsip_Rekruter)