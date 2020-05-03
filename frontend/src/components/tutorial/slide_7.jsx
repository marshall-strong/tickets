import React from 'react';

const Slide7 = () => (
    <div className="slide-content">
        <div className="slide-text">Use <span className="form-label-slide">Priority</span> to indicate urgency.</div>
        <div className="slide-image-and-bullets">
            <div className="slide-image">
                <img src="priority.png" alt="ticket_priority" />
            </div>
            <div className="slide-bullets">
                <div className="slide-bullet"><b className="bold">Low - </b>Default.</div>
                <div className="slide-bullet"><b className="bold">Medium - </b>Should be prioritized over tickets with low priority.</div>
                <div className="slide-bullet"><b className="bold">High - </b>Urgent. Should be prioritized over tickets with medium priority.</div>
                <div className="slide-bullet"><b className="bold">CATastrophic - </b>Something is terribly broken. Drop everything and fix it.</div>
            </div>
        </div>
    </div>
);

export default Slide7;