import { Drawer, Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiFolder,
  HiInbox,
  HiLogout,
  HiOfficeBuilding,
  HiOutlineServer,
  HiOutlineTable,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
  HiViewGrid,
} from "react-icons/hi";
import SemTitle from "./semTitle";
import { Link } from "react-router-dom";
import { HiReceiptPercent } from "react-icons/hi2";

const SemSidebar = ({ isOpen, handleClose }) => {
  return (
    <Drawer open={isOpen} onClose={handleClose}>
      <SemTitle title={"Menu"} color={"black"} />

      <Drawer.Items className="mt-5">
        <Sidebar>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Link to={"/transaction"}>
                <Sidebar.Item className="my-3" icon={HiOutlineServer}>
                  Transaction
                </Sidebar.Item>
              </Link>
              <Link to={"/master-records"}>
                <Sidebar.Item className="my-3" icon={HiFolder}>
                  Master Records
                </Sidebar.Item>
              </Link>

              <Link to={"/login"}>
                <Sidebar.Item href="login" icon={HiLogout}>
                  Logout
                </Sidebar.Item>
              </Link>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </Drawer.Items>
    </Drawer>
  );
};

export default SemSidebar;
