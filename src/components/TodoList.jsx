import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function TodoList() {
  const todos = useSelector((state) => {
    return state.todos;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <h1>진행중</h1>
      {todos
        .filter((todo) => todo.isDone === false)
        .map((todo) => {
          return (
            <div style={{ padding: "10px", border: "1px solid black" }}>
              제목: {todo.title}
              <br />
              내용: {todo.body}
              <br />
              <button
                onClick={() => {
                  navigate(`/${todo.id}`);
                }}
              >
                상세페이지
              </button>
              <button
                onClick={() => {
                  dispatch({
                    type: "DELETE_TODO",
                    payload: todo.id,
                  });
                }}
              >
                삭제하기
              </button>
              <button
                onClick={() => {
                  dispatch({
                    type: "SWITCH_TODO",
                    payload: todo.id,
                  });
                }}
              >
                완료하기
              </button>
            </div>
          );
        })}
      <h1>완료</h1>
      {todos
        .filter((todo) => todo.isDone === true)
        .map((todo) => {
          return (
            <div style={{ padding: "10px", border: "1px solid black" }}>
              제목: {todo.title}
              <br />
              내용: {todo.body}
              <br />
              <button
                onClick={() => {
                  navigate(`/${todo.id}`);
                }}
              >
                상세페이지
              </button>
              <button
                onClick={() => {
                  dispatch({
                    type: "DELETE_TODO",
                    payload: todo.id,
                  });
                }}
              >
                삭제하기
              </button>
              <button
                onClick={() => {
                  dispatch({
                    type: "SWITCH_TODO",
                    payload: todo.id,
                  });
                }}
              >
                취소하기
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default TodoList;
