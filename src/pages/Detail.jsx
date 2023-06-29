import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import shortid from "shortid";

function Detail() {
  const { id } = useParams();
  const todos = useSelector((state) => state.todos);
  const comments = useSelector((state) => state.comment);
  const todo = todos.filter((todo) => todo.id === id)[0];
  const filteredComment = comments.filter(
    (comment) => comment.pageid === todo.id
  );
  const [writer, setWriter] = useState("");
  const [comment, setComment] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(todo);
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
        }}
      >
        <p>{todo.title}</p>
        <p>{todo.body}</p>
        <p>{todo.id}</p>
        <p>{todo.isDone}</p>
        <button onClick={() => navigate("/")}>이전 화면으로</button>
      </div>
      <h3>댓글 입력하기 </h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch({
            type: "COMMENT_ADD",
            payload: {
              id: shortid.generate(),
              writer,
              comment,
              pageid: todo.id,
              password,
            },
          });
          setWriter("");
          setComment("");
          setPassword("");
        }}
      >
        작성자:
        <input
          placeholder="작성자명을 입력해주세요"
          value={writer}
          onChange={(event) => setWriter(event.target.value)}
          style={{
            marginRight: "20px",
          }}
        ></input>
        댓글 내용:
        <input
          style={{
            marginRight: "20px",
          }}
          placeholder="댓글 내용을 입력해주세요"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        ></input>
        비밀번호:
        <input
          style={{
            marginRight: "20px",
          }}
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button>입력</button>
      </form>
      <div>
        <h3>댓글 리스트</h3>
        {filteredComment.map((comment) => {
          return (
            <div>
              <span>{comment.writer}</span> - <span>{comment.comment}</span>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  dispatch({
                    type: "COMMENT_DELETE",
                    payload: comment.id,
                  });
                }}
              >
                삭제
              </button>
              <button>수정</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Detail;
