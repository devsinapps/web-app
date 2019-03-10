import React from 'react'

//Reactstrap
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'

export class ContainerRow extends React.Component{
	render(){
		const { children } = this.props
		return(
			<Container fluid>
				<Row>
					{children}
				</Row>
			</Container>
		)
	}
}

export class ColCard extends React.Component{
	state = {
		isExpanded: false 
	}

	toggleSlider = () => {
		this.setState({
			isExpanded: !this.state.isExpanded,
			height: this.refs.inner.clientHeight
		})
	}
	render(){
		console.log(this.state)
		const { lgCol, mdCol, smCol, xsCol, colClass, brCard, tlCard, children } = this.props
		const { isExpanded, height } = this.state
		const currentHeight = isExpanded ? '0' :  height + +'50';
		const currentOpacity = isExpanded ? '0' : '1';
		const styleHeader = {
			position: 'relative',
			height: '50px'
		}
		const styleBody = {
			overflow: 'hidden',
			transition: 'all .2s',
			opacity: currentOpacity,
			height: currentHeight + 'px'
		}
		const styleSpan = {
			position: 'absolute',
			right: '10px',
			top: '5px',
			cursor: 'pointer'
		}
		return(
			<Col lg={lgCol} md={mdCol} sm={smCol} xs={xsCol} className={colClass}>
				<Card className={brCard}>
					<CardHeader style={styleHeader}> 
						{tlCard}
						<span style={styleSpan} onClick={this.toggleSlider}> x </span> 
					</CardHeader>
					<CardBody style={styleBody}>
						<div className='card-content' ref='inner'>
						{children}
						</div>
					</CardBody>
				</Card>
			</Col>
		)
	}
}