import React from 'react'
import { Redirect } from 'react-router-dom'
import { login } from '../../actions'

import { reduxForm, Field, SubmissionError } from 'redux-form'
import validate from './validate'
import { Link } from 'react-router-dom'

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
					<button type="submit" disabled={pristine || submitting} className={ pristine ? `login-btn btn-disabled` : `login-btn`} >Log In</button>
					<br></br>
					<br></br>
					<div className="form-links">
						<Link className="form-link" to="/">Home</Link>
					</div>
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
