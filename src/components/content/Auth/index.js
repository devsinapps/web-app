import React from 'react'
//Tools
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
//Container
import { ContainerRow, ColCard } from './../../grid/GridBootstrap'
//Reactstrap
import { Button } from 'reactstrap'
//Component
import SignIn from './SignIn'
import SignUp from './SignUp'
//Actions
import { signOut } from './../../../store/actions/authActions'
class Auth extends React.Component{
	state = {
		authCase: 1
	}

	signInCase = () => {
		this.setState({
			authCase: 1
		})
	}

	signUpCase = () => {
		this.setState({
			authCase: 2
		})
	}
	render(){
		const { authCase } = this.state
		const { auth } = this.props
		const authView = authCase === 1 ? <SignIn /> : <SignUp />;
		const btnSignOut = auth.uid != null ? 'block' : 'none';
		if(auth.uid != null) return <Redirect to='/'/>; 
		return(
			<div className='Auth'>
				<div className='text-center'>
					<Button onClick={this.signInCase}> Sign In </Button>{' '}
					<Button onClick={this.signUpCase}> Sign Up </Button>{' '}
				</div>
				<br />
				<ContainerRow>
					<ColCard lgCol='6' mdCol='6' smCol='6' xsCol='6' colClass='mx-auto' brCard='mb-3' tlCard=''>
						{authView}
					</ColCard>
				</ContainerRow>
				<div className='text-center' style={{display: btnSignOut}}>
					<Button onClick={this.props.signOut}> Sign Out </Button>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		signOut: () => dispatch(signOut())
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth)