import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import Swal from "sweetalert2";
const initialTasks = [
  { _id: 1, name: "Task 1", status: "inprogress" },
  { _id: 2, name: "Task 2", status: "completed" },
  { _id: 3, name: "Task 3", status: "todo" },
  { _id: 4, name: "Task 4", status: "todo" },
];
/* eslint-disable react/prop-types */
const TodoTable = ({ allTodos }) => {
  const [tasks, setTasks] = useState(allTodos || initialTasks);
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const filteredTodos = tasks.filter((task) => task.status === "todo");

    const filteredInProgress = tasks.filter(
      (todo) => todo.status === "inprogress"
    );

    const filteredCompleted = tasks.filter(
      (todo) => todo.status === "completed"
    );

    setTodos(filteredTodos);
    setInProgress(filteredInProgress);
    setCompleted(filteredCompleted);
  }, [tasks]);

  const statuses = ["todo", "inprogress", "completed"];

  return (
    <div>
      <div className="tableHeader grid lg:grid-cols-2 xl:grid-cols-3 gap-2">
        {statuses.map((status, index) => (
          <Section
            key={index}
            status={status}
            tasks={tasks}
            setTasks={setTasks}
            todos={todos}
            inProgress={inProgress}
            completed={completed}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoTable;

const Section = ({ status, todos, inProgress, completed, tasks, setTasks }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item?.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  let text = "TODO";
  let bg = "bg-slate-500";
  let tasksToMap = todos;
  if (status === "inprogress") {
    text = "IN PROGRESS";
    bg = "bg-amber-500";
    tasksToMap = inProgress;
  } else if (status === "completed") {
    text = "COMPLETED";
    bg = "bg-green-500";
    tasksToMap = completed;
  }

  const addItemToSection = (id) => {
    // console.log("dropped item - ", id, status);
    setTasks((prevTasks) => {
      const modifiedTask = prevTasks.map((oneTask) => {
        if (oneTask._id === id) {
          return { ...oneTask, status: status };
        }
        return oneTask;
      });
      // console.log("modified task - ", modifiedTask);
      // update task status to db
      fetch(`https://tasker-job-backend.vercel.app/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: status }),
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.modifiedCount > 0) {
            Swal.fire({
              icon: "success",
              title: "Task updated successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${err?.message && err.message}. Please try again later.}`,
            footer: `<a href="/">Why do I have this issue?</a>`,
          });
          console.log(err);
        });
      console.log(`Task ${id} updated to ${status}`);

      // modified task
      return modifiedTask;
    });
  };

  return (
    <div
      ref={drop}
      className={`section rounded-md p-2 ${isOver ? "bg-slate-100" : ""}`}
    >
      <Header
        title={text}
        bg={bg}
        count={tasksToMap.length}
        tasksToMap={tasksToMap}
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
};

const Header = ({ title, bg, count, tasksToMap, tasks, setTasks }) => {
  return (
    <div className="task border border-slate-200 rounded-md p-2">
      <div
        className={` ${
          bg ? bg : "bg-slate-500"
        } flex justify-center items-center gap-2 text-white rounded-md w-full text-center py-2 px-3 uppercase`}
      >
        {title}
        {
          <span
            className={`${
              bg == "bg-green-500"
                ? "text-green-500"
                : bg == "bg-amber-500"
                ? "text-amber-500"
                : "text-slate-500"
            } text-xs w-5 h-5 bg-white rounded-full font-bold flex justify-center items-center`}
          >
            {count}
          </span>
        }
      </div>
      <div className="flex flex-col gap-2 rounded-md mt-2">
        {tasksToMap.map((task, index) => (
          <SingleTask
            key={index}
            singleTask={task}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </div>
    </div>
  );
};

const SingleTask = ({ singleTask, tasks, setTasks }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: singleTask?._id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleRemoveTask = () => {
    const filteredTasks = tasks.filter((task) => task._id !== singleTask._id);
    setTasks(filteredTasks);

    fetch(`https://tasker-job-backend.vercel.app/todos/${singleTask._id}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire("Deleted!", "Your task has been deleted.", "success", {
            time: 1000,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <li
      ref={drag}
      className={` ${
        isDragging ? "opacity-50" : "opacity-100"
      } w-full bg-slate-100 py-3 px-4 rounded-md flex justify-between items-center gap-4 cursor-grab`}
    >
      <span className="">{singleTask.todoTitle}</span>
      <div className="flex gap-3">
        <EditOutlined className="text-blue-500 cursor-pointer text-xl" />
        <DeleteOutlined
          className="text-red-500 cursor-pointer text-xl"
          onClick={handleRemoveTask}
        />
      </div>
    </li>
  );
};
