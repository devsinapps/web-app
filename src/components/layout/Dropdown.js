import React from 'react'

//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Dropdown extends React.Component{
	state = {
		isExpanded: false
	}

	toggleDropdown = () => {
		this.setState({
			isExpanded: !this.state.isExpanded,
			height: this.refs.inner.clientHeight
		})
	}
	render(){
		const { title, children } = this.props
		const { isExpanded, height } = this.state
		const currentHeight = isExpanded ? height : '0';
		const activeClass = isExpanded ? 'active' : '';
		const styleDropdown = {
			overflow: 'hidden',
			transition: 'all .2s',
			height: currentHeight + 'px'
		}
		return(
			<div className='Dropdown-nav'>
				<li onClick={this.toggleDropdown} className={'Dropdown-li-title'+ ' ' + activeClass}> 
					<span> {title} </span> 
					<FontAwesomeIcon icon='angle-right' className={'Dropdown-icon'  + ' ' + activeClass}/>
				</li>
				<div className='Dropdown-menu' style={styleDropdown}>
					<div className='Menu' ref='inner'>
						{children}
					</div>
				</div>
			</div>
		)
	}
}

export default Dropdown