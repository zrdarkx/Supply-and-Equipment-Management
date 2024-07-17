"use client";

import { Table } from "flowbite-react";

export function SemTable() {
  return (
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell className="bg-transparent text-white border border-white">
            Product name
          </Table.HeadCell>
          <Table.HeadCell className="bg-transparent text-white border border-white">
            Product name
          </Table.HeadCell>
          <Table.HeadCell className="bg-transparent text-white border border-white">
            Product name
          </Table.HeadCell>
          <Table.HeadCell className="bg-transparent text-white border border-white">
            Product name
          </Table.HeadCell>
          <Table.HeadCell className="bg-transparent text-white border border-white">
            Product name
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row>
            <Table.Cell className="bg-slate-800 border text-white border-white">
              {'Apple MacBook Pro 17"'}
            </Table.Cell>
            <Table.Cell className="bg-slate-800 border text-white border-white">
              {'Apple MacBook Pro 17"'}
            </Table.Cell>
            <Table.Cell className="bg-slate-800 border text-white border-white">
              {'Apple MacBook Pro 17"'}
            </Table.Cell>
            <Table.Cell className="bg-slate-800 border text-white border-white">
              {'Apple MacBook Pro 17"'}
            </Table.Cell>
            <Table.Cell className="bg-slate-800 border text-white border-white">
              {'Apple MacBook Pro 17"'}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
