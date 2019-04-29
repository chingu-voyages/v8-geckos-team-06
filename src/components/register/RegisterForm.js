import React from 'react'
import { Redirect } from 'react-router-dom'
import { register } from '../../actions'
import './Register.css';
import { reduxForm, Field, SubmissionError } from 'redux-form'
import validate from './validate'
import { Link } from 'react-router-dom'


const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <input className="form-input" { ...input } placeholder={ label } type={ type }/>
    	<div className="invalid">
      		{ touched && error && <span style={{ color:'red' }}>{ error }</span>}
      	</div>
    </div>
)

const Checkbox = ({ input, meta: { touched, error} }) => (
		<div className="tos-container" style={{border: touched && error ? "1px solid darkred" : "none", borderRadius: '10px', padding:'4px'}}>
			<input className="tos" type="checkbox" {...input} />
			<label>Terms and Conditions</label>
			{touched && error ? <p style={{ color: touched && error ? 'darkred' : 'transparent'}}>{error}</p> : null}
		</div>
	)

let RegisterForm = ({ handleSubmit, submitSucceeded, pristine, reset, submitting, error }) =>
submitSucceeded ? (
	<Redirect to="/login" />
	) : (
			<div>
        <form onSubmit={ handleSubmit } autoComplete="off">
          <div className="register-form">

            <div className="input-container">
              <label htmlFor="name"  >Name</label>
              <Field name="name" component={ renderField } required type="text"  />
            </div>

            <div className="input-container">
              <label htmlFor="email">Email</label>
              <Field name="email" component={ renderField } type="email" />
            </div>

            <div className="input-container">
              <label htmlFor="password">Password</label>
              <Field name="password" component={ renderField } type="password"  required autoComplete="current-password" />
            </div>

            <div className="input-container">
              <label htmlFor="ConfirmPassword">Confirm Password</label>
              <Field name="confirmPassword" component={ renderField } type="password" required />
            </div>

            <div className="tos-container">
              <Field name="terms" component={ Checkbox } type="checkbox" required />
            </div>

          </div>
          <div>
            { error && <strong style={{color:'darkred'}}>{ error }</strong> }
          </div>
          <br></br>
          <button type="submit" disabled={ pristine  || submitting } className={ pristine ? `register-btn btn-disabled` : `register-btn`}>Register</button>
        </form>
        <br></br>
        <div className="form-links">
          <label htmlFor="Link" style={{color:'goldenrod'}}>already registered?</label>
          <br></br>
          <Link to='/login' className="form-link">Login</Link>
        </div>
        <br></br>
        <div className="form-links">
          <Link to="/" className="form-link">Home</Link>
        </div>
      </div>
	)
	export default RegisterForm = reduxForm({
		form: 'register',
		validate,
		onSubmit: (values, dispatch) => {
			console.log('valores', values)
			return dispatch(register(values))
			.catch(err =>{
				throw new SubmissionError({
				_error: 'Register Failed',
				password: 'Wrong Password',
				confirmPassword: 'Its not matching',
				email: 'Enter a valid Email please',
				Terms: 'Need to accept the Terms and Conditios'
			})
			})
		}
	})(RegisterForm)
