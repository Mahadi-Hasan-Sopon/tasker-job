import ContentBox from "../../utils/ContentBox";
import BannerImage from "../../assets/TaskManagement-hero.webp";
import Banner2 from "../../assets/Task_Management_Board2x.webp";
import ChecklistImage from "../../assets/Task_Management_-_Checklist2x.webp";
import ChecklistImage2 from "../../assets/Task_Management_-_Labels2x.webp";
import WaveImage from "../../assets/meister_wave_v2.svg";
import LeadImage from "../../assets/lead-magnet.svg";
import { Button, Col, Divider, Image, Row, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Home = () => {
  return (
    <div className="font-inter">
      <ContentBox>
        <div className="banner flex flex-col items-center justify-center w-full py-16 bg-gradient-to-b from-sky-50 to-white bg-white mt-1">
          <img className="w-full" src={BannerImage} alt="Banner Image" />

          <h1 className="text-3xl md:text-5xl font-bold text-center mt-10 text-slate-800">
            Manage tasks in one shared space
          </h1>
          <p className="text-xl font-medium my-4 md:max-w-3xl text-slate-600 text-center">
            Say goodbye to sticky notes and to-do lists: Tasker allows teams of
            any size to easily manage tasks and hit deadlines - all without ever
            leaving the app.
          </p>

          <Button type="primary" size="large" className="mt-4 bg-blue-500">
            <Link to="/login"> {"Let's Explore "} Tasker</Link>
          </Button>
        </div>
      </ContentBox>
      <ContentBox>
        <div className="text-center py-16 space-y-6">
          <Typography>
            <Title level={2}>Tasker is better than your best to-do list</Title>
          </Typography>
          <Image className="w-full max-w-full" width={"100%"} src={Banner2} />
        </div>
      </ContentBox>
      <ContentBox>
        <div className="text-center my-16 space-y-6">
          <Row>
            <Col md={20} lg={12}>
              <Title level={2} className="lg:text-left font-openSans">
                Tasker makes it easy to organize and track individual or team
                tasks in one place
              </Title>
            </Col>
          </Row>
          <Row gutter={{ sm: 6, md: 10, lg: 50 }} className="py-10">
            <Col md={12} className="space-y-6 items-center">
              <div className="flex flex-col justify-center h-full space-y-8 md:w-9/12">
                <Title level={2} className="lg:text-left font-inter">
                  Assign tasks and manage deadlines
                </Title>
                <Divider />
                <p className="text-xl text-left font-openSans">
                  {"Tasker’s"} advanced checklists give you the power to add
                  more context to your tasks by assigning team members and due
                  dates to checklist items, increasing visibility and keeping
                  your team accountable.
                </p>
                <Button
                  type="default"
                  size="large"
                  shape="default"
                  className="border-blue-500 mt-4 font-openSans"
                >
                  Check out advanced checklists
                </Button>
              </div>
            </Col>
            <Col md={12} className="mt-10 md:mt-2">
              <Image className="w-full h-full" src={ChecklistImage}></Image>
            </Col>
          </Row>
          <Row gutter={{ sm: 6, md: 10, lg: 50 }} className="py-10">
            <Col md={12} className="mt-10 md:mt-2">
              <Image className="w-full h-full" src={ChecklistImage2}></Image>
            </Col>
            <Col md={12} className="space-y-6 items-center">
              <div className="flex justify-center flex-col h-full space-y-8 w-9/12 ms-auto">
                <Title level={2} className="lg:text-left font-inter">
                  Prioritize tasks and keep your team aligned
                </Title>
                <Divider />
                <p className="text-xl text-left font-openSans">
                  Prioritize with labels to identify what is high, medium, or
                  low priority and bring an extra layer of shared understanding
                  to your tasks. You can even filter by a certain label to only
                  view cards associated with the label you want to view.
                </p>
                <Button
                  type="default"
                  size="large"
                  shape="default"
                  className="border-blue-500 mt-4 font-openSans"
                >
                  Learn how to label
                </Button>
              </div>
            </Col>
          </Row>
          <Row gutter={{ sm: 6, md: 10, lg: 50 }} className="py-10">
            <Col md={12} className="space-y-6 items-center">
              <div className="flex flex-col justify-center h-full space-y-8 md:w-9/12">
                <Title level={2} className="lg:text-left font-inter">
                  Bring a fresh perspective to the task at hand (pun intended)
                  with Calendar View
                </Title>
                <Divider />
                <p className="text-xl text-left font-openSans">
                  Visualize checklist items and cards with due dates in Calendar
                  View, showing what tasks are due in the days and weeks ahead.
                  Cards will be arranged according to their due date and will
                  display any labels, members, or checklists added to them.
                </p>
                <Button
                  type="default"
                  size="large"
                  shape="default"
                  className="border-blue-500 mt-4 font-openSans"
                >
                  Learn about Views
                </Button>
              </div>
            </Col>
            <Col md={12} className="mt-10 md:mt-2">
              <Image className="w-full h-full" src={ChecklistImage}></Image>
            </Col>
          </Row>
        </div>
      </ContentBox>
      <div className="relative py-10">
        <ContentBox>
          <p className="text-2xl my-4 text-slate-500 font-medium text-center">
            The Need for Task Management
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            {"It’s"} Time to Get Organized.
          </h2>
          <p className="text-xl mt-8 text-slate-500 text-center">
            Task management is the link between planning to do something and
            getting it done. Your task management software should provide an
            overview of work in progress that enables tracking from conception
            to completion. Enter MeisterTask: join teams everywhere who use our
            Kanban-style project boards to digitalize workflows and gain a clear
            overview of task progress. {"Let's"} get organized together!
          </p>
        </ContentBox>
        <img
          className="w-full -mt-[calc(10vw-50px)] z-0"
          src={WaveImage}
          alt=""
        />
      </div>
      <ContentBox>
        <div>
          <Row gutter={{ sm: 6, md: 10, lg: 50 }} className="py-10">
            <Col md={12} className="mt-10 md:mt-2">
              <Image className="w-full h-full" src={LeadImage}></Image>
            </Col>
            <Col md={12} className="space-y-6 items-center">
              <div className="flex justify-center flex-col h-full space-y-8 w-10/12 ms-auto">
                <p className="text-2xl text-slate-500 font-medium">
                  Get to Know Task Management
                </p>
                <h2 className="text-3xl md:text-5xl font-bold">
                  Talk to a Productivity Expert.
                </h2>
                <p className="text-xl mt-8 text-slate-500">
                  Good work {"doesn’t"} need to be hard work. Task management
                  removes the stress from organization, helping your team focus
                  on what matters. Book a free consultation with a Meister
                  productivity expert {"– you’ll"} soon get your {"team’s"}{" "}
                  tasks in order.
                </p>
                <Button
                  type="default"
                  size="large"
                  shape="default"
                  className="border-blue-500 mt-4 font-openSans"
                >
                  Book Now
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </ContentBox>
    </div>
  );
};

export default Home;
