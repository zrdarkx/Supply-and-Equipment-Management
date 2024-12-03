import { useState } from "react";
import SemTransactionTable from "../components/semTransactionTable";
import useGetTransaction from "../hooks/useGetTransaction";
import DashboardLayout from "../layout/dashboardLayout";
import { Button } from "flowbite-react";
import { HiOutlineTable, HiViewGrid } from "react-icons/hi";
import Loading from "../components/loading";
import RisFormModal from "../components/risFormModal";
import IcsFormModal from "../components/IcsFormModal";
import ParFormModal from "../components/parFormModal";
import ApprovedEquipmentReport from "../components/approvedEquipmentReport";

const Transaction = () => {
  const { data, loading } = useGetTransaction();
  const [category, setCategory] = useState("all");
  const [currentTransaction, setCurrentTransaction] = useState();
  const [risForm, setRisForm] = useState(false);
  const [icsForm, setIcsForm] = useState(false);
  const [parForm, setParForm] = useState(false);
  const [approvedReportOpen, setApprovedReportOpen] = useState(false);

  const filterByCategory = data.filter((item) => {
    if (item.category === category) {
      return item;
    }
  });

  return (
    <DashboardLayout>
      {loading && <Loading />}

      <RisFormModal
        title={`Formulario SEM`}
        size={"6xl"}
        open={risForm}
        handleClose={() => setRisForm(false)}
        data={currentTransaction?.item}
      />

      <IcsFormModal
        title={`Formulario RCI`}
        size={"6xl"}
        open={icsForm}
        handleClose={() => setIcsForm(false)}
        data={currentTransaction}
      />

      <ParFormModal
        title={`Formulario RRB`}
        size={"6xl"}
        open={parForm}
        handleClose={() => setParForm(false)}
        data={currentTransaction}
      />

      {approvedReportOpen && (
        <ApprovedEquipmentReport
          title={`Informe de Transacciones Aprobadas`}
          size={"6xl"}
          open={approvedReportOpen}
          handleClose={() => setApprovedReportOpen(false)}
          data={currentTransaction}
        />
      )}

      {!loading && (
        <div className="wrapper p-0 lg:p-5 m-5 lg:m-0">
          <div className="wrapper flex items-center justify-between">
            <Button.Group className="mb-2">
              <Button
                color={category === "all" ? "info" : "gray"}
                onClick={() => setCategory("all")}
              >
                Todos
              </Button>
              <Button
                color={category === "Suministros" ? "info" : "gray"}
                onClick={() => setCategory("Suministro")}
              >
                <HiOutlineTable className="mr-3 h-4 w-4" />
                Suministros
              </Button>
              <Button
                color={category === "Equipos" ? "info" : "gray"}
                onClick={() => setCategory("Equipos")}
              >
                <HiViewGrid className="mr-3 h-4 w-4" />
                Equipos
              </Button>
            </Button.Group>
            <Button
              color="success"
              className="mb-2"
              onClick={() => setApprovedReportOpen(true)}
            >
              Ver Informe de Transacciones Aprobadas
            </Button>
          </div>

          <SemTransactionTable
            setCurrentTransaction={setCurrentTransaction}
            setIcsForm={setIcsForm}
            setRisForm={setRisForm}
            setParForm={setParForm}
            data={category !== "all" ? filterByCategory : data}
          />
        </div>
      )}
    </DashboardLayout>
  );
};

export default Transaction;
