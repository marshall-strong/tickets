import React from 'react';
import TicketQuery from './ticket_query/ticket_query';
import TicketTableContainer from './ticket_table/ticket_table_container';
import './ticket_index.css';

const TicketIndex = () => {
  return (
    <div className="ticket-index-container">
      <TicketQuery />
      <TicketTableContainer />
    </div>
  );
};

export default TicketIndex;