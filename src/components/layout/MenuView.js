import React from 'react'
//Tools
import { Link } from 'react-router-dom'
//Component
import Dropdown from './Dropdown'

export const Marketing = () => {
	return(
		<Dropdown title='Menu Marketing'>
			<ul className='Dropdown-ul'>
				<li className='Dropdown-li'>
					<Link to='/datapegawai'> Marketing  </Link>  
				</li>
			</ul>
		</Dropdown>
	)
}

export const Finance = () => {
	return(
		<Dropdown title='Menu Finance'>
			<ul className='Dropdown-ul'>
				<li className='Dropdown-li'>
					<Link to='/datapegawai'> Finance  </Link>  
				</li>
			</ul>
		</Dropdown>
	)
}

export const Akunting = () => {
	return(
		<Dropdown title='Menu Akunting'>
			<ul className='Dropdown-ul'>
				<li className='Dropdown-li'>
					<Link to='/datapegawai'> Akunting  </Link>  
				</li>
			</ul>
		</Dropdown>
	)
}

export const HCSM = () => {
	return(
		<Dropdown title='HCSM'>
			<ul className='Dropdown-ul'>
				<li className='Dropdown-li'>
					<Link to='/jobdesk'> Jobdesk Pegawai  </Link>  
				</li>
			</ul>
		</Dropdown>
	)
}

const Admin = () => {
	return(
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
	)
}

export const AdminView = () => {
	return(
		<div>
			<Admin />
			<Marketing />
			<Finance />
			<Akunting />
			<HCSM />
		</div>
	)
}
