import React from "react";
import styles from "./Head.module.scss";
import { useTodo } from "../../utils";

const Header: React.FC = () => {
  const { todos } = useTodo();
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        ToDo List <b>{todos.length}</b> task (s)
      </div>
    </div>
  );
};

export default Header;
