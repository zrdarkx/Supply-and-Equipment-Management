import { Tabs, Button, Modal } from "flowbite-react"; // Import Modal
import DashboardLayout from "../layout/dashboardLayout";
import {
  HiOfficeBuilding,
  HiOutlineTable,
  HiViewGrid,
  HiDownload,
} from "react-icons/hi";
import Offices from "./offices";
import Supply from "./supply";
import Equipment from "./equipment";
import { useSemStore } from "../zustand/store";
import { useState, useRef } from "react"; // Import useState and useRef
import { usePDF } from "react-to-pdf"; // Import usePDF
import moment from "moment"; // Import moment
import useGetSupply from "../hooks/useGetSupply"; // Import supply hook
import useGetEquipment from "../hooks/useGetEquipment"; // Import equipment hook

const MasterRecords = () => {
  const { currentUser } = useSemStore();
  const isAdmin = currentUser?.role == "Admin";

  // State for modal visibility
  const [openModal, setOpenModal] = useState(false);

  // Ref for the PDF content
  const { toPDF, targetRef } = usePDF({ filename: "assets-report.pdf" });

  // Get data from hooks
  const { data: supplies, loading: supplyLoading } = useGetSupply();
  const { data: equipment, loading: equipmentLoading } = useGetEquipment();
  const loading = supplyLoading || equipmentLoading;

  return (
    <DashboardLayout>
      {/* DEPARTMENT */}

      {!isAdmin && (
        <div className="container mx-auto">
          <Tabs variant="pills" className="mx-5">
            <Tabs.Item active title="Suministros" icon={HiOutlineTable}>
              <Supply />
            </Tabs.Item>
            <Tabs.Item title="Equipos" icon={HiViewGrid}>
              <Equipment />
            </Tabs.Item>
          </Tabs>
        </div>
      )}

      {/* ADMIN */}
      {isAdmin && (
        <div className="container mx-auto">
          <Tabs variant="pills" className="mx-5">
            <Tabs.Item active title="Suministros" icon={HiOutlineTable}>
              <Supply />
            </Tabs.Item>
            <Tabs.Item title="Equipos" icon={HiViewGrid}>
              <Equipment />
            </Tabs.Item>
            <Tabs.Item title="Oficinas" icon={HiOfficeBuilding}>
              <Offices />
            </Tabs.Item>
          </Tabs>
          {/* Button to trigger report */}
          <Button
            onClick={() => setOpenModal(true)}
            className="mt-4 ml-5"
            gradientDuoTone="purpleToBlue"
          >
            Generar Reporte de Activos
          </Button>
        </div>
      )}

      {/* Combined Report Modal */}
      <Modal
        show={openModal}
        size="7xl"
        popup={true}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header>Reporte de Activos</Modal.Header>
        <Modal.Body>
          <div ref={targetRef} className="container mx-auto p-2">
            <div className="wrapper mb-10">
              <h1 className="font-bold text-center text-2xl mb-10">
                REPORTE DE ACTIVOS
              </h1>
            </div>

            <h2 className="font-bold text-xl mb-4">Suministros</h2>
            <div className="border border-black flex border-t-0">
              <div className="basis-1/12 border border-black p-2 text-center">
                <h1>Cantidad</h1>
              </div>
              <div className="basis-1/12 border border-black p-2 text-center">
                <h1>Unidad</h1>
              </div>
              <div className="basis-4/12 border border-black p-2 text-center">
                <h1>Descripción</h1>
              </div>
              <div className="basis-2/12 border border-black p-2 text-center">
                <h1>Número de Inventario</h1>
              </div>
              <div className="basis-2/12 border border-black p-2 text-center">
                <h1>Fecha de Adquisición</h1>
              </div>
              <div className="basis-2/12 border border-black p-2 text-center">
                <h1>Monto</h1>
              </div>
            </div>
            {supplies &&
              !loading &&
              supplies.map((item) => (
                <div
                  className="border border-black flex border-t-0"
                  key={item.id}
                >
                  <div className="basis-1/12 border border-black p-2 text-center">
                    <h1>{item.quantity}</h1>
                  </div>
                  <div className="basis-1/12 border border-black p-2 text-center">
                    <h1>{item.unit}</h1>
                  </div>
                  <div className="basis-4/12 border border-black p-2 text-center">
                    <h1>{item.description}</h1>
                  </div>
                  <div className="basis-2/12 border border-black p-2 text-center">
                    <h1>{item.inventoryNumber}</h1>
                  </div>
                  <div className="basis-2/12 border border-black p-2 text-center">
                    <h1>{moment(item.createdAt.toDate()).format("LLL")}</h1>
                  </div>
                  <div className="basis-2/12 border border-black p-2 text-center">
                    <h1>{item.unitCost}</h1>
                  </div>
                </div>
              ))}

            <h2 className="font-bold text-xl my-4">Equipos</h2>
            <div className="border border-black flex border-t-0">
              <div className="basis-1/12 border border-black p-2 text-center">
                <h1>Cantidad</h1>
              </div>
              <div className="basis-1/12 border border-black p-2 text-center">
                <h1>Unidad</h1>
              </div>
              <div className="basis-4/12 border border-black p-2 text-center">
                <h1>Descripción</h1>
              </div>
              <div className="basis-2/12 border border-black p-2 text-center">
                <h1>Número de Bien</h1>
              </div>
              <div className="basis-2/12 border border-black p-2 text-center">
                <h1>Fecha de Adquisición</h1>
              </div>
              <div className="basis-2/12 border border-black p-2 text-center">
                <h1>Monto</h1>
              </div>
            </div>
            {equipment &&
              !loading &&
              equipment.map((item) => (
                <div
                  className="border border-black flex border-t-0"
                  key={item.id}
                >
                  <div className="basis-1/12 border border-black p-2 text-center">
                    <h1>{item.quantity}</h1>
                  </div>
                  <div className="basis-1/12 border border-black p-2 text-center">
                    <h1>{item.unit}</h1>
                  </div>
                  <div className="basis-4/12 border border-black p-2 text-center">
                    <h1>{item.description}</h1>
                  </div>
                  <div className="basis-2/12 border border-black p-2 text-center">
                    <h1>{item.propertyNumber}</h1>
                  </div>
                  <div className="basis-2/12 border border-black p-2 text-center">
                    <h1>{moment(item.createdAt.toDate()).format("LLL")}</h1>
                  </div>
                  <div className="basis-2/12 border border-black p-2 text-center">
                    <h1>{item.unitCost}</h1>
                  </div>
                </div>
              ))}
          </div>
          {loading && <p className="text-center">Cargando...</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => toPDF()}
            className="w-full mt-5 py-3 mr-5"
            disabled={loading} // Disable button while loading
          >
            Descargar <HiDownload className="mx-3" size={20} />
          </Button>
        </Modal.Footer>
      </Modal>
    </DashboardLayout>
  );
};

export default MasterRecords;
