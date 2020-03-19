import React from 'react';

class Ticket extends React.Component {
    constructor(props) {
        super(props)

        let { ticket } = this.props.ticket

        this.state = {
            updatedAt: ticket.updatedAt,
            tags: ticket.tags,
            subscribers: ticket.subscribers,
            owner: ticket.owner,
            title: ticket.title,
            body: ticket.body,
            lastUpdateSeenBy: ticket.lastUpdateSeenBy,
            updatedBy: ticket.updatedBy,
            status: ticket.status,
            priority: ticket.priority,
            dependsOn: ticket.dependsOn,
            blocks: ticket.blocks,
            startDate: ticket.startDate,
            endDate: ticket.endDate,
        }
    }

    componentDidMount() {
        if (this.props.id !== "new") this.props.getTicket(this.props.id)
    }

    view() {
        if (!this.state.lastUpdateSeenBy.includes(currentUser.id)) {
            this.state.lastUpdateSeenBy.push(currentUser.id)
            this.props.updateTicket(this.state)
        }
    }

    render() {

        
    }

}

export default TicketForm;