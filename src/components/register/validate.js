const validate = values => {
	const errors = {};
	if (!values.name) {
		errors.name = "Name is required"
	} else if (!values.email) {
		errors.email = "The email is required"
	} else if (!values.password) {
		errors.password = "The password is required"
	} else if (!values.confirmPassword) {
		errors.confirmPassword = "You need to confirm the password"
	} else if (!values.tos) {
		errors.tos = 'You need to accept the Terms and Conditions'
	}
}

export default validate;