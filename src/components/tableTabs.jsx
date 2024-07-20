import { Tabs } from "flowbite-react";
import { HiOutlineTable, HiViewGrid } from "react-icons/hi";

export function TableTabs() {
  return (
    <Tabs>
      <Tabs.Item active title="Supply" icon={HiOutlineTable}></Tabs.Item>
      <Tabs.Item active title="Equipment" icon={HiViewGrid}></Tabs.Item>
    </Tabs>
  );
}
