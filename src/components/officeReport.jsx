import { Button, Modal } from "flowbite-react";
import { HiDownload } from "react-icons/hi";
import { usePDF } from "react-to-pdf";
import moment from "moment";
import useGetOffices from "../hooks/useGetOffices"; // Hook para obtener oficinas

const OfficeReport = ({ title, size, open, handleClose }) => {
  const { offices, loading } = useGetOffices(); // Obtener datos de oficinas
  const { toPDF, targetRef } = usePDF({ filename: "office-report.pdf" });

  return (
    <Modal show={open} size={size} popup={true} onClose={handleClose}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>
        <div ref={targetRef} className="container mx-auto p-4">
          <div className="text-center mb-5">
            <h1 className="font-bold text-2xl">J&N 31 A1 IMPORTACIONES, C.A</h1>
            <h2 className="text-lg">Informe de Oficinas</h2>
            <p className="text-sm">{moment().format("LLL")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <h3 className="font-semibold text-lg">Ubicación (Venezuela):</h3>
              <p>
                Carretera nacional La Toscana, troncal 13, galpón s/n, sector
                Guayabal, Maturín, Estado Monagas.
              </p>
              <h4 className="font-semibold">Teléfonos:</h4>
              <p>+58 (424) 955-5020</p>
              <p>+58 (426) 582-7688</p>
              <h4 className="font-semibold">Correos:</h4>
              <p>jn31a1importaciones@gmail.com</p>
              <p>info@jn31a1.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Ubicación (USA):</h3>
              <p>2226 Rocoso Trail, Leander, Tx 78641, USA.</p>
              <h4 className="font-semibold">Teléfono:</h4>
              <p>+1 (813) 834-2103</p>
              <h4 className="font-semibold">Correos:</h4>
              <p>jn31a1importaciones@gmail.com</p>
              <p>info@jn31a1.com</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2 text-center">ID</th>
                  <th className="border border-gray-300 p-2 text-center">
                    Nombre de la Oficina
                  </th>
                  <th className="border border-gray-300 p-2 text-center">
                    Fecha de Creación
                  </th>
                </tr>
              </thead>
              <tbody>
                {offices &&
                  !loading &&
                  offices.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-100">
                      <td className="border border-gray-300 p-2 text-center">
                        {item.id}
                      </td>
                      <td className="border border-gray-300 p-2 text-center">
                        {item.officeName}
                      </td>
                      <td className="border border-gray-300 p-2 text-center">
                        {moment(item.createdAt.toDate()).format("LLL")}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            toPDF();
          }}
          className="w-full mt-5 py-3"
        >
          Descargar <HiDownload className="mx-3" size={20} />
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OfficeReport;
