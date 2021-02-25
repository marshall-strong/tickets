import React from "react";
import { withRouter } from "react-router-dom";
import CommentsAndActivity from "./comments_and_activity/comments_and_activity";
import Form from "./form/form";
import "../app.css";
import "./ticket.css";

class Ticket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: this.props.ticketId === "new" ? false : true,
      ticket: this.props.ticket
        ? this.props.ticket
        : {
            creator: this.props.currentUser._id,
            title: "",
            owner: this.props.currentUser,
            status: "No Progress",
            priority: "Low",
            endDate: "",
            startDate: "",
            body: "",
            updatedAt: [],
            subscribed: [this.props.currentUser],
            tags: [],
            dependsOn: [],
            blocks: [],
            lastUpdateSeenBy: [],
            updatedBy: [],
          },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearTicketErrors();
  }

  componentDidMount() {
    // in case of page refresh, fetch the current user to overwrite
    // stale preloaded state from login and get updated starred list
    this.props.getOneUser(this.props.currentUser._id);
    // pull users and tags into state for autosuggest
    this.props.getOrgUsers(this.props.currentUser.orgHandle);
    this.props.getOrgTags(this.props.currentUser.orgHandle);
    if (this.props.ticketId !== "new") {
      if (!this.props.ticketId) return null;
      this.props
        .getTicket(this.props.ticketId)
        .then((ticket) => {
          // format date to play nice with input type="date"
          this.props.ticket.startDate = this.props.ticket.startDate
            ? this.props.ticket.startDate.slice(0, 10)
            : "";
          this.props.ticket.endDate = this.props.ticket.endDate
            ? this.props.ticket.endDate.slice(0, 10)
            : "";
          this.setState({ ticket: this.props.ticket, loading: false });
        })
        .then(() => this.view());
    }
  }

  componentDidUpdate(prevProps) {
    // clear fields when switching to new ticket
    if (!this.props.ticketId) return null;
    if (this.props.ticketId !== prevProps.ticketId) {
      this.setState({ loading: true });
      if (this.props.ticketId === "new") {
        this.setState(
          {
            ticket: {
              creator: this.props.currentUser._id,
              title: "",
              owner: this.props.currentUser,
              status: "No Progress",
              priority: "Low",
              startDate: "",
              endDate: "",
              body: "",
              subscribed: [this.props.currentUser],
              tags: [],
              dependsOn: [],
              blocks: [],
              updatedAt: [],
              lastUpdateSeenBy: [],
              updatedBy: [],
            },
          },
          () => this.setState({ loading: false })
        );
      } else {
        this.props
          .getTicket(this.props.ticketId)
          .then((action) => {
            // format date to play nice with input type="date"
            action.ticket.startDate = action.ticket.startDate
              ? action.ticket.startDate.slice(0, 10)
              : "";
            action.ticket.endDate = action.ticket.endDate
              ? action.ticket.endDate.slice(0, 10)
              : "";
            this.setState({ ticket: action.ticket, loading: false });
          })
          .then(() => this.view());
      }
    }
  }

  view() {
    let viewerIds = this.props.ticket.lastUpdateSeenBy.map(
      (viewer) => viewer._id
    );
    if (!viewerIds.includes(this.props.currentUser._id)) {
      this.props.ticket.lastUpdateSeenBy.push(this.props.currentUser._id);
      this.props.updateTicket(this.props.ticket);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (e.target.classList.contains("not-edited")) return null;
    this.state.ticket.updatedAt.unshift(Date.now());
    this.state.ticket.updatedBy.unshift(this.props.currentUser._id);
    this.setState({ ticket: this.state.ticket });

    this.props.clearTicketErrors();

    if (this.props.ticketId !== "new") {
      this.props
        .updateTicket(this.state.ticket)
        .then((res) => {
          if (res.errors) return null;
          this.reset();
          // this.setState();
        })
        .catch(() => {
          return null;
        });
    } else {
      this.props
        .createTicket(this.state.ticket)
        .then((res) => {
          if (res.errors) return null;
          this.setState({ ticket: res.ticket });
          this.props.history.push(`${res.ticket._id}`);
          this.reset();
        })
        .catch((err) => console.log(err));
    }
  }

  reset() {
    let edits = document.getElementsByClassName("edited");
    for (let i = 0; i < edits.length; i++) {
      edits[i].classList.add("not-edited");
    }
    let n = edits.length * 1;
    while (edits.length) {
      edits[0].classList.remove("edited");
    }
  }

  update(field) {
    return (e) => {
      // eslint-disable-next-line
      this.state.ticket[field] = e.currentTarget.value;
      this.setState({ ticket: this.state.ticket });
      e.currentTarget.classList.add("edited");
      let button = document.getElementById("ticket-submit-button");
      button.classList.remove("not-edited");
      button.classList.add("edited");
    };
  }

  updateFromSuggestion(field, value, target, e = null) {
    if (e) e.preventDefault();
    // eslint-disable-next-line
    this.state.ticket[field] = value;
    this.setState({ ticket: this.state.ticket });
    target.classList.add("edited");
    let button = document.getElementById("ticket-submit-button");
    button.classList.remove("not-edited");
    button.classList.add("edited");
  }

  render() {
    if (!this.props.ticketId) return null;
    const type = this.props.ticketId === "new" ? "new" : "show";
    if (type !== "new") {
      if (!this.props.ticket) return null;
    }
    if (this.state.loading || this.loading) return null;
    const { currentUser, updateUser, createTag, ticket, errors } = this.props;
    this.update = this.update.bind(this);
    this.updateFromSuggestion = this.updateFromSuggestion.bind(this);
    return (
      <div className="outer-container">
        <div className="form-and-activity-container">
          <Form
            ticket={ticket}
            type={type}
            errors={errors}
            currentUser={currentUser}
            updateUser={updateUser}
            createTag={createTag}
            state={this.state}
            setState={this.setState.bind(this)}
            update={this.update}
            updateFromSuggestion={this.updateFromSuggestion}
            handleSubmit={this.handleSubmit}
          />
          <CommentsAndActivity
            ticket={ticket}
            type={type}
            currentUser={currentUser}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Ticket);
