import axios from 'axios';

class MhubApi {
	constuctor(props) {
		this.axios = axios.create({
			baseURL: '/people/api'
		})
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
		 "password": values.password,
		 "email": values.email
		})
		.then( response => response.data)
		.catch( (error)=> {console.log(error)})
		)
}