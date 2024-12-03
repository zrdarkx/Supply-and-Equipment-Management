import { HiOutlineTable } from "react-icons/hi";
import ContentHeader from "../components/contentHeader";
import NoData from "../components/noData";
import Loading from "../components/semInput";
import { useState } from "react";
import { EQUIPMENT_DEFAULT_VALUE } from "../utils/constant";
import useAddEquipment from "../hooks/useAddEquipment";
import { toast } from "react-toastify";
import useGetEquipment from "../hooks/useGetEquipment";
import { SemEquipmentTable } from "../components/semEquipmentTable";
import { ConfirmationModal } from "../components/confirmationModal";
import useDeleteEquipment from "../hooks/useDeleteEquipment";
import useUpdateEquipment from "../hooks/useUpdateEquipment";
import { useSemStore } from "../zustand/store";
import AddEquipmentModal from "../components/addEquipmentModal";
import EquipmentReport from "../components/equipmentReport";
import { Button } from "flowbite-react";

const Equipment = ({ cart }) => {
  const [forms, setForms] = useState(EQUIPMENT_DEFAULT_VALUE);
  const [equipModal, setEquipModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedEquip, setSelectedEquip] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [search, setSearch] = useState("");
  const [equipmentReportOpen, setEquipmentReportOpen] = useState(false);

  // HOOKS

  const { addEquipment } = useAddEquipment();
  const { updateEquipment } = useUpdateEquipment();
  const { deleteEquipment } = useDeleteEquipment();
  const { data, loading } = useGetEquipment();
  const { cartEquipment } = useSemStore();

  // LOCAL FUNCTION

  const handleUpdateForm = (event) => {
    const { name, value } = event.target;
    const newForms = { ...forms, [name]: value };
    setForms(newForms);
  };

  const handleSubmit = () => {
    if (isUpdate) {
      updateEquipment(forms);
      toast.success("Equipo Actualizado.");
    } else {
      addEquipment(forms);
      toast.success("Equipo añadido.");
    }

    setEquipModal(false);
  };

  const handleDeleteEquip = () => {
    deleteEquipment(selectedEquip.id);
    setDeleteModal(false);
  };

  const handleUpdateEquipForm = (item) => {
    setForms(item);
  };

  const query = data.filter((item) => {
    const itemName = item?.name.toLowerCase();
    const itemSearch = search?.toLowerCase();
    if (itemName.startsWith(itemSearch)) {
      return item;
    }
  });

  const handleAddingEquipment = () => {
    setEquipModal(true);
    setIsUpdate(false);
    setForms(EQUIPMENT_DEFAULT_VALUE);
  };

  return (
    <>
      <AddEquipmentModal
        size="5xl"
        title={isUpdate ? "Actualizar Equipo" : "Agregar Equipo"}
        open={equipModal}
        handleClose={() => setEquipModal(false)}
        forms={forms}
        handleUpdateForm={handleUpdateForm}
        handleSubmit={handleSubmit}
        isUpdate={isUpdate}
      />

      <ConfirmationModal
        open={deleteModal}
        event={handleDeleteEquip}
        handleClose={() => setDeleteModal(false)}
      />

      <div className="wrapper p-0 lg:p-5">
        <ContentHeader
          cart={cart}
          setSearch={setSearch}
          title="Equipo"
          Icon={HiOutlineTable}
          tooltip={"Agregar equipo al sistema"}
          event={handleAddingEquipment}
        />

        {loading && <Loading />}

        {!loading && data.length <= 0 && (
          <NoData title={"No hay equipo, por favor agrega uno."} />
        )}

        {!loading && data.length >= 1 && (
          <SemEquipmentTable
            handleUpdateEquipForm={handleUpdateEquipForm}
            setIsUpdate={setIsUpdate}
            setEquipModal={setEquipModal}
            setSelectedEquip={setSelectedEquip}
            setDeleteModal={setDeleteModal}
            data={cart ? cartEquipment : query}
            cart={cart}
          />
        )}
      </div>

      <Button
        color="success"
        className="mb-2"
        onClick={() => setEquipmentReportOpen(true)}
      >
        Ver Reporte de Equipos
      </Button>

      {equipmentReportOpen && (
        <EquipmentReport
          title="Reporte de Equipos"
          size="6xl"
          open={equipmentReportOpen}
          handleClose={() => setEquipmentReportOpen(false)}
        />
      )}
    </>
  );
};

export default Equipment;
