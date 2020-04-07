import React from 'react';
import { withRouter } from "react-router-dom";
import CommentsAndActivity from './comments_and_activity';
import Form from './form/form';
import '../app.css';
import './ticket_form.css';

class TicketForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedAt: [],
            tags: [],
            subscribed: [this.props.currentUser._id],
            owner: this.props.currentUser._id,
            title: '',
            body: '',
            lastUpdateSeenBy: [],
            updatedBy: [],
            status: 'No Progress',
            priority: 'Low', 
            dependsOn: [],
            blocks: [],
            startDate: '',
            endDate: '',
            creator: this.props.currentUser._id,
            copied: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentWillUnmount() {
        this.props.clearTicketErrors();
    };

    componentDidMount() {
        // in case of page refresh, fetch the current user to overwrite 
        // stale preloaded state from login and get updated starred list
        this.props.getOneUser(this.props.currentUser._id)
        if (this.props.ticketId !== 'new') {
            this.props.getTicket(this.props.ticketId)
            .then(ticket => {
                
                this.props.ticket.startDate = (
                    this.props.ticket.startDate ? 
                    this.props.ticket.startDate.slice(0,10) : ''
                );

                this.props.ticket.endDate = (
                    this.props.ticket.endDate ?
                    this.props.ticket.endDate.slice(0,10) : ''
                );

                this.setState(this.props.ticket)
            })
            .then(() => this.view());
        };
    };

    componentDidUpdate(prevProps) {
        if (this.props.ticketId !== prevProps.ticketId
            && this.props.ticketId === 'new') {
            this.setState({
                updatedAt: [],
                tags: [],
                subscribed: [this.props.currentUser._id],
                owner: this.props.currentUser._id,
                title: '',
                body: '',
                lastUpdateSeenBy: [],
                updatedBy: [],
                status: 'No Progress',
                priority: 'Low',
                dependsOn: [],
                blocks: [],
                startDate: '',
                endDate: '',
                creator: this.props.currentUser._id
            });
        };
    };

    view() {
        let viewerIds = this.props.ticket.lastUpdateSeenBy.map(viewer => viewer._id);
        if (!viewerIds.includes(this.props.currentUser._id)) {
            this.props.ticket.lastUpdateSeenBy.push(this.props.currentUser._id);
            this.props.updateTicket(this.props.ticket);
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        if (e.target.classList.contains('not-edited')) return null;
        this.state.updatedAt.unshift(Date.now());
        this.state.updatedBy.unshift(this.props.currentUser._id);
        this.setState({lastUpdateSeenBy: []});
        
        this.props.clearTicketErrors();
        
        if (this.props.ticketId !== "new") {
            this.props.updateTicket(this.state);
        } else {
            this.props.createTicket(this.state)
            .then(res => {
                if (res.errors) return null;
                this.setState(res.ticket);
                this.props.history.push(`${res.ticket._id}`);
            })
            .catch(err => console.log(err))
        }
        let edits = document.getElementsByClassName('edited')
        
        for (let i = 0; i < edits.length; i++) {
            edits[i].classList.add('not-edited')
        }
        for (let i = 0; i <= edits.length; i++) {
            edits[0].classList.remove('edited')
        }
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
            e.currentTarget.classList.add('edited');
            let button = document.getElementById('ticket-submit-button');
            button.classList.remove('not-edited')
            button.classList.add('edited')
        };
    }

    render(){
        if (this.props.ticketId !== 'new') {
            if (!this.props.ticket) return null;
        }

        const { currentUser, updateUser, ticket, errors } = this.props;

        this.update = this.update.bind(this);
        
        let type = this.props.ticketId === 'new' ? 'new' : 'show';
        
        return (
            <div className="outer-container">
                <div className="form-and-activity-container">
                    <Form 
                        ticket={ticket}
                        type={type}
                        errors={errors}
                        state={this.state}
                        update={this.update}
                        currentUser={currentUser}
                        setState={this.setState.bind(this)}
                        handleSubmit={this.handleSubmit}
                        updateUser={updateUser}
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

export default withRouter(TicketForm);