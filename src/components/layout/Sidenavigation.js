import React from 'react'
//Tools
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
//Component
import Dropdown from './Dropdown'
import { AdminView, Marketing, Finance, Akunting, HCSM} from './MenuView'
class Sidenavigation extends React.Component{
	render(){
		//props from routes
		const { menuViewUser } = this.props
		//props from mapPorps
		const { profile } = this.props 
		const viewMenuUser = profile.level === 1 ? <AdminView /> : null ||
							 menuViewUser == 'Marketing' && profile.division == 'Marketing' ? <Marketing /> : null || 
							 menuViewUser == 'Finance' && profile.division == 'Finance' ? <Finance /> : null ||
						  	 menuViewUser == 'Akunting' && profile.division == 'Akunting' ? <Akunting /> : null || 
						  	 menuViewUser == 'HCSM' && profile.division == 'HCSM' ? <HCSM /> : null;
		return(
			<div className='Sidenavigation'>
				<div className='Menu-nav'>
					<div className='Title'>
						<span> Title </span> 
					</div>
					<ul>
						<li className='li'> 
							<Link to='/'> Dashboard </Link> 
						</li>
						{viewMenuUser}
					</ul>
				</div>
				<div className='Toggle-nav'>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		profile: state.firebase.profile
	}
}

export default connect(mapStateToProps)(Sidenavigation)