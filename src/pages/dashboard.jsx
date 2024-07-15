import { useState } from "react";
import DashboardHeader from "../components/dashboardHeader";
import { Drawer } from "flowbite-react";
import SemSidebar from "../components/semSidebar";

const Dashboard = () => {
  const [isOpen, setOpen] = useState(true);

  return (
    <div className="w-full min-h-screen bg-slate-950">
      <SemSidebar isOpen={isOpen} handleClose={() => setOpen(false)} />
      <DashboardHeader handleOpenSidebar={() => setOpen(true)} />
      <div className="container mx-auto min-h-96 w-5/6 bg-slate-800 rounded-lg"></div>
    </div>
  );
};

export default Dashboard;
