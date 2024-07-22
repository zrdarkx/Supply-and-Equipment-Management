import { Dropdown, Table, Tooltip } from "flowbite-react";

export function SemEquipmentTable({
  data,
  setSelectedEquip,
  setDeleteModal,
  setSupplyModal,
  handleSelectedSupplyUpdate,
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
                    <Dropdown
                      color={"info"}
                      label="Action"
                      dismissOnClick={false}
                    >
                      <Tooltip content="Update supply">
                        <Dropdown.Item
                          key={"update"}
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
                          key={"delete"}
                          onClick={() => {
                            setDeleteModal(true);
                            setSelectedEquip(item);
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
