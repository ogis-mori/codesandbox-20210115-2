import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="ToDoを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTodo</p>
        <ul>
          <div>
            <li>あああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div>
            <li>いいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div>
        <p>完了のTodo</p>
        <ul>
          <div>
            <li>ううう</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
