import React from 'react';

const Slide13 = () => (
    <div className="slide-content">
        <div className="slide-text">View created tickets in <span className="folders-label-slide">Folders</span>, located in the left panel.</div>
        <div className="slide-image-and-bullets">
            <div className="slide-image">
                <img src="folders.png" alt="ticket_folders" />
            </div>
            <div className="slide-bullets">
                <div className="slide-bullet"><b className="bold">Owner - </b>Tickets that are assigned to you.</div>
                <div className="slide-bullet"><b className="bold">Subscribed - </b>Tickets to which you are subscribed.</div>
                <div className="slide-bullet"><b className="bold">Creator - </b>Tickets that you created.</div>
                <div className="slide-bullet"><b className="bold">Starred - </b>Tickets that you have starred.</div>
            </div>
        </div>
    </div>
);

export default Slide13;