import { Tabs } from "flowbite-react";
import DashboardLayout from "../layout/dashboardLayout";
import { HiOfficeBuilding, HiOutlineTable, HiViewGrid } from "react-icons/hi";
import Offices from "./offices";
import Supply from "./supply";

const MasterRecords = () => {
  return (
    <DashboardLayout>
      <div className="container">
        <Tabs variant="pills" className="mx-5">
          <Tabs.Item active title="Supply" icon={HiOutlineTable}>
            <Supply />
          </Tabs.Item>
          <Tabs.Item title="Equipment" icon={HiViewGrid}></Tabs.Item>
          <Tabs.Item title="Office" icon={HiOfficeBuilding}>
            <Offices />
          </Tabs.Item>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default MasterRecords;
