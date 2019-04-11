const validate = values => {
	const errors = {}
	if (!values.email) {
		errors.email = "Email is Required"
	} else if (!values.password) {
			errors.password = "The Password is required"
	}
	return errors
}
export default validate;