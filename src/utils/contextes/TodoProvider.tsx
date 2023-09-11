import React from "react";
import { TodoContext } from "./TodoContext";
import { Todo } from "../../../src/types";

interface TodoProviderProps {
  children: React.ReactNode;
}

const DEFAULT_TODO_LIST = [
  { id: 1, name: "task 1", description: "description 1", checked: false },
  { id: 2, name: "task 2", description: "description 2", checked: false },
  {
    id: 3,
    name: "task 3",
    description:
      "so long task description 3 so long task description so long task description so long task description so long task description",
    checked: true,
  },
];

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todoIdForEdit, setTodoIdForEdit] = React.useState<number | null>(null);
  const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);

  const selectTodoForId = (id: Todo["id"]) => {
    setTodoIdForEdit(id);
  };

  // const addTodo = ({ name, description }: Omit<Todo, "id" | "checked">) => {

  //   setTodos([
  //     ...todos,
  //     { id: todos[todos.length - 1].id + 1, description, name, checked: false },
  //   ]);
  // };

  const addTodo = ({ name, description }: Omit<Todo, "id" | "checked">) => {
    const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

    setTodos([...todos, { id, description, name, checked: false }]);
  };

  const checkTodo = (id: Todo["id"]) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id: Todo["id"]) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const changeTodo = ({ name, description }: Omit<Todo, "id" | "checked">) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoIdForEdit) {
          return { ...todo, name, description };
        }
        return todo;
      })
    );
    setTodoIdForEdit(null);
  };

  const value = React.useMemo(
    () => ({
      todoIdForEdit,
      todos,
      deleteTodo,
      changeTodo,
      checkTodo,
      addTodo,
      selectTodoForId,
    }),
    [
      todos,
      deleteTodo,
      changeTodo,
      checkTodo,
      addTodo,
      selectTodoForId,
      todoIdForEdit,
    ]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
