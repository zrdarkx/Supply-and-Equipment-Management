import { HiMenu } from "react-icons/hi";
import SemTitle from "./semTitle";
import { useSemStore } from "../zustand/store";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { Tooltip } from "flowbite-react";

const DashboardHeader = ({ handleOpenSidebar }) => {
  const { currentUser } = useSemStore();

  return (
    <div className="header-wrapper flex items-center justify-between p-8 lg:mx-10">
      <HiMenu
        className="cursor-pointer"
        onClick={handleOpenSidebar}
        size={30}
        color="white"
      />
      <div className="user-wrapper  flex-row flex items-center">
        <div className="wrapper mr-10">
          <p className="text-blue-500 text-xs lg:text-sm">Logged in as</p>
          <h1 className="text-white text-sm lg:text-xl">
            {currentUser?.firstName} {currentUser?.lastName} -{" "}
            <span className="font-bold">{currentUser?.role}</span>
          </h1>
        </div>
        <Tooltip content={`Email used: ${currentUser?.email}`}>
          <FaUserCircle size={30} color="white" />
        </Tooltip>
      </div>
    </div>
  );
};

export default DashboardHeader;
