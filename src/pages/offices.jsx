import { Button, Tooltip } from "flowbite-react";
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

const Offices = () => {
  const [addOfficeModal, setAddOfficeModal] = useState(false);
  const [office, setOffice] = useState("");

  const { addOffice } = useAddOffice();
  const { offices } = useGetOffices();
  const { deleteOffice } = useDeleteOffice();

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
      <div className="office-wrapper p-5">
        <ContentHeader
          title="Offices"
          Icon={HiOfficeBuilding}
          event={() => setAddOfficeModal(true)}
          tooltip={"Add office to the system"}
        />
        <SemOfficesTable deleteOffice={deleteOffice} data={offices} />
      </div>
    </DashboardLayout>
  );
};

export default Offices;
