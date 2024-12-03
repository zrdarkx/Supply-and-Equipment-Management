import { Button, Modal } from "flowbite-react";
import { HiDownload } from "react-icons/hi";
import { usePDF } from "react-to-pdf";
import moment from "moment";
import useGetSupply from "../hooks/useGetSupply"; // Hook para obtener suministros

const SupplyReport = ({ title, size, open, handleClose }) => {
  const { data, loading } = useGetSupply(); // Obtener datos de suministros
  const { toPDF, targetRef } = usePDF({ filename: "supply-report.pdf" });

  return (
    <Modal show={open} size={size} popup={true} onClose={handleClose}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>
        <div ref={targetRef} className="container mx-auto p-2">
          <div className="wrapper mb-10">
            <h1 className="font-bold text-center text-2xl mb-10">
              REPORTE DE SUMINISTROS
            </h1>
          </div>

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

          {data &&
            !loading &&
            data.map((item) => (
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
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            toPDF();
          }}
          className="w-full mt-5 py-3 mr-5"
        >
          Descargar <HiDownload className="mx-3" size={20} />
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SupplyReport;
