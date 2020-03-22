import React from "react";
import ActivityIndexItem from "./ticket_activity_index_item";
import CommentIndexItem from "../comments/comment_index_item";

const TicketActivityIndex = ({ ticket }) => {
  let comments = ticket.comments;
  debugger
  let commentsArr = comments.map(comment => ({
    author: comment.author,
    time: comment.createdAt,
    body: comment.body
  }));

  let ticketsArr = ticket.updatedBy.map((actor, i) => ({
    actor: ticket.updatedBy[i],
    time: ticket.updatedAt[i]
  }));

  let feed = ticketsArr.concat(commentsArr);
  let sortedFeed = feed.sort((ele1, ele2) =>
    ele1.time < ele2.time ? 1 : ele1.time > ele2.time ? -1 : 0
  );

  let feedList = sortedFeed.map((feedItem, i) => {
    return (
      <ul>
        {feedItem.body ? 
          <CommentIndexItem comment={feedItem} />
         : 
          <ActivityIndexItem update={feedItem} />
        }
      </ul>
    );
  });

  return <div>{feedList}</div>;
};

export default TicketActivityIndex;
