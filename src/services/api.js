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

		addingMed = async ( values ) => console.log('valuesMed: ', values) || (
				await this.axios.post('/meds', {
					"manufacturer": values.manufacturer,
					"comercialName": values.comercialName,
					"name": values.name,
					"dosage": values.dosage,
					"units": values.units,
					"expiration": values.expiration,
					"image": values.image,
					"owner": values.owner
				}, (err, medu) => {
					if (err) return console.log('error api', err);
					console.log('its uploaded: ', medu)
					return medu.data;
				})
)

getMeds = (token) => (
 this.axios.get('/meds', {
		headers: {
			"Authorization": "Bearer" + token
		}})
 	.then((response) => console.log('responseGETMEDS', response.data) || response.data)
 	.catch((error) => console.log(error))
	)


	checkUser = (userId , token) => console.log('User token coming from API: ', token) || (
		 this.axios.get(`/users/${userId}`, {
			headers: {
							"Authorization": "Bearer " + token
					}
				})
		.then(response => console.log('responsedUser:', response.data) || response.data
		).catch((error)=> console.log('error:', error)))
}
export default MhubApi;