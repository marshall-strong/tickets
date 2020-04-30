import { connect } from 'react-redux';
import { login, clearErrors, loginRandomUser} from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = state => ({
  errors: state.errors.session,
  session: state.session,
  currentUser: state.entities.users[state.session._id]
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
  loginRandomUser: () => dispatch(loginRandomUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
