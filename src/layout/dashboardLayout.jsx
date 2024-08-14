import { useState } from "react";
import DashboardHeader from "../components/dashboardHeader";
import SemSidebar from "../components/semSidebar";
import SemModal from "../components/semModal";
import { Button, Tabs } from "flowbite-react";
import { HiOutlineTable, HiViewGrid } from "react-icons/hi";
import Supply from "../pages/supply";
import Equipment from "../pages/equipment";
import { useSemStore } from "../zustand/store";
import NoData from "../components/noData";
import useAddTransaction from "../hooks/useAddTransaction";
import { toast } from "react-toastify";
import RisFormRow from "../components/risFormRow";
import RisFormDummyRow from "../components/risFormDummyRow";

const DashboardLayout = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [risForm, setRisForm] = useState(false);

  const {
    cartSupply,
    cartEquipment,
    currentUser,
    setCartEquipment,
    setCartSupply,
  } = useSemStore();
  const { addTransaction } = useAddTransaction();

  const isSupplyCartEmpty = cartSupply.length <= 0;
  const isEquipmentCartEmpty = cartEquipment.length <= 0;

  const handleAddTransaction = () => {
    addTransaction(cartSupply, cartEquipment, currentUser);
    setCartModal(false);
    toast.success("Success");
    setCartEquipment([]);
    setCartSupply([]);
  };

  return (
    <div className="w-full min-h-screen bg-slate-950 pb-10">
      <SemModal
        dark={true}
        title={`Your Item Cart`}
        size={"xxl"}
        open={cartModal}
        handleClose={() => setCartModal(false)}
      >
        <div className="container">
          <Tabs variant="pills" className="mx-5 mb-5">
            <Tabs.Item active title="Supply" icon={HiOutlineTable}>
              {isSupplyCartEmpty ? (
                <NoData title={"Your cart is empty try addding one."} />
              ) : (
                <Supply cart={true} />
              )}
            </Tabs.Item>
            <Tabs.Item title="Equipment" icon={HiViewGrid}>
              {isEquipmentCartEmpty ? (
                <NoData title={"Your cart is empty try addding one."} />
              ) : (
                <Equipment cart={true} />
              )}
            </Tabs.Item>
          </Tabs>
        </div>
        <div className="w-full flex flex-row">
          <Button color={"success"} className="w-full py-2 mx-3">
            Add Unique
          </Button>
          <Button onClick={() => setRisForm(true)} className="w-full py-2 mx-3">
            Finalize Supply
          </Button>
        </div>
      </SemModal>
      <SemModal
        title={`RIS Form`}
        size={"6xl"}
        open={risForm}
        handleClose={() => setRisForm(false)}
      >
        <div className="container mx-auto p-5">
          <div className="wrapper">
            <h1 className="font-bold text-center text-2xl">
              REQUISITION AND ISSUE SLIP{" "}
            </h1>
            <div className="flex justify-between items-center mt-2">
              <h1>Entity Name :CNSC </h1>
              <h1>Fund Cluster : 07 - Trust Receipts fund</h1>
            </div>
          </div>
          <div className="border border-slate-950 flex">
            <div className="basis-8/12 border border-slate-950 p-2">
              <div className="flex flex-col ml-3">
                <h1>Division: OVPRE </h1>
                <h1>Office: FTO </h1>
              </div>
            </div>
            <div className="basis-4/12 border border-slate-950">
              <div className="flex flex-col ml-3">
                <h1>Responsibility Center Code: ___________</h1>
                <h1>RIS No.: _____</h1>
              </div>
            </div>
          </div>
          <div className="border border-slate-950 flex border-t-0">
            <div className="basis-6/12 border border-slate-950 p-2 text-center">
              <h1>Requisition </h1>
            </div>
            <div className="basis-2/12 border border-slate-950 p-2 text-center">
              <h1>Stock Available?</h1>
            </div>
            <div className="basis-4/12 border border-slate-950 p-2 text-center">
              <h1>Issue</h1>
            </div>
          </div>
          <div className="border border-slate-950 flex border-t-0">
            <div className="basis-1/12 border border-slate-950 p-2 text-center">
              <h1>Stock No. </h1>
            </div>
            <div className="basis-1/12 border border-slate-950 p-2 text-center">
              <h1>Unit</h1>
            </div>
            <div className="basis-3/12 border border-slate-950 p-2 text-center">
              <h1>Description</h1>
            </div>

            <div className="basis-1/12 border border-slate-950 p-2 text-center">
              <h1>Quantity</h1>
            </div>
            <div className="basis-1/12 border border-slate-950 p-2 text-center">
              <h1>Yes</h1>
            </div>
            <div className="basis-1/12 border border-slate-950 p-2 text-center">
              <h1>No</h1>
            </div>
            <div className="basis-2/12 border border-slate-950 p-2 text-center">
              <h1>Quantity</h1>
            </div>
            <div className="basis-2/12 border border-slate-950 p-2 text-center">
              <h1>Remarks</h1>
            </div>
          </div>
          {cartSupply.map((item) => {
            console.log(item);
            return (
              <RisFormRow
                stockNo={item.inventoryNumber}
                unit={item.unit}
                decription={item.name + " | " + item.description}
                rQuantity={item.quantity}
                stockAvailable={item.quantity !== 0 ? true : false}
                iQuantity={item.quantity}
                remarks={item.remarks}
              />
            );
          })}

          <RisFormDummyRow />
          <div className="border border-slate-950 p-10 text-center">
            <h1>
              Purpose: Other supplies and materials to be used for Survey,
              Research, Exploration and Development expenses.{" "}
            </h1>
          </div>
          <Button className="w-full mt-5 py-3">Submit</Button>
        </div>
      </SemModal>

      <SemSidebar isOpen={isOpen} handleClose={() => setOpen(false)} />
      <DashboardHeader
        setCartModal={setCartModal}
        handleOpenSidebar={() => setOpen(true)}
      />
      <div className="w-full px-0 lg:px-10">{children}</div>
    </div>
  );
};

export default DashboardLayout;
