import { HiOutlineTable } from "react-icons/hi";
import ContentHeader from "../components/contentHeader";
import SemModal from "../components/semModal";
import SemInput from "../components/semInput";
import NoData from "../components/noData";
import Loading from "../components/semInput";

import { useState } from "react";
import { EQUIPMENT_DEFAULT_VALUE } from "../utils/constant";
import { Button } from "flowbite-react";
import useAddEquipment from "../hooks/useAddEquipment";
import { toast } from "react-toastify";
import useGetEquipment from "../hooks/useGetEquipment";
import { SemEquipmentTable } from "../components/semEquipmentTable";
import { ConfirmationModal } from "../components/confirmationModal";
import useDeleteEquipment from "../hooks/useDeleteEquipment";
import useUpdateEquipment from "../hooks/useUpdateEquipment";
import { useSemStore } from "../zustand/store";

const Equipment = ({ cart }) => {
  const [forms, setForms] = useState(EQUIPMENT_DEFAULT_VALUE);
  const [equipModal, setEquipModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedEquip, setSelectedEquip] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [search, setSearch] = useState("");

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
      toast.success("Equipment Updated.");
    } else {
      addEquipment(forms);
      toast.success("Equipment Added.");
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

  return (
    <>
      <SemModal
        size="5xl"
        title={isUpdate ? "Update Equipment" : "Add Equipment"}
        open={equipModal}
        handleClose={() => setEquipModal(false)}
      >
        <div className="flex flex-row">
          <div className="basis-6/12 mx-3">
            <SemInput
              value={forms.name}
              color={"gray"}
              name={"name"}
              label="Name"
              placeholder="Enter name"
              event={handleUpdateForm}
            />
            <SemInput
              value={forms.quantity}
              name={"quantity"}
              color={"gray"}
              label="Quantity"
              placeholder="Enter quantity"
              event={handleUpdateForm}
            />
            <SemInput
              value={forms.unit}
              name={"unit"}
              color={"gray"}
              label="Unit"
              placeholder="Enter unit"
              event={handleUpdateForm}
            />
            <SemInput
              value={forms.unitCost}
              name={"unitCost"}
              color={"gray"}
              label="Unit Cost"
              placeholder="Enter unit cost"
              event={handleUpdateForm}
            />
          </div>
          <div className="basis-6/12">
            <SemInput
              value={forms.description}
              name={"description"}
              color={"gray"}
              label="Description"
              placeholder="Enter description"
              event={handleUpdateForm}
            />

            <SemInput
              value={forms.propertyNumber}
              name={"propertyNumber"}
              color={"gray"}
              label="Property Number"
              placeholder="Enter inventory number"
              event={handleUpdateForm}
            />
          </div>{" "}
        </div>

        <Button
          onClick={handleSubmit}
          gradientMonochrome="info"
          className="w-full mt-5 py-2"
        >
          {isUpdate ? "Update Equipment" : "Add Equipment"}
        </Button>
      </SemModal>
      <ConfirmationModal
        open={deleteModal}
        event={handleDeleteEquip}
        handleClose={() => setDeleteModal(false)}
      />

      <div className="wrapper p-5">
        <ContentHeader
          setSearch={setSearch}
          title="Equipment"
          Icon={HiOutlineTable}
          tooltip={"Add equipmente to the system"}
          event={() => {
            setEquipModal(true);
            setIsUpdate(false);
            setForms(EQUIPMENT_DEFAULT_VALUE);
          }}
        />

        {loading && <Loading />}

        {!loading && data.length <= 0 && (
          <NoData title={"There's no equipment, please add one."} />
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
    </>
  );
};

export default Equipment;
