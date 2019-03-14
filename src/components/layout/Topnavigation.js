import React from 'react'
//Tools
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
//Reactstrap
import { Navbar, NavbarBrand } from 'reactstrap'
//actions
import { signOut } from './../../store/actions/authActions'
class Topnavigation extends React.Component{
	render(){
		const { auth } = this.props
		const classBAuth = auth.uid != null ? null : 'beforeAuth';
		const viewSignout = auth.uid != null ? 
							<span className='Auth-btn' onClick={this.props.signOut}> 
								Sign Out 
							</span>
							:
							null;
		return(
			<Navbar className={'Topnavigation' + ' ' + classBAuth}>
				<NavbarBrand active> Web App </NavbarBrand>
				{viewSignout}
			</Navbar>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		signOut: () => dispatch(signOut())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Topnavigation)