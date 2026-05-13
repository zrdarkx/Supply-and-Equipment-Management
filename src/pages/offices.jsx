import { Button, Progress, Spinner, Tooltip } from "flowbite-react";
import SemTitle from "../components/semTitle";
import DashboardLayout from "../layout/dashboardLayout";
import SemModal from "../components/semModal";
import { useState } from "react";
import SemInput from "../components/semInput";
import { HiOfficeBuilding } from "react-icons/hi";
import useAddOffice from "../hooks/useAddOffice";
import { toast } from "react-toastify";
import useGetOffices from "../hooks/useGetOffices";
import { SemOfficesTable } from "../components/semOfficesTable";
import useDeleteOffice from "../hooks/useDeleteOffice";
import ContentHeader from "../components/contentHeader";
import { ConfirmationModal } from "../components/confirmationModal";
import useUpdateOffice from "../hooks/useUpdateOffice";
import NoData from "../components/noData";
import Loading from "../components/loading";
import OfficeReport from "../components/officeReport";

const Offices = () => {
  const [addOfficeModal, setAddOfficeModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState(null);
  const [office, setOffice] = useState("");
  const [search, setSearch] = useState("");
  const [officeReportOpen, setOfficeReportOpen] = useState(false);

  // CRUD OFFICE
  const { addOffice } = useAddOffice();
  const { deleteOffice } = useDeleteOffice();
  const { updateOffice } = useUpdateOffice();
  const { offices, loading } = useGetOffices();

  const handleOfficeEvent = () => {
    if (selectedOffice) {
      updateOffice(selectedOffice, office);
      setAddOfficeModal(false);
      setSelectedOffice(null);
      toast.success("Nombre de la oficina actualizado correctamente");
    } else {
      addOffice(office);
      setAddOfficeModal(false);
      toast.success("Oficina agregada correctamente");
    }
  };

  const handleUpdateOfficeForm = (data) => {
    setOffice(data.officeName);
  };

  const query = offices.filter((item) => {
    const itemName = item?.officeName.toLowerCase();
    const itemSearch = search?.toLowerCase();
    if (itemName.startsWith(itemSearch)) {
      return item;
    }
  });

  return (
    <>
      <SemModal
        title={
          selectedOffice ? "Actualizar nombre de la oficina" : "Agregar oficina"
        }
        open={addOfficeModal}
        handleClose={() => {
          setAddOfficeModal(false);
          setSelectedOffice(null);
        }}
      >
        <SemInput
          value={office}
          event={(event) => setOffice(event.target.value)}
          color={"info"}
          label="Nombre de la Oficina"
          placeholder="Ingrese el nombre de la oficina"
        />
        <Button
          onClick={handleOfficeEvent}
          gradientMonochrome={selectedOffice ? "info" : "info"}
          className="w-full mt-5 py-2"
        >
          {selectedOffice
            ? "Actualizar nombre de la oficina"
            : "Agregar Oficina"}{" "}
        </Button>
      </SemModal>
      <ConfirmationModal
        open={deleteModal}
        handleClose={() => {
          setDeleteModal(false);
          setSelectedOffice(null);
        }}
        event={() => {
          deleteOffice(selectedOffice);
          setDeleteModal(false);
        }}
      />
      <div className="office-wrapper p-0 lg:p-5">
        <ContentHeader
          setSearch={setSearch}
          title="Oficinas"
          Icon={HiOfficeBuilding}
          event={() => {
            setAddOfficeModal(true);
            setOffice("");
          }}
          tooltip={"Agregar oficina al sistema"}
        />

        {loading && <Loading />}
        {!loading && offices.length >= 1 && (
          <SemOfficesTable
            handleUpdateOfficeForm={handleUpdateOfficeForm}
            setAddOfficeModal={setAddOfficeModal}
            setDeleteModal={setDeleteModal}
            setSelectedOffice={setSelectedOffice}
            data={query}
          />
        )}
        {!loading && offices.length <= 0 && (
          <NoData title={"No hay oficinas, por favor agrega una."} />
        )}
      </div>

      <Button
        color="success"
        className="mb-2"
        onClick={() => setOfficeReportOpen(true)}
      >
        Ver Reporte de Oficinas
      </Button>

      {officeReportOpen && (
        <OfficeReport
          title="Reporte de Oficinas"
          size="6xl"
          open={officeReportOpen}
          handleClose={() => setOfficeReportOpen(false)}
        />
      )}
    </>
  );
};

export default Offices;
