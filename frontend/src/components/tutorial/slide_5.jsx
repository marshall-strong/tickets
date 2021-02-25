import React from "react";

const Slide5 = () => (
  <div className="slide-content">
    <div className="slide-text">
      Use <span className="form-label-slide">Status</span> to keep track of
      ticket progress.
    </div>
    <div className="slide-image-and-bullets">
      <div className="slide-image">
        <img src="status.png" alt="ticket_title" />
      </div>
      <div className="slide-bullets">
        <div className="slide-bullet">
          <b className="bold">No Progress - </b>Default.
        </div>
        <div className="slide-bullet">
          <b className="bold">Planned - </b>A plan has been made but is not yet
          in motion.
        </div>
        <div className="slide-bullet">
          <b className="bold">Blocked - </b>Some unplanned obstacle is blocking
          the ticket's progress.
        </div>
        <div className="slide-bullet">
          <b className="bold">In Progress - </b>Action items are being executed.
        </div>
        <div className="slide-bullet">
          <b className="bold">Closed - </b>Ticket is complete.
        </div>
      </div>
    </div>
  </div>
);

export default Slide5;
