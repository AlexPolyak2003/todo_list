import React from "react";
import styles from "./Panel.module.scss";
import Button from "../Button/Btn";
import { Todo } from "../../../src/index";
import { useTodo } from "../../utils";

const DEFAULT_TODO = {
  name: "",
  description: "",
};

interface AddTodoPanelProps {
  mode: "add";
  // addTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
}

interface EditTodoPanelProps {
  mode: "edit";
  editTodo: Omit<Todo, "id" | "checked">;
  // changeTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
}

type TodoPanelProps = AddTodoPanelProps | EditTodoPanelProps;

const ToDoPanel: React.FC<TodoPanelProps> = (props) => {
  const { changeTodo, addTodo } = useTodo();
  const isEdit = props.mode === "edit";
  const [todo, setTodo] = React.useState(
    isEdit ? props.editTodo : DEFAULT_TODO
  );
  console.log(todo);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onClick = () => {
    const todoItem = { name: todo.name, description: todo.description };

    if (isEdit) {
      return changeTodo(todoItem);
    }
    addTodo(todoItem);

    setTodo(DEFAULT_TODO);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.todo_panel_container}>
          <div className={styles.fields_container}>
            <div className={styles.field_container}>
              <label htmlFor="name">
                <div>name</div>
                <input
                  type="text"
                  id="name"
                  value={todo.name}
                  name="name"
                  onChange={onChange}
                />
              </label>
            </div>
            <div className={styles.field_container}>
              <label htmlFor="description">
                <div>description</div>
                <input
                  type="text"
                  id="name"
                  value={todo.description}
                  name="description"
                  onChange={onChange}
                />
              </label>
            </div>
          </div>
          <div className={styles.button_container}>
            {!isEdit && (
              <Button onClick={onClick} color="blue">
                ADD
              </Button>
            )}

            {isEdit && (
              <Button onClick={onClick} color="orange">
                Edit
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoPanel;
