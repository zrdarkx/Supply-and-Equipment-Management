import { Button } from "flowbite-react";
import RisFormDummyRow from "./risFormDummyRow";
import SemModal from "./semModal";
import RisFormRow from "./risFormRow";
import useAddTransaction from "../hooks/useAddTransaction";
import { useSemStore } from "../zustand/store";

const RisFormModal = ({ title, size, open, handleClose, data }) => {
  const { addTransaction, addSupplyTransaction } = useAddTransaction();
  const { currentUser } = useSemStore();

  return (
    <SemModal title={title} size={size} open={open} handleClose={handleClose}>
      <div className="container mx-auto p-2">
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
        {data.map((item) => {
          console.log(item);
          return (
            <RisFormRow
              key={item.id}
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
        <Button
          onClick={() => addSupplyTransaction(data, currentUser)}
          className="w-full mt-5 py-3"
        >
          Submit Supply RIS
        </Button>
      </div>
    </SemModal>
  );
};

export default RisFormModal;
