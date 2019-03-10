import React from 'react'
//Reactstrap
import { Table } from 'reactstrap'
class PegawaiTable extends React.Component{
	render(){
		const { dataPegawai } = this.props
		let no = 1
		return(
			<Table hover bordered striped responsive size='sm'>
				<thead>
					<tr>
						<th> No </th>
						<th> Shift </th>
						<th> Nama </th>
						<th> Golongan </th>
						<th> Jabatan </th>
					</tr>
				</thead>
				<tbody>
					{dataPegawai && dataPegawai.map((pegawai)=>{
						return(
							<tr key={pegawai.id} onClick={() => this.props.getDataRow(pegawai)}>
								<td> {no++} </td>
								<td> {pegawai.shift} </td>
								<td> {pegawai.namaPeg} </td>
								<td> {pegawai.golongan} </td>
								<td> {pegawai.jabatan} </td>
							</tr>
						)
					})}
				</tbody>
			</Table>
		)
	}
}

export default PegawaiTable