import React from 'react'
//Tools
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
//Container
import { ContainerRow, ColCard } from './../../grid/GridBootstrap'
//Component
import { JobdeskForm } from './JobdeskForm'
import { JobdeskSummary } from './JobdeskSummary'
//Actions
import { inputJobdesk, updateJobdesk, deleteJobdesk } from './../../../store/actions/dataJobdeskPegawaiActions'
class Data_Jobdesk_Pegawai extends React.Component{
	state = {
		idJobdesk: '',
		namaPeg: '',
		jobdesk: '',
		jobdeskTipe: '',
		deadLine: '',
		keterangan: '',
		createdAt: ''
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	inputJobdesk = (e) => {
		e.preventDefault();
		const { auth, profile } = this.props
		const { jobdesk, jobdeskTipe, deadLine, keterangan } = this.state
		const dataJobdesk = {
			uidPeg: auth.uid,
			namaPeg: profile.username,
			jobdesk, 
			jobdeskTipe, 
			deadLine, 
			keterangan
		}
		this.props.inputJobdesk(dataJobdesk)
		this.setState({
			idJobdesk: '',
			namaPeg: '',
			jobdesk: '',
			jobdeskTipe: '',
			deadLine: '',
			keterangan: '',
			createdAt: ''
		})
	}
	render(){
		const { auth, profile, data_jobdesk_pegawai } = this.props
		if(auth.uid == null) return <Redirect to='/auth' />;
		return(
			<div className='Data_Jobdesk_Pegawai'>
				<ContainerRow>
					<ColCard lgCol='12' mdCol='12' smCol='12' xsCol='12' colClass='mx-auto' brCard='mb-3' tlCard='Form Posting'>
						<JobdeskForm 
							onChange={this.onChange}
							inputJobdesk={this.inputJobdesk}
						/>
					</ColCard>
				</ContainerRow>
				<ContainerRow>
					{data_jobdesk_pegawai && data_jobdesk_pegawai.map((jobdesk)=>{
						//View Super Admin
						if(profile.level === 1){
							return(
								<JobdeskSummary key={jobdesk.id} jobdesk={jobdesk}/>
							)
						}
						//View Admin
						else if(profile.level === 2){
							return(
								<JobdeskSummary key={jobdesk.id} jobdesk={jobdesk}/>
							)
						}
						//View User per Id, selected user per jobdesk 
						else if(auth.uid === jobdesk.uidPeg){
							return(
								<JobdeskSummary key={jobdesk.id} jobdesk={jobdesk}/>
							)
						}
						//View null if jobdesk not equal with user uid
						else if(auth.uid !== jobdesk.uidPeg){
							return null
						}
					})}
				</ContainerRow>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		auth: state.firebase.auth,
		data_jobdesk_pegawai: state.firestore.ordered.data_jobdesk_pegawai,
		profile: state.firebase.profile
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		inputJobdesk: (dataJobdesk) => dispatch(inputJobdesk(dataJobdesk)),
		updateJobdesk: (dataJobdesk) => dispatch(updateJobdesk(dataJobdesk)),
		deleteJobdesk: (idJobdesk) => dispatch(deleteJobdesk(idJobdesk))
	}
}

export default compose(
		connect(mapStateToProps, mapDispatchToProps),
		firestoreConnect([{
			collection: 'data_jobdesk_pegawai'
		}])
	)(Data_Jobdesk_Pegawai)