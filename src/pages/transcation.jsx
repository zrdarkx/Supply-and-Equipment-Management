import { useState } from "react";
import SemInput from "../components/semInput";
import SemTitle from "../components/semTitle";
import SemTransactionTable from "../components/semTransactionTable";
import useGetTransaction from "../hooks/useGetTransaction";
import DashboardLayout from "../layout/dashboardLayout";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Button } from "flowbite-react";
import { HiOutlineTable, HiUserCircle, HiViewGrid } from "react-icons/hi";
import Loading from "../components/loading";

const Transaction = () => {
  const { data, loading } = useGetTransaction();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filterByCategory = data.filter((item) => {
    console.log(item);
    if (item.item.category == category) {
      return item;
    }
  });

  return (
    <DashboardLayout>
      {loading && <Loading />}

      {!loading && (
        <div className="wrapper p-0 lg:p-5 m-5 lg:m-0">
          <div className="wrapper flex items-center justify-between">
            <Button.Group className="mb-2">
              <Button
                color={category === "all" ? "info" : "gray"}
                onClick={() => setCategory("all")}
              >
                All
              </Button>
              <Button
                color={category === "supply" ? "info" : "gray"}
                onClick={() => setCategory("supply")}
              >
                <HiOutlineTable className="mr-3 h-4 w-4" />
                Supply
              </Button>
              <Button
                color={category === "equipment" ? "info" : "gray"}
                onClick={() => setCategory("equipment")}
              >
                <HiViewGrid className="mr-3 h-4 w-4" />
                Equipment
              </Button>
            </Button.Group>
          </div>

          <SemTransactionTable
            data={category !== "all" ? filterByCategory : data}
          />
        </div>
      )}
    </DashboardLayout>
  );
};

export default Transaction;
