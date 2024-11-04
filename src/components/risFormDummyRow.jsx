import RisFormRow from "./risFormRow";

const RisFormDummyRow = () => {
  return (
  <>
  <RisFormRow
      hide
      stockNo="2345"
      unit="Resmas"
      decription="Resma de papel carta"
      rQuantity={50}
      stockAvailable={true}
      iQuantity={50}
      remarks="hihihihi"
    />
  <RisFormRow
      hide
      stockNo="3456"
      unit="Unidades"
      decription="Cargador de batería portátil"
      rQuantity={20}
      stockAvailable={true}
      iQuantity={20}
      remarks="hihihihi"
    />
  <RisFormRow
      hide
      stockNo="4567"
      unit="Unidades"
      decription="Auriculares inalámbricos"
      rQuantity={15}
      stockAvailable={true}
      iQuantity={15}
      remarks="hihihihi"
    />
  <RisFormRow
      hide
      stockNo="5678"
      unit="Unidades"
      decription="Teclado mecánico"
      rQuantity={10}
      stockAvailable={true}
      iQuantity={10}
      remarks="hihihihi"
    />
  <RisFormRow
      hide
      stockNo="6789"
      unit="Unidades"
      decription="Ratón inalámbrico"
      rQuantity={25}
      stockAvailable={true}
      iQuantity={25}
      remarks="hihihihi"
    />
  <RisFormRow
      hide
      stockNo="7890"
      unit="Unidades"
      decription="Altavoces Bluetooth"
      rQuantity={18}
      stockAvailable={true}
      iQuantity={18}
      remarks="hihihihi"
    />
  <RisFormRow
      hide
      stockNo="8901"
      unit="Unidades"
      decription="Powerbank de 10000mAh"
      rQuantity={22}
      stockAvailable={true}
      iQuantity={22}
      remarks="hihihihi"
    />
  </>
  );
};

export default RisFormDummyRow;