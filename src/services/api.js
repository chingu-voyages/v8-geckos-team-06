import axios from 'axios';

class MhubApi {
	constructor(props) {
		this.axios = axios.create({
			baseURL: 'http://localhost:7600',
		});
	}

	login = async ( values ) => console.log('values', values) || (
		await this.axios.post('/auth', {
				"email": values.email,
 			"password": values.password
		}).then( response => console.log('Login response: ', response.data) || response.data )
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

	checkUser = async (id , token ) => console.log('User Id coming from API: ', id) || (
		await this.axios.head(`/user/${id}`, {
			headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer" + token
					}
				})
		.then( response => response.data )
		).catch((error)=> console.log('error:', error) );
}	
export default MhubApi;