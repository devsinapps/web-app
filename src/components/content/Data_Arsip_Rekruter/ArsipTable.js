import React from 'react'

//Reactstrap
import { Table } from 'reactstrap'
export const ArsipTable = (props) => {
	const { data_rekrut_pegawai } = props
	let no = 1
	return(
		<Table hover bordered striped responsive size='sm'>
			<thead>
				<tr>
					<th> No </th>
					<th> Nama </th>
					<th> Ttl </th>
					<th> Alamat </th>
					<th> Pendidikan </th>
					<th> Wartegg Test </th>
					<th> Kraepelin Test </th>
					<th> Logika Penalaran Test </th>
					<th> Total Nilai </th>
				</tr>
			</thead>
			<tbody>
				{data_rekrut_pegawai && data_rekrut_pegawai.map((rekruter)=>{
					if(rekruter.arsip !== true){
						return null
					}else{
						return(
							<tr key={rekruter.id} onClick={()=>props.getDataRow(rekruter)}>
								<td> {no++} </td>
								<td> {rekruter.namaRekruter} </td>
								<td> {rekruter.ttl} </td>
								<td> {rekruter.alamat} </td>
								<td> {rekruter.pendidikan} </td>
								<td> {rekruter.wartegg} </td>
								<td> {rekruter.kraepelin} </td>
								<td> {rekruter.logikaPenalaran} </td>
								<td> {rekruter.nilaiRata} </td>
							</tr>
						)
					}
				})}
			</tbody>
		</Table>
	)
}