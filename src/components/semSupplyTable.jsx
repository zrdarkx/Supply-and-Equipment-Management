import { Button, Dropdown, Table, Tooltip } from "flowbite-react";
import { HiOutlineCog, HiOutlinePlusCircle, HiTrash } from "react-icons/hi";
import { useSemStore } from "../zustand/store";
import { toast } from "react-toastify";

export function SemSupplyTable({
  data,
  setSelectedSupply,
  setDeleteModal,
  setSupplyModal,
  handleSelectedSupplyUpdate,
  cart,
}) {
  const { currentUser, setCartSupply, cartSupply } = useSemStore();
  const isAdmin = currentUser.role == "Admin";

  const handleAddCart = (item) => {
    const isAdded = cartSupply.includes(item);
    if (!isAdded) {
      const newItem = [...cartSupply, item];
      setCartSupply(newItem);
      toast.success("Successfull added to cart.", { position: "bottom-right" });
    } else {
      toast.info("it's already in your cart.", { position: "bottom-right" });
    }
  };

  const handleRemoveCart = (item) => {
    const newCarts = cartSupply.filter((cart) => {
      if (cart.id !== item.id) {
        return cart;
      }
    });
    setCartSupply(newCarts);
  };

  return (
    <div className="overflow-x-auto ">
      {data && (
        <Table striped hoverable>
          <Table.Head>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              #
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Inventory Number
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
              Estimated Useful Life
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
                  </Table.Cell>
                  <Table.Cell className="bg-slate-800  text-white">
                    {item.inventoryNumber}
                  </Table.Cell>
                  <Table.Cell className="bg-slate-800  text-white font-bold">
                    {item.name}
                  </Table.Cell>
                  <Table.Cell className="bg-slate-800  text-white">
                    {item.quantity}
                  </Table.Cell>
                  <Table.Cell className="bg-slate-800  text-white">
                    {item.unit}
                  </Table.Cell>
                  <Table.Cell className="bg-slate-800  text-white">
                    {item.unitCost}
                  </Table.Cell>
                  <Table.Cell className="bg-slate-800  text-white">
                    {item.description}
                  </Table.Cell>
                  <Table.Cell className="bg-slate-800  text-white">
                    {item.estimatedUsefulLife}
                  </Table.Cell>

                  {isAdmin && (
                    <Table.Cell className="bg-slate-800 rounded-lg text-white ">
                      <div className="flex">
                        <Tooltip content="Update this supply">
                          <Button
                            className="mr-5"
                            onClick={() => {
                              setSupplyModal(true);
                              handleSelectedSupplyUpdate(item);
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
                        <Tooltip content="Delete this supply permanently">
                          <Button
                            onClick={() => {
                              setDeleteModal(true);
                              setSelectedSupply(item);
                            }}
                            gradientMonochrome="failure"
                          >
                            <HiTrash color="white" className="mr-2 h-5 w-5" />
                            Delete
                          </Button>
                        </Tooltip>
                      </div>
                    </Table.Cell>
                  )}
                  {!isAdmin && !cart && (
                    <Table.Cell className="bg-slate-800 rounded-lg text-white ">
                      <Tooltip content="Add this item to your cart">
                        <Button
                          gradientMonochrome="info"
                          onClick={() => handleAddCart(item)}
                        >
                          <HiOutlinePlusCircle
                            color="white"
                            className="mr-2 h-5 w-5"
                          />
                          Add to Cart
                        </Button>
                      </Tooltip>
                    </Table.Cell>
                  )}
                  {cart && (
                    <Table.Cell className="bg-slate-800  text-white ">
                      <Tooltip content="Remove item from cart">
                        <Button
                          gradientMonochrome="failure"
                          onClick={() => handleRemoveCart(item)}
                        >
                          <HiTrash color="white" className="mr-2 h-5 w-5" />
                          Remove
                        </Button>
                      </Tooltip>
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
