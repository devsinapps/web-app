import React from 'react'
//Tools
import { Link } from 'react-router-dom'
//Reactstrap
import { Navbar, NavbarBrand } from 'reactstrap'

class Topnavigation extends React.Component{
	render(){
		return(
			<Navbar className='Topnavigation'>
				<NavbarBrand active> Sistem Kepegawaian </NavbarBrand>
				<span className='Auth-btn'> 
					<Link to='/'>
					Auth 
					</Link>
				</span>
			</Navbar>
		)
	}
}

export default Topnavigation