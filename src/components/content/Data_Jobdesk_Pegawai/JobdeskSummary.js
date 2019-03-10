import React from 'react'

//Container
import { ColCard } from './../../grid/GridBootstrap'
//Reactstrap
import { CardTitle, CardText } from 'reactstrap'
export class JobdeskSummary extends React.Component{
	render(){
		const { jobdesk } = this.props
		return(
			<ColCard lgCol='3' mdCol='3' smCol='3' xsCol='3' colClass='' brCard='mb-3' tlCard={'Jobdesk'+' '+jobdesk.namaPeg}>
				<CardTitle> {jobdesk.jobdesk} </CardTitle>
				<ul>
					<li> {jobdesk.jobdeskTipe} </li>
					<li> {jobdesk.deadLine} </li>
					<li> {jobdesk.keterangan} </li>
				</ul>
			</ColCard>
		)
	}
}