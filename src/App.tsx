import "./App.css";
import Header from "./components/Header/Head";
import styles from "./App.module.scss";
import ToDoPanel from "./components/ToDoPanel/Panel";
import { ToDoList } from "./components/ToDoList/ToDoList";
import { TodoProvider } from "./utils";

const App = () => {
  return (
    <TodoProvider>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Header />
          <ToDoPanel mode="add" />
          <ToDoList />
        </div>
      </div>
    </TodoProvider>
  );
};
export default App;
