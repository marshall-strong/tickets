import React from 'react';

class TicketForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            updatedAt: Date.now,
            tags: [],
            subscribers: [],
            owner: '',
            title: '',
            body: '',
            lastUpdateSeenBy: [],
            updatedBy: [],
            status: '',
            priority: '', 
            dependsOn: [],
            blocks: [],
            startDate: undefined,
            endDate: undefined
        }
    }

    componentDidMount() {
        if (this.props.ticketId !== 'new') {
            this.props.getTicket(this.props.ticketId)
            .then((ticket) => {
                this.setState({

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
                
                })
            })
        }
    }

    // view() {
    //     if (!this.state.lastUpdateSeenBy.includes(this.props.currentUser.id)) {
    //         this.state.lastUpdateSeenBy.push(this.props.currentUser.id)
    //         this.props.updateTicket(this.state)
    //     }
    // }

    render(){

        
        // if (this.props.ticketId !== 'new') {
        //     this.view();
        //     if (!this.props.ticket) return null
        // }
        
        return(
            <div className="form-container">
                newformcontainer
            </div>
        )
        
        
    }

}

export default TicketForm;