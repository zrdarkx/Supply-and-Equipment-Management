import { Button, TextInput, Tooltip } from "flowbite-react";
import SemTitle from "../components/semTitle";
import DashboardLayout from "../layout/dashboardLayout";
import { SemTable } from "../components/semTable";
import SemModal from "../components/semModal";
import { useState } from "react";
import SemInput from "../components/semInput";
import { HiOfficeBuilding } from "react-icons/hi";
import useAddOffice from "../hooks/useAddOffice";
import { toast } from "react-toastify";

const Offices = () => {
  const [addOfficeModal, setAddOfficeModal] = useState(false);
  const [office, setOffice] = useState("");

  const { addOffice } = useAddOffice();

  return (
    <DashboardLayout>
      <SemModal
        title="Add Office"
        open={addOfficeModal}
        handleClose={() => setAddOfficeModal(false)}
      >
        <SemInput
          event={(event) => setOffice(event.target.value)}
          color={"info"}
          label="Office Name"
          placeholder="Enter office name"
        />
        <Button
          onClick={() => {
            addOffice(office);
            setAddOfficeModal(false);
            toast.success("Added office successfully");
          }}
          gradientMonochrome="info"
          className="w-full mt-5"
        >
          Add Office
        </Button>
      </SemModal>
      <div className="records-wrapper p-5">
        <div className="content-header p-10 flex flex-row justify-between items-center">
          <div className="wrapper flex flex-row items-center">
            <SemTitle title={"Offices"} color={"white"} />
            <HiOfficeBuilding className="ml-3" color="white" size={30} />
          </div>
          <div className="button-wrapper flex flex-row">
            <Tooltip content="Add office to the system">
              <Button
                onClick={() => setAddOfficeModal(true)}
                gradientMonochrome="info"
              >
                Add Office
              </Button>
            </Tooltip>
          </div>
        </div>
        <SemTable />
      </div>
    </DashboardLayout>
  );
};

export default Offices;
