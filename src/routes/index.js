import React from 'react'
//Tools
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
	render(){
		return(
			<Router>
				<div id='Routes'>
					<Topnavigation />
					<Sidenavigation />
					<div className='Content'>
						<Switch>
							<Route path='/' component={Main} exact />
							<Route path='/auth' component={Auth} />
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

export default Routes