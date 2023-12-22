import { DatePicker, Radio } from "antd";
import { Helmet } from "react-helmet";

const CreateTodo = () => {
  const { RangePicker } = DatePicker;

  const onPriorityChange = ({ target: { value } }) => {
    console.log("radio checked", value);
  };

  return (
    <div className="py-6">
      <Helmet>
        <title>Tasker || Create Todo</title>
      </Helmet>
      <form className="bg-slate-100 py-4 md:py-10 px-4 md:px-10 rounded">
        <h1 className="text-3xl font-bold text-slate-700 text-center mb-6">
          Create New Todo
        </h1>
        <div className="grid">
          <div className="relative z-0 w-full mb-6 group">
            <label
              htmlFor="todoTitle"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Todo Title
            </label>
            <input
              name="todoTitle"
              type="text"
              id="todoTitle"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Shop Name"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <label
              htmlFor="deadline"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Todo Deadlines
            </label>
            <RangePicker
              name="deadline"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
            />
          </div>
          <div className="relative z-0 w-full group">
            <label
              htmlFor="priority"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Priority
            </label>
            <div className="flex items-center h-1/2 mb-4 md:mb-0">
              <Radio.Group
                options={[
                  { label: "Low", value: "low" },
                  { label: "Moderate", value: "moderate" },
                  { label: "High", value: "high" },
                ]}
                onChange={onPriorityChange}
              />
            </div>
          </div>
        </div>
        <div className="grid mt-2 md:mt-0">
          <div className="relative z-0 w-full mb-6 group">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Description
            </label>
            <textarea
              name="shopDescription"
              id="shopDescription"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Shop Description..."
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
