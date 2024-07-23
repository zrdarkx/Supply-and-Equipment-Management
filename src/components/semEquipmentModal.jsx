import { Button, Dropdown, Table, Tooltip } from "flowbite-react";
import { HiOutlineCog, HiTrash } from "react-icons/hi";

export function SemEquipmentTable({
  data,
  setSelectedEquip,
  setDeleteModal,
  setEquipModal,
  setIsUpdate,
  handleUpdateEquipForm,
}) {
  return (
    <div className="overflow-x-auto ">
      {data && (
        <Table striped hoverable>
          <Table.Head>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              #
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Property Number
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Name
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Quantity
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Unit
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Unit Cost
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Description
            </Table.HeadCell>

            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Action
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data.map((item, index) => {
              return (
                <Table.Row key={item.id}>
                  <Table.Cell className="bg-slate-800  text-white">
                    {index + 1}
                  </Table.Cell>{" "}
                  <Table.Cell className="bg-slate-800  text-white">
                    {item.propertyNumber}
                  </Table.Cell>{" "}
                  <Table.Cell className="bg-slate-800  text-white font-bold">
                    {item.name}
                  </Table.Cell>{" "}
                  <Table.Cell className="bg-slate-800  text-white">
                    {item.quantity}
                  </Table.Cell>{" "}
                  <Table.Cell className="bg-slate-800  text-white">
                    {item.unit}
                  </Table.Cell>{" "}
                  <Table.Cell className="bg-slate-800  text-white">
                    {item.unitCost}
                  </Table.Cell>{" "}
                  <Table.Cell className="bg-slate-800  text-white">
                    {item.description}
                  </Table.Cell>{" "}
                  <Table.Cell className="bg-slate-800 rounded-lg text-white ">
                    <div className="flex">
                      <Tooltip content="Update office name">
                        <Button
                          className="mr-5"
                          onClick={() => {
                            setEquipModal(true);
                            handleUpdateEquipForm(item);
                            setIsUpdate(true);
                          }}
                          gradientMonochrome="info"
                        >
                          <HiOutlineCog
                            color="white"
                            className="mr-2 h-5 w-5"
                          />
                          Update
                        </Button>
                      </Tooltip>
                      <Tooltip content="Delete the office permanently">
                        <Button
                          onClick={() => {
                            setDeleteModal(true);
                            setSelectedEquip(item);
                          }}
                          gradientMonochrome="failure"
                        >
                          {" "}
                          <HiTrash color="white" className="mr-2 h-5 w-5" />
                          Delete
                        </Button>
                      </Tooltip>
                    </div>
                  </Table.Cell>{" "}
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      )}
    </div>
  );
}
