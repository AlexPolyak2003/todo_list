import React from "react";
import { ToDoItem } from "./ToDoItem/ToDoItem";
import { Todo } from "../../../src/index";
import ToDoPanel from "../ToDoPanel/Panel";
import { useTodo } from "../../utils";

export const ToDoList: React.FC = () => {
  const { todos, todoIdForEdit, checkTodo, deleteTodo, selectTodoForId } =
    useTodo();

  return (
    <div>
      {todos.map((todo) => {
        if (todo.id === todoIdForEdit)
          return (
            <ToDoPanel
              key={todo.id}
              mode="edit"
              editTodo={{ name: todo.name, description: todo.description }}
            />
          );
        return (
          <ToDoItem
            key={todo.id}
            todo={todo}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
            selecTodoIdForEdit={selectTodoForId}
          />
        );
      })}
    </div>
  );
};
