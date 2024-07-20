import { useState } from "react";
import DashboardHeader from "../components/dashboardHeader";
import SemSidebar from "../components/semSidebar";

const DashboardLayout = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-slate-950 pb-10">
      <SemSidebar isOpen={isOpen} handleClose={() => setOpen(false)} />
      <DashboardHeader handleOpenSidebar={() => setOpen(true)} />
      <div className="w-full px-10">{children}</div>
    </div>
  );
};

export default DashboardLayout;
