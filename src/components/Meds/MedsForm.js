import React from 'react'
import { reduxForm, Field, SubmissionError } from 'redux-form'
import { addMed } from '../../actions'
import validate from './validate'


const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <input className="form-input" { ...input } placeholder={ label } type={ type }/>
    	<div className="invalid">
      		{ touched && error && <span style={{ color:'red' }}>{ error }</span>}
      	</div>
    </div>
)

// const Checkbox = ({ input, meta: { touched, error} }) => (
// 		<div className="tos-container" style={{border: touched && error ? "1px solid darkred" : "none", borderRadius: '10px', padding:'4px'}}>
// 			<input className="tos" type="checkbox" {...input} />
// 			<label>Terms and Conditions</label>
// 			{touched && error ? <p style={{ color: touched && error ? 'darkred' : 'transparent'}}>{error}</p> : null}
// 		</div>
// 	)

let MedsForm = ({ handleSubmit, submitSucceeded, pristine, reset, submitting, error }) =>
 (
	<div>
        {/* `NOTA: TOQUE UN TOQUE EL WIDTH FORM  */}
    <form onSubmit={ handleSubmit } autoComplete="off" style={{width:'50%'}}>
      <div className="meds-form">
        <div className="">
          <label htmlFor="manufacturer" >Manufacturer</label>
            <Field name="manufacturer" component={ renderField } required type="text"  />
          </div>
          <div className="">
            <label htmlFor="comercialName">Comercial Name</label>
            <Field name="comercialName" component={ renderField } type="text" />
          </div>
           <div className="">
            <label htmlFor="drugName">Drug Name</label>
            <Field name="name" component={ renderField } type="text" />
          </div>
          <div className="">
            <label htmlFor="dosage">Drug Dosage</label>
            <Field name="dosage" component={ renderField } type="number" />
          </div>
          <div className="">
            <label htmlFor="units">Drug Units</label>
            <Field name="units" component={ renderField } type="number" />
          </div>
          <div className="">
            <label htmlFor="expiration">Drug Expiration</label>
            <Field name="expiration" component={ renderField } type="date" />
          </div>
        </div>
        <div>
          { error && <strong style={{color:'darkred'}}>{ error }</strong> }
        </div>
        <br></br>
        <button type="submit" disabled={ pristine  || submitting } className={ pristine ? `register-btn btn-disabled` : `register-btn`}>Upload Med</button>
      </form>
    </div>
)
export default MedsForm = reduxForm({
	form: 'meds',
	validate,
	onSubmit: (values, dispatch) => {
		console.log('valores', values)
		return dispatch(addMed(values))
		.catch(err =>{
			throw new SubmissionError({
			_error: 'Upload Failed',
		})
		})
	}
})(MedsForm)
