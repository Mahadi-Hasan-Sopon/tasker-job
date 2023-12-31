import { PlusOutlined } from "@ant-design/icons";
import { Helmet } from "react-helmet";
import TodoTable from "../../components/TodoTable";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Link, useLoaderData } from "react-router-dom";

const Dashboard = () => {
  const loadedTodos = useLoaderData();
  console.log(loadedTodos);

  return (
    <div>
      <Helmet>
        <title>Dashboard | Tasker</title>
      </Helmet>
      <div className="flex justify-between items-center gap-6 py-4">
        <h1 className="text-2xl font-semibold">Todo List</h1>
        <button className="bg-blue-500 text-white px-6 py-2.5 rounded-md hover:bg-blue-600">
          <Link
            to="/dashboard/todo/new"
            className="flex items-center justify-center gap-2"
          >
            <PlusOutlined className="text-xl block -mt-1" />
            <p className="font-medium text-lg">Create Todo</p>
          </Link>
        </button>
      </div>
      <DndProvider backend={HTML5Backend}>
        <TodoTable allTodos={loadedTodos} />
      </DndProvider>
    </div>
  );
};

export default Dashboard;
