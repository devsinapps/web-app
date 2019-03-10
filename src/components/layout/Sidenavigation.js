import React from 'react'
//Tools
import { Link } from 'react-router-dom'
//Component
import Dropdown from './Dropdown'

class Sidenavigation extends React.Component{
	render(){
		return(
			<div className='Sidenavigation'>
				<div className='Menu-nav'>
					<div className='Title'>
						<span> Title </span> 
					</div>
					<ul>
						<li className='li'> 
							<Link to='/'> Menu Pegawai </Link> 
						</li>
						<Dropdown title='Menu Pegawai'>
							<ul className='Dropdown-ul'>
								<li className='Dropdown-li'>
									<Link to='/jobdesk'> Jobdesk Pegawai  </Link>  
								</li>
							</ul>
						</Dropdown>
						<Dropdown title='Menu Admin'>
							<ul className='Dropdown-ul'>
								<li className='Dropdown-li'>
									<Link to='/datapegawai'> Data Pegawai  </Link>  
								</li>
								<li className='Dropdown-li'>
									<Link to='/rekrutpegawai'> Data Rekrut Pegawai  </Link>  
								</li>
								<li className='Dropdown-li'>
									<Link to='/arsiprekruter'> Data Arsip Rekrut  </Link>  
								</li>
							</ul>
						</Dropdown>
					</ul>
				</div>
				<div className='Toggle-nav'>
				</div>
			</div>
		)
	}
}

export default Sidenavigation