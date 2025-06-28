import "./App.css";
import MainDashboard from "./components/MainDashboard/MainDashboard";
import SideBar from "./components/SideBar/Sidebar";

function App() {
  const title = "Dashboard Overview";
  const subTitle = "Monitor your key metrics and performance indicators";

  return (
    <div className="flex min-h-screen overflow-y-hidden">
      <SideBar />
      <div className="h-screen w-full p-10 overflow-y-scroll">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h2 className="text-lg font-medium pt-2">{subTitle}</h2>
        <MainDashboard />
      </div>
    </div>
  );
}

export default App;
