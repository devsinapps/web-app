import React from 'react'
//Tools
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
//Assets
import Loading from './../../assets/images/Loading.png'
//Container
import { ContainerRow, ColCard } from './../../grid/GridBootstrap'
//Reactstrap
import { CardTitle } from 'reactstrap'
class Data_Pegawai extends React.Component{
	state = {
		loading: true
	}

	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				loading: false
			})
		},3000)
	}
	render(){
		const { loading } = this.state
		const { auth, profile } = this.props
		if(auth.uid == null) return <Redirect to='/auth' />;
		if(loading){
			return(
				<div className='Loading'>
					<img alt='Loading' src={Loading} />
				</div>
			)
		}
		else{
			return(
				<div className='Data_Pegawai'>
					<ContainerRow>
						<ColCard lgCol='4' mdCol='4' smCol='4' xsCol='4' colClass='' brCard='mb-3' tlCard=''>
							<CardTitle> {profile.firstName + ' ' + profile.lastName} </CardTitle>
							<ul>
								<li> Position: {profile.position} </li>
								<li> Phone: {profile.phone} </li>
								<li> Email: {profile.email} </li>
							</ul>
						</ColCard>
					</ContainerRow>
				</div>
			)
		}
	}
}

const mapStateToProps = (state) => {
	return{
		auth: state.firebase.auth,
		profile: state.firebase.profile
	}
}

export default connect(mapStateToProps)(Data_Pegawai)	