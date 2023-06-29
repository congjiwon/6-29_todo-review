import React from "react";
const initialState = [];

function comment(state = initialState, action) {
  switch (action.type) {
    case "COMMENT_ADD":
      return [...state, action.payload];
    case "COMMENT_DELETE":
      return state.filter((comment) => comment.id !== action.payload);
    default:
      return state;
  }
}

export default comment;
