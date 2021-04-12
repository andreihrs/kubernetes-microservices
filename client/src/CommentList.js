import React from "react";
import PropTypes from 'prop-types'

function CommentList({ comments }) {
  const renderComments = comments.map((comment) => {
    let content;

    if (comment.status === "approved") {
      content = comment.content;
    }

    if (comment.status === "pending") {
      content = "this content is awaiting moderation";
    }

    if (comment.status === "rejected") {
      content = "this comment has been rejected";
    }
    return <li key={comment.id}>{content}</li>;
  });

  return <div>{renderComments}</div>;
}

CommentList.propTypes = {
  comments: PropTypes.array
}

export default CommentList;
