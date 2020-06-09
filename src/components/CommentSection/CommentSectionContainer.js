// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = (props) => {
  // Add state for the comments
  const [customComments, setCustomComments] = useState([]);
  const submitComment = function (event) {
    return setCustomComments(customComments);
  };
  const changeComment = function (event) {
    return setCustomComments(customComments);
  };
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {props.comments.map(function (comment) {
        return <Comment key={props.postId} comment={comment} />;
      })}
      <CommentInput
        submitComment={submitComment}
        changeComment={changeComment}
      />
    </div>
  );
};

export default CommentSection;
