import { HiMenu } from "react-icons/hi";
import SemTitle from "./semTitle";

const DashboardHeader = ({ handleOpenSidebar }) => {
  return (
    <div className="header-wrapper flex items-center justify-between p-8">
      <HiMenu
        className="cursor-pointer"
        onClick={handleOpenSidebar}
        size={30}
        color="white"
      />
      <SemTitle color={"white"} title={"Dashboard"} />
    </div>
  );
};

export default DashboardHeader;
