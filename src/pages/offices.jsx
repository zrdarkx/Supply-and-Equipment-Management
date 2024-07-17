import { Button, TextInput } from "flowbite-react";
import SemTitle from "../components/semTitle";
import DashboardLayout from "../layout/dashboardLayout";
import { SemTable } from "../components/semTable";
import SemModal from "../components/semModal";
import { useState } from "react";
import SemInput from "../components/semInput";

const Offices = () => {
  const [addOfficeModal, setAddOfficeModal] = useState(false);

  return (
    <DashboardLayout>
      <SemModal
        title="Add Office"
        open={addOfficeModal}
        handleClose={() => setAddOfficeModal(false)}
      >
        <SemInput
          color={"info"}
          label="Office Name"
          placeholder="Enter office name"
        />
      </SemModal>
      <div className="records-wrapper p-5">
        <div className="content-header p-10 flex flex-row justify-between items-center">
          <SemTitle title={"Offices"} color={"white"} />
          <div className="button-wrapper flex flex-row">
            <Button
              onClick={() => setAddOfficeModal(true)}
              gradientMonochrome="info"
            >
              Add Office
            </Button>
          </div>
        </div>
        <SemTable />
      </div>
    </DashboardLayout>
  );
};

export default Offices;
