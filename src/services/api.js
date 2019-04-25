import axios from 'axios';

class MhubApi {
	constructor(props) {
		this.axios = axios.create({
			baseURL: 'http://localhost:7600',
				// headers: {
				// 	// 'Content-Type': 'multipart/form-data',
				// },
		});
	}
	login = ( values ) => console.log('values', values) || (
		this.axios.post('/auth', {
				"email": values.email,
 			"password": values.password
		}).then( response => response.data)
				.catch( () => (error) => {
					console.error(error);
				})
		);

	register = (values) =>  console.log( 'valuesFROMAPI', values) || (
		this.axios.post('/users', {
			"name": values.name,
			"email": values.email,
			"password": values.password,
			"confirmPassword": values.confirmPassword,
			"terms": values.terms
		})
		)
		.then( response => {console.log('Coming from server response.data: ', response.data)})
		.catch( (error)=> {console.log('error api: ', error)});
}
export default MhubApi;