import { Layout } from "./Layout/Layout";
import { ActivityBar } from "./ActivityBar/ActivityBar";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/TaskList";

export const App = () => {
  return (
    <Layout>
      <ActivityBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
