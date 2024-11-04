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
import { Link, useNavigate } from "react-router-dom";
import { HiReceiptPercent } from "react-icons/hi2";
import { useSemStore } from "../zustand/store";

const SemSidebar = ({ isOpen, handleClose }) => {
  const navigation = useNavigate();
  const { setCurrentUser } = useSemStore();

  return (
    <Drawer open={isOpen} onClose={handleClose}>
      {/* Logo */}
      <div className="flex justify-center mb-4">
        <img
          src="https://jn31a1.com/wp-content/uploads/2022/06/logo.png"
          alt="Logo"
          className="h-16"
        />
      </div>

      <SemTitle title={"Menú"} color={"black"} />

      <Drawer.Items className="mt-5">
        <Sidebar>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Link to={"/transaction"}>
                <Sidebar.Item className="my-3" icon={HiOutlineServer}>
                  Transacciones
                </Sidebar.Item>
              </Link>
              <Link to={"/master-records"}>
                <Sidebar.Item className="my-3" icon={HiFolder}>
                  Registros Maestros
                </Sidebar.Item>
              </Link>
              <Sidebar.Item
                onClick={() => {
                  localStorage.removeItem("user");
                  setCurrentUser(null);
                  navigation("/");
                }}
                icon={HiLogout}
              >
                Cerrar Sesión
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </Drawer.Items>
    </Drawer>
  );
};

export default SemSidebar;
