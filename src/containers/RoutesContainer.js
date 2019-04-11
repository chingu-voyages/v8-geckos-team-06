import { connect } from 'react-redux'
import { getisLogged } from '../selectors'
import Routes from '../components/Routes/Routes'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
	isLogged: getisLogged(state)
})

export default withRouter(connect(mapStateToProps)(Routes))