import React from "react";
import { Todo } from "../../../../src/types";
import styles from "./ToDoItem.module.scss";
import Button from "../../Button/Btn";

interface TodoItemProps {
  todo: Todo;
  checkTodo: (id: Todo["id"]) => void;
  deleteTodo: (id: Todo["id"]) => void;
  selecTodoIdForEdit: (id: Todo["id"]) => void;
}

export const ToDoItem: React.FC<TodoItemProps> = ({
  todo,
  checkTodo,
  deleteTodo,
  selecTodoIdForEdit,
}) => {
  console.log(todo);
  return (
    <div className={styles.todo_item_container}>
      <div
        aria-hidden
        style={{
          opacity: todo.checked ? 0.5 : 1,
          textDecoration: todo.checked ? "line-through" : "none",
        }}
        onClick={() => checkTodo(todo.id)}
        className={styles.todo_item_title}
      >
        {todo.name}
      </div>
      <div className={styles.todo_item_description}>{todo.description}</div>

      <div className={styles.todo_item_button_container}>
        <Button color="orange" onClick={() => selecTodoIdForEdit(todo.id)}>
          EDIT
        </Button>
        <Button color="red" onClick={() => deleteTodo(todo.id)}>
          DELETE
        </Button>
      </div>
    </div>
  );
};
