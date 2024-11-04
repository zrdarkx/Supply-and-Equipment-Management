import { Button, Table, Tooltip } from "flowbite-react";
import moment from "moment";
import { HiLogin, HiOutlineCog, HiTrash } from "react-icons/hi";
import { useSemStore } from "../zustand/store";

export function SemOfficesTable({
  data,
  setSelectedOffice,
  setDeleteModal,
  setAddOfficeModal,
  handleUpdateOfficeForm,
}) {
  const { currentUser } = useSemStore();
  const isAdmin = currentUser.role == "Admin";
  return (
    <div className="overflow-x-auto">
      {data && (
        <Table striped>
          <Table.Head>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              ID de Oficina
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Nombre de la Oficina
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Creada el
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Acción
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data.map((item) => {
              const firebaseDate = item?.createdAt;
              const date = moment(firebaseDate?.toDate()).format("LLL");

              return (
                <Table.Row key={item.id}>
                  <Table.Cell className="bg-slate-800  text-white">
                    {item.id}
                  </Table.Cell>{" "}
                  <Table.Cell className="bg-slate-800  text-white font-bold">
                    {item.officeName}
                  </Table.Cell>{" "}
                  <Table.Cell className="bg-slate-800  text-white">
                    {date}
                  </Table.Cell>{" "}
                  {isAdmin && (
                    <Table.Cell className="bg-slate-800  text-white">
                      <div className="flex flex-row justify-center items-center">
                        <Tooltip content="Actualizar nombre de la oficina">
                          <Button
                            className="mr-5"
                            onClick={() => {
                              setSelectedOffice(item.id);
                              setAddOfficeModal(true);
                              handleUpdateOfficeForm(item);
                            }}
                            gradientMonochrome="info"
                          >
                            <HiOutlineCog
                              color="white"
                              className="mr-2 h-5 w-5"
                            />
                            Actualizar
                          </Button>
                        </Tooltip>
                        <Tooltip content="Eliminar la oficina de forma permanente">
                          <Button
                            onClick={() => {
                              setSelectedOffice(item.id);
                              setDeleteModal(true);
                            }}
                            gradientMonochrome="failure"
                          >
                            {" "}
                            <HiTrash color="white" className="mr-2 h-5 w-5" />
                            Eliminar
                          </Button>
                        </Tooltip>
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
}
