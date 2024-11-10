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
import useAddTransaction from "../hooks/useAddTransaction";
import { toast } from "react-toastify";
import RisFormRow from "../components/risFormRow";
import RisFormDummyRow from "../components/risFormDummyRow";
import RisFormModal from "../components/risFormModal";

const DashboardLayout = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [risForm, setRisForm] = useState(false);
  const [currentMode, setCurrentMode] = useState("Suministro");

  const {
    cartSupply,
    cartEquipment,
    currentUser,
    setCartEquipment,
    setCartSupply,
  } = useSemStore();

  const isSupplyCartEmpty = cartSupply.length <= 0;
  const isEquipmentCartEmpty = cartEquipment.length <= 0;

  return (
    <div className="w-full min-h-screen bg-slate-950 pb-10">
      <SemModal
        dark={true}
        title={`Solicitudes`}
        size={"xxl"}
        open={cartModal}
        handleClose={() => setCartModal(false)}
      >
        <div className="container">
          <Tabs variant="pills" className="mx-5 mb-5">
            <Tabs.Item
              onClick={() => setCurrentMode("Suministro")}
              active
              title="Suministros"
              icon={HiOutlineTable}
            >
              {isSupplyCartEmpty ? (
                <NoData
                  title={
                    "Tus solicitud de suministros está vacío, intenta agregar un suministro del registro maestro."
                  }
                />
              ) : (
                <Supply cart={true} />
              )}
              <div className="w-full flex flex-row mt-20">
                {/* <Button color={"success"} className="w-full py-2 mx-3">
                  Add Unique
                </Button> */}
                <Button
                  onClick={() => {
                    setCurrentMode("Suministro");
                    setRisForm(true);
                  }}
                  className="w-full py-2 mx-3"
                >
                  Finalizar Solicitud
                </Button>
              </div>
            </Tabs.Item>
            <Tabs.Item
              onClick={() => setCurrentMode("Equipos")}
              title="Equipos"
              icon={HiViewGrid}
            >
              {isEquipmentCartEmpty ? (
                <NoData
                  title={
                    "Tu Solicitud de equipos está vacío, intenta agregar un equipo del registro maestro."
                  }
                />
              ) : (
                <Equipment cart={true} />
              )}
              <div className="w-full flex flex-row mt-20">
                {/* <Button color={"success"} className="w-full py-2 mx-3">
                  Add Unique
                </Button> */}
                <Button
                  onClick={() => {
                    setCurrentMode("Equipos");
                  }}
                  className="w-full py-2 mx-3"
                >
                  Finalizar Solicitud
                </Button>
              </div>
            </Tabs.Item>
          </Tabs>
        </div>
      </SemModal>
      <RisFormModal
        viewOnly={true}
        title={`Formulario SEM`}
        size={"6xl"}
        open={risForm}
        handleClose={() => setRisForm(false)}
        data={currentMode == "Suministro" ? cartSupply : cartEquipment}
        currentMode={currentMode}
        setCartModal={setCartModal}
      />

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
