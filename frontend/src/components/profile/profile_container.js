import { fetchCreatedTickets} from "../../actions/ticket_actions"
import { fetchUserComments } from "../../actions/comment_actions"
import { withRouter } from "react-router-dom"
import { getOneUser, getOrgUsers } from "../../actions/user_actions"
import { connect } from "react-redux"
import Profile from "./profile"

const mSTP = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
        comments: Object.values(state.entities.comments),
        tickets: Object.values(state.entities.tickets),
        loggedIn: state.session.isAuthenticated,
        users: state.entities.users
    }
}

const mDTP = (dispatch) => {
    return {
        getOneUser: userId => dispatch(getOneUser(userId)),
        fetchCreatedTickets: (userId) => dispatch(fetchCreatedTickets(userId)),
        fetchUserComments: (userId) => dispatch(fetchUserComments(userId))
    }
}

export default withRouter(connect(mSTP, mDTP)(Profile))