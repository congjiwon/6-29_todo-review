import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";

function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        dispatch({
          type: "ADD_TODO",
          payload: {
            id: shortid.generate(),
            title,
            body,
            isDone: false,
          },
        });
        setTitle("");
        setBody("");
      }}
    >
      <input
        type="text"
        name="title"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      ></input>
      <input
        type="text"
        name="title"
        placeholder="내용을 입력하세요"
        value={body}
        onChange={(event) => {
          setBody(event.target.value);
        }}
      ></input>
      <button>추가</button>
    </form>
  );
}

export default Form;
