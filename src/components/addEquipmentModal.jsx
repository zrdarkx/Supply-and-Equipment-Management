import { Button } from "flowbite-react";
import SemInput from "./semInput";
import SemModal from "./semModal";

const AddEquipmentModal = ({
  size,
  title,
  open,
  handleClose,
  forms,
  handleUpdateForm,
  handleSubmit,
  isUpdate,
}) => {
  return (
    <SemModal size={size} title={title} open={open} handleClose={handleClose}>
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
  );
};

export default AddEquipmentModal;
