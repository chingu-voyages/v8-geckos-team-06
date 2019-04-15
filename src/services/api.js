import axios from 'axios';

class MhubApi {
	constuctor(props) {
		this.axios = axios.create({
			baseURL: 'http://localhost:7600',
		});
	}

	login = ( values ) => console.log('values', values) || (
		this.axios.post('/auth', {
				"name": values.name,
 			"password": values.password
		}).then( response => response.data)
				.catch( () => (error) => {
					console.error(error);
				})
		);

	register = ( values ) => console.log('values', values) || (
		this.axios.post('/users', {
				"name": values.name,
			 "email": values.email,
			 "password": values.password,
			 "tos": values.tos,
			 "location": values.location
			})
		.then( response => response.data)
		.catch( (error)=> {console.log(error)})
		)
}
export default MhubApi;