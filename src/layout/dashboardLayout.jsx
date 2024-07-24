import { useState } from "react";
import DashboardHeader from "../components/dashboardHeader";
import SemSidebar from "../components/semSidebar";
import SemModal from "../components/semModal";
import { Button, Tabs } from "flowbite-react";
import { HiOutlineTable, HiViewGrid } from "react-icons/hi";
import Supply from "../pages/supply";
import Equipment from "../pages/equipment";
import { useSemStore } from "../zustand/store";
import NoData from "../components/noData";

const DashboardLayout = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [cartModal, setCartModal] = useState(false);

  const { cartSupply, cartEquipment } = useSemStore();

  const isSupplyCartEmpty = cartSupply.length <= 0;
  const isEquipmentCartEmpty = cartEquipment.length <= 0;

  return (
    <div className="w-full min-h-screen bg-slate-950 pb-10">
      <SemModal
        dark={true}
        title={`Your Item Cart`}
        size={"xxl"}
        open={cartModal}
        handleClose={() => setCartModal(false)}
      >
        <div className="container">
          <Tabs variant="pills" className="mx-5 mb-5">
            <Tabs.Item active title="Supply" icon={HiOutlineTable}>
              {isSupplyCartEmpty ? (
                <NoData title={"Your cart is empty try addding one."} />
              ) : (
                <Supply cart={true} />
              )}
            </Tabs.Item>
            <Tabs.Item title="Equipment" icon={HiViewGrid}>
              {isEquipmentCartEmpty ? (
                <NoData title={"Your cart is empty try addding one."} />
              ) : (
                <Equipment cart={true} />
              )}
            </Tabs.Item>
          </Tabs>
        </div>
        <div className="w-full flex flex-row">
          <Button color={"success"} className="w-full py-2 mx-3">
            Add Unique
          </Button>
          <Button className="w-full py-2 mx-3">Finalize</Button>
        </div>
      </SemModal>

      <SemSidebar isOpen={isOpen} handleClose={() => setOpen(false)} />
      <DashboardHeader
        setCartModal={setCartModal}
        handleOpenSidebar={() => setOpen(true)}
      />
      <div className="w-full px-0 lg:px-10">{children}</div>
    </div>
  );
};

export default DashboardLayout;
