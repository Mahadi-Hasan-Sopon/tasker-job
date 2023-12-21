import ContentBox from "../../utils/ContentBox";
import BannerImage from "../../assets/TaskManagement-hero.webp";
import { Button } from "antd";

const Home = () => {
  return (
    <div>
      <ContentBox>
        <div className="flex flex-col items-center justify-center w-full py-10 bg-gradient-to-b from-sky-50 to-white mt-1">
          <img className="w-full" src={BannerImage} alt="Banner Image" />
          <h1 className="text-3xl md:text-5xl font-bold text-center mt-10 text-slate-800">
            Manage tasks in one shared space
          </h1>
          <p className="text-xl font-medium my-4 md:max-w-3xl text-slate-700 text-center">
            Say goodbye to sticky notes and to-do lists: Tasker allows teams of
            any size to easily manage tasks and hit deadlines - all without ever
            leaving the app.
          </p>
          <Button type="primary" size="large" className="mt-4 bg-blue-500">
            Get Started with Tasker
          </Button>
        </div>
      </ContentBox>
    </div>
  );
};

export default Home;
