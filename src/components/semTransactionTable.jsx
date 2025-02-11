import { Badge, Button, Dropdown, Table, Tooltip } from "flowbite-react";
import moment from "moment";
import "moment/locale/es";
import useGetSupply from "../hooks/useGetSupply";
import useGetEquipment from "../hooks/useGetEquipment";
import { useSemStore } from "../zustand/store";
import useUpdateTransaction from "../hooks/useUpdateTransaction";
import useDeleteTransaction from "../hooks/useDeleteTransaction";
import RejectReasonModal from "./RejectReasonModal";
import { useState } from "react";
import StatusTimestamps from "./StatusTimestamps";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import CustomConfirmationModal from "./CustomConfirmationModal";
import EquipmentReturnModal from "./EquipmentReturnModal"; // Import the Equipment Return Modal

const SemTransactionTable = ({
  data,
  setCurrentTransaction,
  setRisForm,
  setIcsForm,
  setParForm,
}) => {
  const { data: supply } = useGetSupply();
  const { data: equipment } = useGetEquipment();
  const { currentUser } = useSemStore();
  const {
    approveTransaction,
    rejectTransaction,
    deliverTransaction,
    returnTransaction,
  } = useUpdateTransaction();
  const { deleteTransaction } = useDeleteTransaction();
  const [rejectModalOpen, setRejectModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState();
  const [expandedRow, setExpandedRow] = useState(null);

  // States for confirmation modals
  const [confirmApproveOpen, setConfirmApproveOpen] = useState(false);
  const [confirmRejectOpen, setConfirmRejectOpen] = useState(false);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [confirmDeliverOpen, setConfirmDeliverOpen] = useState(false);
  const [returnModalOpen, setReturnModalOpen] = useState(false); // State for the equipment return modal

  const [transactionToApprove, setTransactionToApprove] = useState(null);
  const [transactionToDelete, setTransactionToDelete] = useState(null);
  const [transactionToDeliver, setTransactionToDeliver] = useState(null);
  const [transactionToReturn, setTransactionToReturn] = useState(null); // State for the transaction to be returned

  const isAdmin = currentUser?.role === "Admin";
  const isSupplyCoordinator =
    currentUser?.role === "Coordinador de Suministros del Departamento";

  const handleGetSupply = (id) => {
    const output = supply.filter((item) => item.id === id);
    return output[0];
  };

  const handleGetEquipment = (id) => {
    const output = equipment.filter((item) => item.id === id);
    return output[0];
  };

  const getBadgeColor = (status) => {
    switch (status) {
      case "Pendiente":
        return "warning";
      case "Aprobado":
        return "success";
      case "Entregado":
        return "purple";
      case "Devuelto":
        return "indigo";
      case "Rechazado":
        return "failure";
      default:
        return "gray";
    }
  };

  const toggleDetails = (transactionId) => {
    setExpandedRow(expandedRow === transactionId ? null : transactionId);
  };

  const handleApproveClick = (item) => {
    setTransactionToApprove(item);
    setConfirmApproveOpen(true);
  };

  const handleApproveConfirm = () => {
    approveTransaction(transactionToApprove.id, currentUser, [
      transactionToApprove.item,
    ]);
    setConfirmApproveOpen(false);
    setTransactionToApprove(null);
  };

  const handleDeleteClick = (item) => {
    setTransactionToDelete(item);
    setConfirmDeleteOpen(true);
  };

  const handleDeleteConfirm = () => {
    deleteTransaction(transactionToDelete.id);
    setConfirmDeleteOpen(false);
    setTransactionToDelete(null);
  };

  const handleDeliverClick = (item) => {
    setTransactionToDeliver(item);
    setConfirmDeliverOpen(true);
  };

  const handleDeliverConfirm = async () => {
    try {
      await deliverTransaction(
        transactionToDeliver.id,
        currentUser,
        transactionToDeliver.item
      );
      setConfirmDeliverOpen(false);
      setTransactionToDeliver(null);
    } catch (error) {
      console.error("Error en handleDeliverConfirm:", error);
      alert("Error al entregar la transacción: " + error.message);
    }
  };

  const handleReturnClick = (item) => {
    setTransactionToReturn(item); // Store the current transaction
    setReturnModalOpen(true); // Open the observations modal
  };

  const handleReturnConfirm = async (observation) => {
    // Receives the observation
    try {
      await returnTransaction(
        transactionToReturn.id,
        currentUser,
        transactionToReturn.item,
        observation
      ); // Pass the observation
      setReturnModalOpen(false);
      setTransactionToReturn(null); // Clear the selected transaction
    } catch (error) {
      console.error("Error in handleReturnConfirm", error);
      alert("Error al devolver la transacción: " + error.message);
    }
  };

  return (
    <div className="overflow-x-auto">
      <RejectReasonModal
        open={rejectModalOpen}
        handleClose={() => setRejectModalOpen(false)}
        onReject={(reason) => {
          rejectTransaction(selectedTransaction?.id, currentUser, reason);
        }}
      />
      {/* Add the new modal */}
      <EquipmentReturnModal
        open={returnModalOpen}
        handleClose={() => setReturnModalOpen(false)}
        onReturn={handleReturnConfirm} // Pass the confirmation function
      />

      {/* Confirmation Modals */}
      <CustomConfirmationModal
        isOpen={confirmApproveOpen}
        onClose={() => setConfirmApproveOpen(false)}
        onConfirm={handleApproveConfirm}
        message="¿Está seguro de que desea aprobar esta transacción?"
      />

      <CustomConfirmationModal
        isOpen={confirmRejectOpen}
        onClose={() => {
          setConfirmRejectOpen(false);
          setSelectedTransaction(null);
        }}
        onConfirm={() => {
          rejectTransaction(
            selectedTransaction?.id,
            currentUser,
            "Razón por defecto"
          );
          setConfirmRejectOpen(false);
        }}
        message="¿Está seguro de que desea rechazar esta transacción?"
      />

      <CustomConfirmationModal
        isOpen={confirmDeleteOpen}
        onClose={() => setConfirmDeleteOpen(false)}
        onConfirm={handleDeleteConfirm}
        message="¿Está seguro de que desea eliminar esta transacción?"
      />

      <CustomConfirmationModal
        isOpen={confirmDeliverOpen}
        onClose={() => setConfirmDeliverOpen(false)}
        onConfirm={handleDeliverConfirm}
        message="¿Está seguro de que desea marcar esta transacción como entregada?"
      />

      {data && (
        <Table>
          <Table.Head>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Usuario
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Nombre de la Oficina
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Categoría
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Revisado por
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Creado el
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Estado
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Formulario
            </Table.HeadCell>

            {isAdmin && (
              <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
                Acción
              </Table.HeadCell>
            )}
          </Table.Head>
          <Table.Body className="divide-y">
            {data?.map((item) => {
              const user = JSON.parse(item.currentUser);
              const firebaseDate = item.createdAt;
              const date = moment(firebaseDate?.toDate()).format(
                "DD / MM / YYYY, h:mm a"
              );
              const badgeColor = getBadgeColor(item.status);

              let finalItem = undefined;

              if (item.item.category === "supply") {
                finalItem = handleGetSupply(item.item.id);
              } else {
                finalItem = handleGetEquipment(item.item.id);
              }

              return (
                <>
                  <Table.Row key={item.id}>
                    <Table.Cell className="bg-slate-800 text-white">
                      {user.firstName + " " + user.lastName}
                    </Table.Cell>
                    <Table.Cell className="bg-slate-800 text-white">
                      {user.office}
                    </Table.Cell>
                    <Table.Cell className="bg-slate-800 text-white">
                      {item.category}
                    </Table.Cell>
                    <Table.Cell className="bg-slate-800 text-white">
                      {item.reviewBy
                        ? item.reviewBy
                        : "Pendiente de aprobación"}
                    </Table.Cell>
                    <Table.Cell className="bg-slate-800 text-white">
                      {date}
                    </Table.Cell>
                    <Table.Cell
                      className="bg-slate-800 text-white cursor-pointer"
                      onClick={() => toggleDetails(item.id)}
                    >
                      <div className="flex items-center gap-2">
                        <Badge color={badgeColor} size="lg">
                          {item.status}
                        </Badge>
                        {expandedRow === item.id ? (
                          <HiChevronUp className="h-4 w-4" />
                        ) : (
                          <HiChevronDown className="h-4 w-4" />
                        )}
                      </div>
                    </Table.Cell>

                    <Table.Cell className="bg-slate-800 text-white">
                      <Dropdown
                        placement="left"
                        label="Formularios"
                        dismissOnClick={false}
                      >
                        <Tooltip
                          content={
                            ["Aprobado", "Entregado", "Devuelto"].includes(
                              item.status
                            )
                              ? "Puedes ver el formulario de SEM ahora"
                              : "Puedes ver el formulario de SEM" // Changed message
                          }
                          placement="left"
                        >
                          <Dropdown.Item
                            onClick={() => {
                              setCurrentTransaction(item);
                              setRisForm(true);
                            }}
                          >
                            Ver Formulario de SEM
                          </Dropdown.Item>
                        </Tooltip>

                        <Tooltip
                          placement="left"
                          content={
                            ["Aprobado", "Entregado", "Devuelto"].includes(
                              item.status
                            )
                              ? item.category === "Suministro"
                                ? "Puedes ver el formulario de RCI ahora"
                                : "Puedes ver el formulario de RRB ahora"
                              : "Tu documento aún no está aprobado, entregado o devuelto"
                          }
                        >
                          {item.category === "Suministro" && (
                            <Dropdown.Item
                              style={{
                                cursor: [
                                  "Aprobado",
                                  "Entregado",
                                  "Devuelto",
                                ].includes(item.status)
                                  ? "pointer"
                                  : "not-allowed",
                              }}
                              disabled={
                                !["Aprobado", "Entregado", "Devuelto"].includes(
                                  item.status
                                )
                              }
                              onClick={() => {
                                setCurrentTransaction(item);
                                setIcsForm(true);
                              }}
                            >
                              Ver Formulario de RCI
                            </Dropdown.Item>
                          )}

                          {item.category === "Equipos" && (
                            <Dropdown.Item
                              style={{
                                cursor: [
                                  "Aprobado",
                                  "Entregado",
                                  "Devuelto",
                                ].includes(item.status)
                                  ? "pointer"
                                  : "not-allowed",
                              }}
                              disabled={
                                !["Aprobado", "Entregado", "Devuelto"].includes(
                                  item.status
                                )
                              }
                              onClick={() => {
                                setCurrentTransaction(item);
                                setParForm(true);
                              }}
                            >
                              Ver Formulario de RRB
                            </Dropdown.Item>
                          )}
                        </Tooltip>
                      </Dropdown>
                    </Table.Cell>

                    {isAdmin && (
                      <Table.Cell className="bg-slate-800 text-white">
                        <div className="wrapper flex">
                          <Button
                            disabled={
                              item.status === "Aprobado" ||
                              item.status === "Rechazado" ||
                              item.status === "Entregado" ||
                              item.status === "Devuelto"
                            }
                            onClick={() => handleApproveClick(item)}
                            className="mr-2"
                            gradientMonochrome="success"
                          >
                            Aprobar
                          </Button>

                          <Button
                            onClick={() => {
                              setSelectedTransaction(item);
                              setRejectModalOpen(true);
                            }}
                            disabled={item.status !== "Pendiente"}
                            gradientMonochrome="failure"
                          >
                            Rechazar
                          </Button>

                          <Button
                            onClick={() => handleDeliverClick(item)}
                            disabled={item.status !== "Aprobado"}
                            className="ml-2"
                            gradientMonochrome="purple"
                          >
                            Entregar
                          </Button>

                          <Button
                            onClick={() => handleDeleteClick(item)}
                            className="ml-2"
                            gradientMonochrome="failure"
                          >
                            Eliminar
                          </Button>
                        </div>
                      </Table.Cell>
                    )}
                  </Table.Row>

                  {expandedRow === item.id && (
                    <Table.Row className="!border-b-0 bg-gray-50 dark:bg-gray-800">
                      <Table.Cell colSpan={8} className="p-0">
                        <StatusTimestamps transaction={item} />

                        {isAdmin &&
                          item.status === "Entregado" &&
                          item.category === "Equipos" && (
                            <Button
                              onClick={() => handleReturnClick(item)} // Open the modal
                              gradientMonochrome="success"
                            >
                              Devolver Equipo
                            </Button>
                          )}
                      </Table.Cell>
                    </Table.Row>
                  )}
                </>
              );
            })}
          </Table.Body>
        </Table>
      )}
    </div>
  );
};

export default SemTransactionTable;
