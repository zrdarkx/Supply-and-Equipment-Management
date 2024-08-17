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
import RisFormModal from "../components/risFormModal";

const Transaction = () => {
  const { data, loading } = useGetTransaction();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [currentTransaction, setCurrentTransaction] = useState();
  const [risForm, setRisForm] = useState(false);

  const filterByCategory = data.filter((item) => {
    if (item.category == category) {
      return item;
    }
  });

  return (
    <DashboardLayout>
      {loading && <Loading />}

      <RisFormModal
        title={`RIS Form`}
        size={"6xl"}
        open={risForm}
        handleClose={() => setRisForm(false)}
        data={currentTransaction?.item}
      />

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
                color={category === "Supply" ? "info" : "gray"}
                onClick={() => setCategory("Supply")}
              >
                <HiOutlineTable className="mr-3 h-4 w-4" />
                Supply
              </Button>
              <Button
                color={category === "Equipment" ? "info" : "gray"}
                onClick={() => setCategory("Equipment")}
              >
                <HiViewGrid className="mr-3 h-4 w-4" />
                Equipment
              </Button>
            </Button.Group>
          </div>

          <SemTransactionTable
            setCurrentTransaction={setCurrentTransaction}
            setRisForm={setRisForm}
            data={category !== "all" ? filterByCategory : data}
          />
        </div>
      )}
    </DashboardLayout>
  );
};

export default Transaction;
