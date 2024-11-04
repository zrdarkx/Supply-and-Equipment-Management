import { Button } from "flowbite-react";
import SemInput from "./semInput";
import SemModal from "./semModal";

const AddEquipmentModal = ({
  size,
  title,
  open,
  handleClose,
  forms,
  handleUpdateForm,
  handleSubmit,
  isUpdate,
}) => {
  return (
    <SemModal size={size} title={title} open={open} handleClose={handleClose}>
      <div className="flex flex-row">
        <div className="basis-6/12 mx-3">
          <SemInput
            value={forms.name}
            color={"gray"}
            name={"name"}
            label="Nombre"
            placeholder="Ingrese nombre"
            event={handleUpdateForm}
          />
          <SemInput
            value={forms.quantity}
            name={"quantity"}
            color={"gray"}
            label="Cantidad"
            placeholder="Ingrese cantidad"
            event={handleUpdateForm}
          />
          <SemInput
            value={forms.unit}
            name={"unit"}
            color={"gray"}
            label="Unidad"
            placeholder="Ingrese unidad"
            event={handleUpdateForm}
          />
          <SemInput
            value={forms.unitCost}
            name={"unitCost"}
            color={"gray"}
            label="Costo Unitario"
            placeholder="Ingrese costo unitario"
            event={handleUpdateForm}
          />
        </div>
        <div className="basis-6/12">
          <SemInput
            value={forms.description}
            name={"description"}
            color={"gray"}
            label="Descripción"
            placeholder="Ingrese descripción"
            event={handleUpdateForm}
          />

          <SemInput
            value={forms.propertyNumber}
            name={"propertyNumber"}
            color={"gray"}
            label="Número de Propiedad"
            placeholder="Ingrese número de propiedad"
            event={handleUpdateForm}
          />
        </div>{" "}
      </div>

      <Button
        onClick={handleSubmit}
        gradientMonochrome="info"
        className="w-full mt-5 py-2"
      >
        {isUpdate ? "Actualizar Equipo" : "Agregar Equipo"}
      </Button>
    </SemModal>
  );
};

export default AddEquipmentModal;
