import { Tabs } from "flowbite-react";
import DashboardLayout from "../layout/dashboardLayout";
import { HiOfficeBuilding, HiOutlineTable, HiViewGrid } from "react-icons/hi";
import Offices from "./offices";
import Supply from "./supply";
import Equipment from "./equipment";
import { useSemStore } from "../zustand/store";

const MasterRecords = () => {
  const { currentUser } = useSemStore();
  const isAdmin = currentUser?.role == "Admin";

  return (
    <DashboardLayout>
      {/* DEPARTMENT */}

      {!isAdmin && (
        <div className="container mx-auto">
          <Tabs variant="pills" className="mx-5">
            <Tabs.Item active title="Suministros" icon={HiOutlineTable}>
              <Supply />
            </Tabs.Item>
            <Tabs.Item title="Equipos" icon={HiViewGrid}>
              <Equipment />
            </Tabs.Item>
          </Tabs>
        </div>
      )}

      {/* ADMIN */}
      {isAdmin && (
        <div className="container mx-auto">
          <Tabs variant="pills" className="mx-5">
            <Tabs.Item active title="Suministros" icon={HiOutlineTable}>
              <Supply />
            </Tabs.Item>
            <Tabs.Item title="Equipos" icon={HiViewGrid}>
              <Equipment />
            </Tabs.Item>
            <Tabs.Item title="Oficinas" icon={HiOfficeBuilding}>
              <Offices />
            </Tabs.Item>
          </Tabs>
        </div>
      )}
    </DashboardLayout>
  );
};

export default MasterRecords;
