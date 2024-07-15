import { Drawer, Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiFolder,
  HiInbox,
  HiLogout,
  HiOutlineServer,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import SemTitle from "./semTitle";

const SemSidebar = ({ isOpen, handleClose }) => {
  return (
    <Drawer open={isOpen} onClose={handleClose}>
      <SemTitle title={"Menu"} color={"black"} />

      <Drawer.Items className="mt-5">
        <Sidebar>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiOutlineServer}>
                Transaction
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiFolder}>
                Records
              </Sidebar.Item>

              <Sidebar.Item href="login" icon={HiLogout}>
                Logout
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </Drawer.Items>
    </Drawer>
  );
};

export default SemSidebar;
