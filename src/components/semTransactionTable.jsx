import { Badge, Table } from "flowbite-react";
import moment from "moment";

const SemTransactionTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      {data && (
        <Table>
          <Table.Head>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              User
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Office Name
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Item Name
            </Table.HeadCell>

            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Category
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Approve By
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Created At
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Status
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data.map((item) => {
              const user = JSON.parse(item.currentUser);
              const firebaseDate = item.item.createdAt;
              const date = moment(firebaseDate?.toDate()).format("LLL");
              return (
                <Table.Row key={item.id}>
                  <Table.Cell className="bg-slate-800  text-white">
                    {user.firstName + " " + user.lastName}
                  </Table.Cell>
                  <Table.Cell className="bg-slate-800  text-white">
                    {user.office}
                  </Table.Cell>
                  <Table.Cell className="bg-slate-800  text-white">
                    {item.item.name}
                  </Table.Cell>

                  <Table.Cell className="bg-slate-800  text-white">
                    {item.item.category}
                  </Table.Cell>

                  <Table.Cell className="bg-slate-800  text-white">
                    {item.approveBy ? item.approveBy : "Waiting for approval"}
                  </Table.Cell>
                  <Table.Cell className="bg-slate-800  text-white">
                    {date}
                  </Table.Cell>
                  <Table.Cell className="bg-slate-800  text-white text-center flex justify-start items-center">
                    <Badge color="info" size={"lg"}>
                      {item.status}
                    </Badge>
                  </Table.Cell>
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
