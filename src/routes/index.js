import React from 'react'
//Tools
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
//Layout
import Sidenavigation from './../components/layout/Sidenavigation'
import Topnavigation from './../components/layout/Topnavigation'
//Component
import Main from './../components/content/Main'
import Auth from './../components/content/Auth'
import Data_Pegawai from './../components/content/Data_Pegawai'
import Data_Rekrut_Pegawai from './../components/content/Data_Rekrut_Pegawai' 
import Data_Arsip_Rekruter from './../components/content/Data_Arsip_Rekruter' 
import Data_Jobdesk_Pegawai from './../components/content/Data_Jobdesk_Pegawai' 

//Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faTimes, faMinus } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleRight, faTimes, faMinus)
class Routes extends React.Component{
	state = {
		menuViewUser: ''
	}

	handleChangeView = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	componentDidMount(){
		const { menuView } = this.props
		setTimeout(()=>{
			this.setState({
				menuViewUser: this.props.menuView[0].menu
			})
		}, 6000)
	}
	render(){
		// console.log(this.state)
		const { idViewMenu, menuViewUser } = this.state
		const { auth, menuView } = this.props	
		const classBAuth = auth.uid != null ? null : 'beforeAuth';
		const viewSidenav = auth.uid != null ? 
										<Sidenavigation 
											menuViewUser={menuViewUser}
										/>
										:
										null
										;
		return(
			<Router>
				<div id='Routes'>
					<Topnavigation />
					{viewSidenav}
					<div className={'Content' + ' ' + classBAuth}>
						<Switch>
							<Route path='/' component={Main} exact />
							<Route path='/auth' render={(routeProps) => (<Auth {...routeProps} menuViewUser={menuViewUser} handleChangeView={this.handleChangeView}/>)}/>
							<Route path='/datapegawai' component={Data_Pegawai} />
							<Route path='/rekrutpegawai' component={Data_Rekrut_Pegawai} />
							<Route path='/arsiprekruter' component={Data_Arsip_Rekruter} />
							<Route path='/jobdesk' component={Data_Jobdesk_Pegawai} />
						</Switch>
					</div>
				</div>
			</Router>
		)
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return{
		auth: state.firebase.auth,
		menuView: state.firestore.ordered.menuView
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([{
		collection: 'menuView'
	}])
	)(Routes)