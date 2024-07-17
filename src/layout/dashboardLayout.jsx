import { useState } from "react";
import DashboardHeader from "../components/dashboardHeader";
import SemSidebar from "../components/semSidebar";

const DashboardLayout = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-slate-950">
      <SemSidebar isOpen={isOpen} handleClose={() => setOpen(false)} />
      <DashboardHeader handleOpenSidebar={() => setOpen(true)} />
      <div className="container mx-auto min-h-96 w-5/6 bg-slate-800 rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
