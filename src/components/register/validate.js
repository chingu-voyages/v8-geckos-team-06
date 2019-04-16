const validate = values => {
	const errors = {};
	if (!values.name) {
		errors.name = "Name is required"
	} else if (values.name.length > 15) {
		errors.name = "Must be 15 characters or less"
	} else if (!values.email) {
		errors.email = "The email is required"
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = "Invalid email adress"
	} else if (!values.password) {
		errors.password = "The password is required"
	} else if (!values.ConfirmPassword) {
		errors.ConfirmPassword = "You need to confirm the password"
	} else if (!values.Terms) {
		errors.Terms = 'You need to accept the Terms and Conditions'
	}
	return errors;
}

export default validate;