import { HiOutlineTable } from "react-icons/hi";
import ContentHeader from "../components/contentHeader";
import SemTitle from "../components/semTitle";
import DashboardLayout from "../layout/dashboardLayout";
import SemModal from "../components/semModal";
import SemInput from "../components/semInput";
import { useState } from "react";
import { Button } from "flowbite-react";

const Supply = () => {
  const [supplyModal, setSupplyModal] = useState(false);

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
            />
            <SemInput
              name={"quantity"}
              color={"gray"}
              label="Quantity"
              placeholder="Enter quantity"
            />
            <SemInput
              name={"unit"}
              color={"gray"}
              label="Unit"
              placeholder="Enter unit"
            />
            <SemInput
              name={"unitCost"}
              color={"gray"}
              label="Unit Cost"
              placeholder="Enter unit cost"
            />
          </div>
          <div className="basis-6/12">
            <SemInput
              name={"description"}
              color={"gray"}
              label="Description"
              placeholder="Enter description"
            />
            <SemInput
              name={"estimatedUsefulLife"}
              color={"gray"}
              label="Estimated Useful Life"
              placeholder="Enter estimated useful life"
            />
            <SemInput
              name={"inventoryNumber"}
              color={"gray"}
              label="Inventory Number"
              placeholder="Enter inventory number"
            />
          </div>{" "}
        </div>

        <Button gradientMonochrome="info" className="w-full mt-5">
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
