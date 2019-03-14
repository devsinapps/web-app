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
		const style = {
			styleCard: {
				display: currentDisplay
			},
			styleHeader: {
				position: 'relative',
				height: '50px'
			},
			styleBody: {
				overflow: 'hidden',
				transition: 'all .2s',
				opacity: currentOpacity,
				height: currentHeight + 'px'
			},
			styleBtn: {
				position: 'absolute',
				right: '8px',
				top: '10px'
			},
			styleMin: {
				cursor: 'pointer',
				height: '10px',
				width: '10px',
				marginRight: '5px',
				fontSize: '10px',
				padding: '2px',
				borderRadius: '50%',
				textAlign: 'center',
				backgroundColor: '#3ae374'
			},
			styleClose: {
				cursor: 'pointer',
				height: '10px',
				width: '10px',
				marginRight: '5px',
				fontSize: '10px',
				padding: '2px',
				borderRadius: '50%',
				textAlign: 'center',
				backgroundColor: '#ff4d4d'
			},
			svgStyle: {
				position: 'relative',
				color: '#fdfdfd',
				top: '1px',
				left: '0px'
			}
		}
		const viewHeader = tlCard === '' ? 
		null 
		: 
		(
			<CardHeader style={style.styleHeader}> 
				{tlCard}
				<div className='btn-toggle' style={style.styleBtn}>
					<span style={style.styleMin} onClick={this.toggleSlider}>
						<FontAwesomeIcon icon='minus' style={style.svgStyle}/> 
					</span> 
					<span style={style.styleClose} onClick={this.toggleDisplay}>
						<FontAwesomeIcon icon='times' style={style.svgStyle}/> 
					</span> 
				</div>
			</CardHeader>
		)
		;
		return(
			<Col lg={lgCol} md={mdCol} sm={smCol} xs={xsCol} className={colClass}>
				<Card className={brCard} style={style.styleCard}>
					{viewHeader}
					<CardBody style={style.styleBody}>
						<div className='card-content' ref='inner'>
						{children}
						</div>
					</CardBody>
				</Card>
			</Col>
		)
	}
}