import { Badge, Button, Dropdown, Table, Tooltip } from "flowbite-react";
import moment from "moment";
import useGetSupply from "../hooks/useGetSupply";
import useGetEquipment from "../hooks/useGetEquipment";
import { useSemStore } from "../zustand/store";
import useUpdateTransaction from "../hooks/useUpdateTransaction";

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
  const { approveTransaction, rejectTransaction } = useUpdateTransaction();
  const isAdmin = currentUser?.role == "Admin";

  const handleGetSupply = (id) => {
    const output = supply.filter((item) => {
      if (item.id == id) {
        return item;
      }
    });

    return output[0];
  };

  const handleGetEquipment = (id) => {
    const output = equipment.filter((item) => {
      if (item.id == id) {
        return item;
      }
    });

    return output[0];
  };

  const getBadgeColor = (status) => {
    if (status === "Pendiente") {
      return "warning";
    } else if (status === "Aprobado") {
      return "green";
    } else {
      return "failure";
    }
  };

  console.log(data);

  return (
    <div className="overflow-x-auto">
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
              const date = moment(firebaseDate?.toDate()).format("LLL");
              const badgeColor = getBadgeColor(item.status);

              let finalItem = undefined;

              if (item.item.category == "supply") {
                finalItem = handleGetSupply(item.item.id);
              } else {
                finalItem = handleGetEquipment(item.item.id);
              }

              return (
                <Table.Row key={item.id}>
                  <Table.Cell className="bg-slate-800  text-white">
                    {user.firstName + " " + user.lastName}
                  </Table.Cell>
                  <Table.Cell className="bg-slate-800  text-white">
                    {user.office}
                  </Table.Cell>
                  <Table.Cell className="bg-slate-800  text-white">
                    {item.category}
                  </Table.Cell>
                  <Table.Cell className="bg-slate-800  text-white">
                    {item.reviewBy ? item.reviewBy : "Pendiente de aprobación"}
                  </Table.Cell>
                  <Table.Cell className="bg-slate-800  text-white">
                    {date}
                  </Table.Cell>
                  <Table.Cell className="bg-slate-800  text-white">
                    <Badge color={badgeColor} size={"lg"}>
                      {item.status}
                    </Badge>
                  </Table.Cell>

                  <Table.Cell className="bg-slate-800  text-white">
                    <Dropdown
                      placement="left"
                      label="Formularios"
                      dismissOnClick={false}
                    >
                      <Tooltip
                        content="Puedes ver el formulario de SEM ahora"
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
                          item.status !== "Aprobado"
                            ? "Tu documento aún no está aprobado"
                            : "Puedes ver el formulario de RCI ahora"
                        }
                      >
                        {item.category == "Supply" && (
                          <Dropdown.Item
                            style={{
                              cursor:
                                item.status !== "Aprobado"
                                  ? "not-allowed"
                                  : "pointer",
                            }}
                            disabled={item.status !== "Aprobado"}
                            onClick={() => {
                              setCurrentTransaction(item);
                              setIcsForm(true);
                            }}
                          >
                            {" "}
                            Ver Formulario de RCI
                          </Dropdown.Item>
                        )}

                        {item.category == "Equipment" && (
                          <Dropdown.Item
                            style={{
                              cursor:
                                item.status !== "Aprobado"
                                  ? "not-allowed"
                                  : "pointer",
                            }}
                            disabled={item.status !== "Aprobado"}
                            onClick={() => {
                              setCurrentTransaction(item);
                              setParForm(true);
                            }}
                          >
                            {" "}
                            Ver Formulario de RRB
                          </Dropdown.Item>
                        )}
                      </Tooltip>
                    </Dropdown>
                  </Table.Cell>
                  {isAdmin && (
                    <Table.Cell className="bg-slate-800  text-white ">
                      <div className="wrapper flex">
                        <Button
                          disabled={
                            item.status == "Aprobado" ||
                            item.status === "Rechazado"
                          }
                          onClick={() =>
                            approveTransaction(item.id, currentUser, item.item)
                          }
                          className="mr-2"
                          gradientMonochrome="success"
                        >
                          Aprobar
                        </Button>
                        <Button
                          onClick={() =>
                            rejectTransaction(item.id, currentUser)
                          }
                          disabled={
                            item.status == "Aprobado" ||
                            item.status === "Rechazado"
                          }
                          gradientMonochrome="failure"
                        >
                          Rechazar
                        </Button>
                      </div>
                    </Table.Cell>
                  )}
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      )}
    </div>
  );
};

export default SemTransactionTable;
