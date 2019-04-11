import React from 'react'
import { Redirect } from 'react-router-dom'
import { register } from '../../actions'

import { reduxForm, Field, SubmissionError } from 'redux-form'
import validate from './validate'
import { Link } from 'react-router-dom'


const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div> 
		<input { ...input } placeholder={ label } type={ type }/>
    	<div>
      		{ touched && error && <span style={{ color:'red' }}>{ error }</span>}
      	</div>
    </div>
)

let RegisterForm = ({ handleSubmit, submitSucceeded, pristine, reset, submitting, error }) =>
submitSucceeded ? (
	<Redirect to="/login" />
	) : (
			<div>
			<form  onSubmit={ handleSubmit } autoComplete="off">
				 <div>
				 		<label htmlFor="name"  >Name</label>
						<Field name="name" component={ renderField } type="text"  />
				 
				 		<label htmlFor="email">Email</label>
						<Field name="email" component={ renderField } type="email" />
				
						<label htmlFor="password">Password</label>
						<Field name="password" component={ renderField } type="password"  required autoComplete="current-password" />
				 
						<label htmlFor="ConfirmPassword">Confirm Password</label>
						<Field name="ConfirmPassword" component={ renderField } type="password" required />
				 </div>
				 <div>
					 { error && <strong style={{color:'coral'}}>{ error }</strong> }
				 </div>
				 <br></br>
				<button type="submit" disabled={ pristine || submitting } className="btn btn-outline-primary btn-lg">Register</button>
			</form>
			<br></br>
			<div>
				<label htmlFor="Link" style={{color:'goldenrod'}}>already registered?</label>
				<br></br>
				<Link to='/login' className="btn btn-outline-alert btn-lg">Login</Link>
			</div>
		</div>
	)
	export default RegisterForm = reduxForm({
		form: 'register',
		validate,
		onSubmit: (values, dispatch) => {
			return dispatch(register(values)).catch(err =>{
				throw new SubmissionError({
				_error: 'Register Failed',
				password: 'Wrong Password',
				confirmPassword: 'Its not matching',
				email: 'Enter a valid Email please'
			})
			})
		}
	})(RegisterForm)