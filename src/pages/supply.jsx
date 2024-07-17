import { HiOutlineTable } from "react-icons/hi";
import ContentHeader from "../components/contentHeader";
import DashboardLayout from "../layout/dashboardLayout";
import SemModal from "../components/semModal";
import SemInput from "../components/semInput";
import { useState } from "react";
import { Button } from "flowbite-react";
import useAddSupply from "../hooks/useAddSupply";
import { toast } from "react-toastify";

const Supply = () => {
  const [supplyModal, setSupplyModal] = useState(false);
  const [forms, setForms] = useState({
    name: "",
    quantity: "",
    unit: "",
    unitCost: "",
    description: "",
    estimatedUsefulLife: "",
    inventoryNumber: "",
  });

  // Hooks

  const { addSupply } = useAddSupply();

  // Local Fucntion

  const handleUpdateForm = (event) => {
    const { name, value } = event.target;
    const newForms = { ...forms, [name]: value };
    setForms(newForms);
  };

  const handleAddSupply = () => {
    addSupply(forms);
    setSupplyModal(false);
    toast.success("Supply added successfully.");
  };

  return (
    <DashboardLayout>
      <SemModal
        size="5xl"
        title="Add Supply"
        open={supplyModal}
        handleClose={() => setSupplyModal(false)}
      >
        <div className="flex flex-row">
          <div className="basis-6/12 mx-3">
            <SemInput
              color={"gray"}
              name={"name"}
              label="Name"
              placeholder="Enter name"
              event={handleUpdateForm}
            />
            <SemInput
              name={"quantity"}
              color={"gray"}
              label="Quantity"
              placeholder="Enter quantity"
              event={handleUpdateForm}
            />
            <SemInput
              name={"unit"}
              color={"gray"}
              label="Unit"
              placeholder="Enter unit"
              event={handleUpdateForm}
            />
            <SemInput
              name={"unitCost"}
              color={"gray"}
              label="Unit Cost"
              placeholder="Enter unit cost"
              event={handleUpdateForm}
            />
          </div>
          <div className="basis-6/12">
            <SemInput
              name={"description"}
              color={"gray"}
              label="Description"
              placeholder="Enter description"
              event={handleUpdateForm}
            />
            <SemInput
              name={"estimatedUsefulLife"}
              color={"gray"}
              label="Estimated Useful Life"
              placeholder="Enter estimated useful life"
              event={handleUpdateForm}
            />
            <SemInput
              name={"inventoryNumber"}
              color={"gray"}
              label="Inventory Number"
              placeholder="Enter inventory number"
              event={handleUpdateForm}
            />
          </div>{" "}
        </div>

        <Button
          onClick={handleAddSupply}
          gradientMonochrome="info"
          className="w-full mt-5"
        >
          Add Supply
        </Button>
      </SemModal>
      <div className="office-wrapper p-5">
        <ContentHeader
          title="Supply"
          Icon={HiOutlineTable}
          event={() => setSupplyModal(true)}
          tooltip={"Add supply to the system"}
        />
      </div>
    </DashboardLayout>
  );
};

export default Supply;
