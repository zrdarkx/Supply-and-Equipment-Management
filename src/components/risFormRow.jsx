const RisFormRow = ({
  stockNo,
  unit,
  decription,
  rQuantity,
  stockAvailable,
  iQuantity,
  remarks,
  hide,
}) => {
  return (
    <div className="border border-black flex border-t-0">
      <div className="basis-1/12 border border-black p-2 text-center">
        <h1 className={`${hide ? "opacity-0" : ""}`}>{stockNo} </h1>
      </div>
      <div className="basis-1/12 border border-black p-2 text-center">
        <h1 className={`${hide ? "opacity-0" : ""}`}>{unit}</h1>
      </div>
      <div className="basis-3/12 border border-black p-2 text-center">
        <h1 className={`${hide ? "opacity-0" : ""}`}>{decription}</h1>
      </div>

      <div className="basis-1/12 border border-black p-2 text-center">
        <h1 className={`${hide ? "opacity-0" : ""}`}>{rQuantity}</h1>
      </div>
      <div className="basis-1/12 border border-black p-2 text-center">
        <h1 className={`${hide ? "opacity-0" : ""}`}>
          {stockAvailable ? "✅" : ""}
        </h1>
      </div>
      <div className="basis-1/12 border border-black p-2 text-center">
        <h1 className={`${hide ? "opacity-0" : ""}`}>
          {!stockAvailable ? "✅" : ""}
        </h1>
      </div>
      <div className="basis-2/12 border border-black p-2 text-center">
        <h1 className={`${hide ? "opacity-0" : ""}`}>{iQuantity}</h1>
      </div>
      <div className="basis-2/12 border border-black p-2 text-center">
        <h1 className={`${hide ? "opacity-0" : ""}`}>{remarks}</h1>
      </div>
    </div>
  );
};

export default RisFormRow;
