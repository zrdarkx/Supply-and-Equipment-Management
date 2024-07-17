import { Button, Table, Tooltip } from "flowbite-react";
import moment from "moment";
import { HiLogin, HiOutlineCog, HiTrash } from "react-icons/hi";

export function SemOfficesTable({ data, deleteOffice }) {
  return (
    <div className="overflow-x-auto">
      {data && (
        <Table striped>
          <Table.Head>
            <Table.HeadCell className="bg-transparent text-white bg-blue-500">
              Office ID
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-white bg-blue-500">
              Office Name
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-white bg-blue-500">
              Created At
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-white bg-blue-500">
              Action
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data.map((item) => {
              const firebaseDate = item?.createdAt;
              const date = moment(firebaseDate?.toDate()).format("LLL");

              return (
                <Table.Row key={item.id}>
                  <Table.Cell className="bg-slate-800 rounded-lg border text-white border-white">
                    {item.id}
                  </Table.Cell>{" "}
                  <Table.Cell className="bg-slate-800 rounded-lg border text-white border-white">
                    {item.officeName}
                  </Table.Cell>{" "}
                  <Table.Cell className="bg-slate-800 rounded-lg border text-white border-white">
                    {date}
                  </Table.Cell>{" "}
                  <Table.Cell className="bg-slate-800 rounded-lg border text-white border-white">
                    <div className="flex flex-row justify-center items-center">
                      <Tooltip content="Delete the office permanently">
                        <Button
                          onClick={() => deleteOffice(item.id)}
                          gradientMonochrome="failure"
                        >
                          {" "}
                          <HiTrash color="white" className="mr-2 h-5 w-5" />
                          Delete
                        </Button>
                      </Tooltip>
                    </div>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      )}
    </div>
  );
}