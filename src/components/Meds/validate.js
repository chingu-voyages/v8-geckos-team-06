const validate = values => {
	const errors = {};
	if (!values.manufacturer) {
		errors.manufacturer = "Manufacturer is required"
	} else if (!values.comerCialName) {
		errors.comerCialName = "The name is required"
	} else if (!values.name) {
		errors.name = "The name is required"
	} else if (!values.dosage) {
		errors.dosage = "You need to describe the dosage"
	} else if (!values.units) {
		errors.units = "You need to describe the amount"
	} else if (!values.expiration) {
		errors.expiration = "You need to describe when is expiring"
	}
	return errors;
}

export default validate;