import React from 'react';
import PrioritySelect from './priority_select';
import StatusSelect from './status_select';
import Star from './star';
import Subscribed from './subscribed';
import Owner from './owner';
import Number from './number';
import Tags from './tags';

const Form = ({ ticket, type, errors, currentUser, state, update, updateFromSuggestion, handleSubmit, updateUser, createTag }) => {
return(
    <form className="form">
        <div className="form-row">
            <Number ticket={ticket} />
            <button
                onClick={handleSubmit}
                className="btn1 save not-edited"
                id="ticket-submit-button"
            >
                {type === "new" ? "Create" : "Save"}
            </button>
        </div>
        <div className="ticket-errors">
            <p>{errors.title}</p>
        </div>
        <div className="form-row">
            <div className="label">Title</div>

            <input
                className={`${type} title ${state.ticket.status === 'Closed' ? 'closed' : null}`}
                type="text"
                placeholder="title"
                value={state.ticket.title}
                onChange={update("title")}
            />
            <Star
                currentUser={currentUser}
                updateUser={updateUser}
                ticket={ticket}
            />
        </div>
        <div className="selectors form-row">
            <div className="label">Status</div>
            <StatusSelect
                type={type}
                status={state.ticket.status}
                update={update}
            />
            <div className="label">Owner</div>
            <Owner
                currentUser={currentUser} 
                owner={state.ticket.owner}
                updateFromSuggestion={updateFromSuggestion}
            />
            <div className="label">Priority</div>
            <PrioritySelect
                type={type}
                priority={state.ticket.priority}
                update={update}
            />
        </div>
        <div className="ticket-errors">
            <p>{errors.date}</p>
        </div>
        <div className="form-row sched">
            <div className="label">
                Schedule
            </div>
            <div className="schedule">
                Start<br />Date
                <input
                    className={type}
                    type="date"
                    value={state.ticket.startDate}
                    onChange={update("startDate")}
                />
                End<br />Date
                <input
                    className={type}
                    type="date"
                    value={state.ticket.endDate}
                    onChange={update("endDate")}
                />
            </div>
        </div>
        <div className="form-row col">
            <div className="label">Body</div>
            <textarea
                className={`${type} body margin`}
                cols="30"
                rows="10"
                value={state.ticket.body}
                placeholder="body"
                onChange={update("body")}
            ></textarea>
        </div>
        <div className="form-row col subscribed-folder">
            <div className="label">
                Subscribed
            </div>
            <Subscribed
                updateFromSuggestion={updateFromSuggestion}
                subscribed={state.ticket.subscribed}
            />
        </div>
        <div className="form-row col">
            <div className="label">
                Tags
            </div>
            <Tags 
                updateFromSuggestion={updateFromSuggestion}
                tags={state.ticket.tags}
                createTag={createTag}
                currentUser={currentUser}
            />
        </div>
        {/* <input
            className={`${type} depends-on margin`}
            type="text"
            placeholder="depends on"
            onChange={update("dependsOn")}
        />
        <input
            className={`${type} blocks margin`}
            type="text"
            value={state.ticket.blocks}
            placeholder="blocks"
            onChange={update("blocks")}
        /> */}
    </form>
)};

export default Form;