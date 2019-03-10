import React from 'react'

//Reactstrap
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
		isExpanded: false,
		isClose: false 
	}

	toggleSlider = () => {
		this.setState({
			isExpanded: !this.state.isExpanded,
			height: this.refs.inner.clientHeight
		})
	}

	toggleDisplay = () => {
		this.setState({
			isClose: !this.state.isClose
		})
	}
	render(){
		const { lgCol, mdCol, smCol, xsCol, colClass, brCard, tlCard, children } = this.props
		const { isExpanded, isClose, height } = this.state
		const currentHeight = isExpanded ? '0' :  height + +'50';
		const currentDisplay = isClose ? 'none' : 'block';
		const currentOpacity = isExpanded ? '0' : '1';
		const styleCard = {
			display: currentDisplay
		}
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

		const styleBtn = {
			position: 'absolute',
			right: '8px',
			top: '10px',
		}
		const styleMin = {
			cursor: 'pointer',
			height: '10px',
			width: '10px',
			marginRight: '5px',
			fontSize: '10px',
			padding: '2px',
			borderRadius: '50%',
			textAlign: 'center',
			backgroundColor: '#3ae374'
		}

		const styleClose = {
			cursor: 'pointer',
			height: '10px',
			width: '10px',
			marginRight: '5px',
			fontSize: '10px',
			padding: '2px',
			borderRadius: '50%',
			textAlign: 'center',
			backgroundColor: '#ff4d4d'
		}

		const svgStyle = {
			position: 'relative',
			color: '#fdfdfd',
			top: '1px',
			left: '0px'
		}
		return(
			<Col lg={lgCol} md={mdCol} sm={smCol} xs={xsCol} className={colClass}>
				<Card className={brCard} style={styleCard}>
					<CardHeader style={styleHeader}> 
						{tlCard}
						<div className='btn-toggle' style={styleBtn}>
							<span style={styleMin} onClick={this.toggleSlider}>
								<FontAwesomeIcon icon='minus' style={svgStyle}/> 
							</span> 
							<span style={styleClose} onClick={this.toggleDisplay}>
								<FontAwesomeIcon icon='times' style={svgStyle}/> 
							</span> 
						</div>
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