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

const Offices = () => {
  const [addOfficeModal, setAddOfficeModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState(null);
  const [office, setOffice] = useState("");

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
      toast.success("Updated office name successfully");
    } else {
      addOffice(office);
      setAddOfficeModal(false);
      toast.success("Added office successfully");
    }
  };

  return (
    <DashboardLayout>
      <SemModal
        title={selectedOffice ? "Update office name" : "Add office"}
        open={addOfficeModal}
        handleClose={() => {
          setAddOfficeModal(false);
          setSelectedOffice(null);
        }}
      >
        <SemInput
          event={(event) => setOffice(event.target.value)}
          color={"info"}
          label="Office Name"
          placeholder="Enter office name"
        />
        <Button
          onClick={handleOfficeEvent}
          gradientMonochrome={selectedOffice ? "info" : "info"}
          className="w-full mt-5"
        >
          {selectedOffice ? "Update office name" : "Add Office"}
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
      <div className="office-wrapper p-5">
        <ContentHeader
          title="Offices"
          Icon={HiOfficeBuilding}
          event={() => setAddOfficeModal(true)}
          tooltip={"Add office to the system"}
        />

        {loading && <Loading />}
        {!loading && offices.length >= 1 && (
          <SemOfficesTable
            setAddOfficeModal={setAddOfficeModal}
            setDeleteModal={setDeleteModal}
            setSelectedOffice={setSelectedOffice}
            data={offices}
          />
        )}
        {!loading && offices.length <= 0 && (
          <NoData title={"There's no office, please add one."} />
        )}
      </div>
    </DashboardLayout>
  );
};

export default Offices;
