import { connect } from 'react-redux';
import { logout, loginDemoUser } from '../../actions/session_actions';

import NavBar from './navbar';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated,
    currentUser: state.entities.users[state.session.user]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    loginDemoUser: () => dispatch(loginDemoUser())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar)