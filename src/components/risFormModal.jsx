import { Button } from "flowbite-react";
import RisFormDummyRow from "./risFormDummyRow";
import SemModal from "./semModal";
import RisFormRow from "./risFormRow";
import useAddTransaction from "../hooks/useAddTransaction";
import { useSemStore } from "../zustand/store";
import { toast } from "react-toastify";
import { HiDownload } from "react-icons/hi";
import { usePDF } from "react-to-pdf";

const RisFormModal = ({
  title,
  size,
  open,
  handleClose,
  data,
  viewOnly,
  currentMode,
  setCartModal,
}) => {
  const { addTransaction, addSupplyTransaction, addEquipmentTransaction } =
    useAddTransaction();
  const { currentUser, setCartSupply, setCartEquipment } = useSemStore();
  const { toPDF, targetRef } = usePDF({ filename: "ris.pdf" });

  return (
    <SemModal title={title} size={size} open={open} handleClose={handleClose}>
      <div ref={targetRef} className="container mx-auto p-2">
        <div className="wrapper">
          <h1 className="font-bold text-center text-2xl">
            SOLICITUD Y ENTREGA DE MATERIALES{" "}
          </h1>
          <div className="flex justify-between items-center mt-2">
            <h1>Nombre de la Entidad : CNSC </h1>
            <h1>Grupo de Fondos : 07 - Fondo de Recibos de Fideicomiso</h1>
          </div>
        </div>
        <div className="border border-slate-950 flex">
          <div className="basis-8/12 border border-slate-950 p-2">
            <div className="flex flex-col ml-3">
              <h1>División: OVPRE </h1>
              <h1>Oficina: FTO </h1>
            </div>
          </div>
          <div className="basis-4/12 border border-slate-950">
            <div className="flex flex-col ml-3">
              <h1>Código del Centro de Responsabilidad: ___________</h1>
              <h1>Número de SEM: #</h1>
            </div>
          </div>
        </div>
        <div className="border border-slate-950 flex border-t-0">
          <div className="basis-6/12 border border-slate-950 p-2 text-center">
            <h1>Solicitud </h1>
          </div>
          <div className="basis-2/12 border border-slate-950 p-2 text-center">
            <h1>¿Existencias Disponibles?</h1>
          </div>
          <div className="basis-4/12 border border-slate-950 p-2 text-center">
            <h1>Entrega</h1>
          </div>
        </div>
        <div className="border border-slate-950 flex border-t-0">
          <div className="basis-1/12 border border-slate-950 p-2 text-center">
            <h1>Número de Inventario </h1>
          </div>
          <div className="basis-1/12 border border-slate-950 p-2 text-center">
            <h1>Unidad</h1>
          </div>
          <div className="basis-3/12 border border-slate-950 p-2 text-center">
            <h1>Descripción</h1>
          </div>

          <div className="basis-1/12 border border-slate-950 p-2 text-center">
            <h1>Cantidad</h1>
          </div>
          <div className="basis-1/12 border border-slate-950 p-2 text-center">
            <h1>Sí</h1>
          </div>
          <div className="basis-1/12 border border-slate-950 p-2 text-center">
            <h1>No</h1>
          </div>
          <div className="basis-2/12 border border-slate-950 p-2 text-center">
            <h1>Cantidad</h1>
          </div>
          <div className="basis-2/12 border border-slate-950 p-2 text-center">
            <h1>Observaciones</h1>
          </div>
        </div>
        {data?.map((item) => {
          return (
            <RisFormRow
              key={item.id}
              stockNo={item.inventoryNumber || item.propertyNumber}
              unit={item.unit}
              decription={item.name + " | " + item.description}
              rQuantity={item.borrowedQuantity ? item.borrowedQuantity : 1}
              stockAvailable={item.quantity !== 0 ? true : false}
              iQuantity={item.quantity}
              remarks={item.remarks}
            />
          );
        })}

        <RisFormDummyRow />
        <div className="border border-slate-950 p-10 text-center">
          <h1>
            Propósito: Otros suministros y materiales que se utilizarán para los
            gastos de estudios, investigación, exploración y desarrollo.{" "}
          </h1>
        </div>
      </div>
      {viewOnly && currentMode == "Supply" && (
        <div className="flex">
          <Button
            onClick={() => {
              toPDF();
            }}
            className="w-full mt-5 py-3 mr-5"
          >
            Descargar <HiDownload className="mx-3" size={20} />
          </Button>
          <Button
            color={"success"}
            onClick={() => {
              addSupplyTransaction(data, currentUser);
              setCartModal(false);
              handleClose();
              toast.success("Transacción agregada correctamente");
              setCartSupply([]);
            }}
            className="w-full mt-5 py-3"
          >
            Enviar SEM de Suministros
          </Button>
        </div>
      )}
      {viewOnly && currentMode == "Equipment" && (
        <div className="flex">
          <Button
            onClick={() => {
              toPDF();
            }}
            className="w-full mt-5 py-3 mr-5"
          >
            Descargar <HiDownload className="mx-3" size={20} />
          </Button>
          <Button
            color={"success"}
            onClick={() => {
              addEquipmentTransaction(data, currentUser);
              setCartModal(false);
              handleClose();
              toast.success("Transacción agregada correctamente");
              setCartEquipment([]);
            }}
            className="w-full mt-5 py-3"
          >
            Enviar SEM de Equipo
          </Button>
        </div>
      )}
      {!viewOnly && (
        <Button
          onClick={() => {
            toPDF();
          }}
          className="w-full mt-5 py-3 mr-5"
        >
          Descargar <HiDownload className="mx-3" size={20} />
        </Button>
      )}
    </SemModal>
  );
};

export default RisFormModal;
