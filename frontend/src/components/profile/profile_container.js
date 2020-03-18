import { connect } from "react-redux"
import Profile from "./profile"


const mSTP = (state) => ({
    users: state.entities.users,
    comments: Object.values(state.entities.comments),
    tickets: Object.values(state.entities.tickets)
})



export default connect(mSTP, null)(Profile);