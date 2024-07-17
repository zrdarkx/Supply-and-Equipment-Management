import { Button, Dropdown, Table, Tooltip } from "flowbite-react";
import moment from "moment";
import { HiLogin, HiOutlineCog, HiTrash } from "react-icons/hi";

export function SemSupplyTable({
  data,
  setSelectedSupply,
  setDeleteModal,
  setSupplyModal,
  handleSelectedSupplyUpdate,
}) {
  return (
    <div className="overflow-x-auto">
      {data && (
        <Table striped>
          <Table.Head>
            <Table.HeadCell className="bg-transparent text-white bg-blue-500">
              Inventory Number
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-white bg-blue-500">
              Name
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-white bg-blue-500">
              Quantity
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-white bg-blue-500">
              Unit
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-white bg-blue-500">
              Unit Cost
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-white bg-blue-500">
              Description
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-white bg-blue-500">
              Estimated Useful Life
            </Table.HeadCell>

            <Table.HeadCell className="bg-transparent text-white bg-blue-500">
              Action
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data.map((item) => {
              return (
                <Table.Row>
                  <Table.Cell className="bg-slate-800 rounded-lg border text-white border-white">
                    {item.inventoryNumber}
                  </Table.Cell>{" "}
                  <Table.Cell className="bg-slate-800 rounded-lg border text-white border-white">
                    {item.name}
                  </Table.Cell>{" "}
                  <Table.Cell className="bg-slate-800 rounded-lg border text-white border-white">
                    {item.quantity}
                  </Table.Cell>{" "}
                  <Table.Cell className="bg-slate-800 rounded-lg border text-white border-white">
                    {item.unit}
                  </Table.Cell>{" "}
                  <Table.Cell className="bg-slate-800 rounded-lg border text-white border-white">
                    {item.unitCost}
                  </Table.Cell>{" "}
                  <Table.Cell className="bg-slate-800 rounded-lg border text-white border-white">
                    {item.description}
                  </Table.Cell>{" "}
                  <Table.Cell className="bg-slate-800 rounded-lg border text-white border-white">
                    {item.estimatedUsefulLife}
                  </Table.Cell>{" "}
                  <Table.Cell className="bg-slate-800 rounded-lg border text-white border-white py-8">
                    <Dropdown
                      color={"info"}
                      label="Action"
                      dismissOnClick={false}
                    >
                      <Tooltip content="Update supply">
                        <Dropdown.Item
                          onClick={() => {
                            setSupplyModal(true);
                            handleSelectedSupplyUpdate(item);
                          }}
                        >
                          Update
                        </Dropdown.Item>
                      </Tooltip>
                      <Tooltip content="Delete supply permanently">
                        <Dropdown.Item
                          onClick={() => {
                            setDeleteModal(true);
                            setSelectedSupply(item);
                          }}
                        >
                          Delete
                        </Dropdown.Item>
                      </Tooltip>{" "}
                    </Dropdown>{" "}
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
