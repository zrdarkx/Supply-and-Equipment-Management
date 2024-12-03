import { HiMenu, HiClipboardList } from "react-icons/hi";
import SemTitle from "./semTitle";
import { useSemStore } from "../zustand/store";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { Badge, Tooltip } from "flowbite-react";

const DashboardHeader = ({ handleOpenSidebar, setCartModal }) => {
  const { currentUser, cartSupply, cartEquipment } = useSemStore();
  const isAdmin = currentUser.role == "Admin";
  const totalCartLength = cartSupply.length + cartEquipment.length;
  return (
    <div className="header-wrapper flex items-center justify-between py-10 lg:mb-0 p-5 lg:p-8 lg:mx-10">
      <HiMenu
        className="cursor-pointer mr-5"
        onClick={handleOpenSidebar}
        size={30}
        color="black"
      />

      <div className="user-wrapper flex-row flex items-center">
        <div className="wrapper mr-10">
          <p className="text-blue-500 text-xs lg:text-sm">Conectado como</p>
          <h1 className="text-black text-sm lg:text-xl">
            {currentUser?.firstName} {currentUser?.lastName} -{" "}
            <span className="font-bold">{currentUser?.role}</span>{" "}
          </h1>
        </div>
        {isAdmin ? (
          <Tooltip
            content={`Correo electrónico utilizado: ${currentUser?.email}`}
          >
            <FaUserCircle size={30} color="white" />
          </Tooltip>
        ) : (
          <Tooltip content={"Tus solicitudes"}>
            <div className="flex cursor-pointer">
              <HiClipboardList
                onClick={() => setCartModal(true)}
                size={30}
                color="black"
              />
              <Badge>{totalCartLength}</Badge>
            </div>
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
