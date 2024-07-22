import { HiOutlineTable } from "react-icons/hi";
import ContentHeader from "../components/contentHeader";
import SemTitle from "../components/semTitle";
import DashboardLayout from "../layout/dashboardLayout";

const Equipment = () => {
  return (
    <>
      <div className="wrapper p-5">
        <ContentHeader
          title="Equipment"
          Icon={HiOutlineTable}
          tooltip={"Add equipmente to the system"}
        />

        {/* {loading && <Loading />}

        {!loading && data.length <= 0 && (
          <NoData title={"There's no supply, please add one."} />
        )}

        {!loading && data.length >= 1 && (
          <SemSupplyTable
            handleSelectedSupplyUpdate={handleSelectedSupplyUpdate}
            setSupplyModal={setSupplyModal}
            setSelectedSupply={setSelectedSupply}
            setDeleteModal={setDeleteModal}
            data={data}
          />
        )} */}
      </div>
    </>
  );
};

export default Equipment;
