import React from 'react'
import { Redirect } from 'react-router-dom'
import { login } from '../../actions'

import { reduxForm, Field, SubmissionError } from 'redux-form'
import validate from './validate'

const renderField = ({ input, label, type, meta: { touched, error}}) => (
		<div>
			<div>
				 <input  {...input} placeholder={label}type={type}/>
				 <div style={{color: 'red'}}>
				 	{touched && error && <span>{error}</span>}
				 </div>
			</div>
		</div>
	)

let LoginForm = ({ handleSubmit, submitSucceeded, pristine, reset, submitting, error}) => 
submitSucceeded ? (
	<Redirect to="/dashboard" />
	) : (
			<div>
				<form onSubmit={handleSubmit} autoComplete="off">
					<div>
						<label htmlFor="email">Email</label>
						<Field name="email" component={renderField} type="email" placeholder="email" />
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<Field name="password" component={renderField} type="password" placeholder="password"/>
					</div>
					{error && <div className="alert alert-danger" role="alert">{error}</div>}
					<br/>
					<button type="submit" disabled={pristine || submitting} className="btn btn-outline-primary btn-lg">Log In</button>
				</form>
			</div>
	)

	export default LoginForm = reduxForm({
		form: 'login',
		validate,
		onSubmit: ( values, dispatch ) => {
			return dispatch( login(values)).catch(err => {
				throw new SubmissionError({
					_error: 'Login Failed',
					email: 'That email is not valid',
					password: 'Wrong Password, try again'
				})
			})
		}
	})(LoginForm)