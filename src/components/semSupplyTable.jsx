import { Button, Table, Tooltip } from "flowbite-react";
import moment from "moment";
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
      toast.success("Agregado al carrito con éxito.", {
        position: "bottom-right",
      });
    } else {
      toast.info("Ya está en tu carrito.", { position: "bottom-right" });
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

  const handleIncrement = (data) => {
    const cartSupplyCopy = [...cartSupply];
    cartSupplyCopy.map((item) => {
      if (item.id == data.id) {
        if (item.borrowedQuantity == undefined) {
          item.borrowedQuantity = 2;
        } else {
          item.borrowedQuantity = parseInt(item.borrowedQuantity) + 1;
        }
      }
    });
    setCartSupply(cartSupplyCopy);
  };
  const handleDecrement = (data) => {
    const cartSupplyCopy = [...cartSupply];
    cartSupplyCopy.map((item) => {
      if (item.id == data.id) {
        item.borrowedQuantity = parseInt(item.borrowedQuantity) - 1;
      }
    });
    setCartSupply(cartSupplyCopy);
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
              Número de Inventario
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Nombre
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Cantidad
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Unidad
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Costo Unitario
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Descripción
            </Table.HeadCell>
            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Vida Útil Estimada
            </Table.HeadCell>

            <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
              Acción
            </Table.HeadCell>
            {cart && (
              <Table.HeadCell className="bg-transparent text-gray-200 bg-slate-500">
                Cantidad Solicitada
              </Table.HeadCell>
            )}
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
                        <Tooltip content="Actualizar este suministro">
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
                            Actualizar
                          </Button>
                        </Tooltip>
                        <Tooltip content="Eliminar este suministro de forma permanente">
                          <Button
                            onClick={() => {
                              setDeleteModal(true);
                              setSelectedSupply(item);
                            }}
                            gradientMonochrome="failure"
                          >
                            <HiTrash color="white" className="mr-2 h-5 w-5" />
                            Eliminar
                          </Button>
                        </Tooltip>
                      </div>
                    </Table.Cell>
                  )}
                  {!isAdmin && !cart && (
                    <Table.Cell className="bg-slate-800 rounded-lg text-white ">
                      <Tooltip content="Agregar este artículo a tu carrito">
                        <Button
                          gradientMonochrome="info"
                          onClick={() => handleAddCart(item)}
                        >
                          <HiOutlinePlusCircle
                            color="white"
                            className="mr-2 h-5 w-5"
                          />
                          Agregar
                        </Button>
                      </Tooltip>
                    </Table.Cell>
                  )}
                  {cart && (
                    <Table.Cell className="bg-slate-800  text-white ">
                      <Tooltip content="Eliminar artículo del carrito">
                        <Button
                          gradientMonochrome="failure"
                          onClick={() => handleRemoveCart(item)}
                        >
                          <HiTrash color="white" className="mr-2 h-5 w-5" />
                          Eliminar
                        </Button>
                      </Tooltip>
                    </Table.Cell>
                  )}
                  {cart && (
                    <Table.Cell className="bg-slate-800  text-white ">
                      <div className="flex justify-center items-center">
                        <Button
                          disabled={item.borrowedQuantity == 1}
                          onClick={() => handleDecrement(item)}
                        >
                          -
                        </Button>
                        <h1 className="mx-3">
                          {item.borrowedQuantity ? item.borrowedQuantity : 1}
                        </h1>
                        <Button onClick={() => handleIncrement(item)}>+</Button>
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
