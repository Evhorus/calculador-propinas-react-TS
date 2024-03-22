import { useEffect, useState } from "react";
import type { OrderItem, ItemMenu } from "../types";
import Swal from "sweetalert2";

export function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: ItemMenu) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);

    if (itemExist) {
      const updateOrder = order.map((orderItem) => {
        return orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem;
      });

      setOrder(updateOrder);
    } else {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    }
  };

  const handleSwitchAddTip = (value: number) => {
    if (value === tip) {
      setTip(0);
    } else {
      setTip(value);
    }
  };

  useEffect(() => {
    if (order.length === 0) {
      setTip(0);
    }
  }, [order]);

  const removeItem = (id: OrderItem["id"]) => {
    setOrder(order.filter((orderItem) => orderItem.id !== id));
  };
  const placeOrder = () => {
    Swal.fire({
      title: "Se ha creado la orden. ",
      icon: "success",
    });
    setOrder([]);
    setTip(0);
  };

  return {
    order,
    tip,
    setTip,
    addItem,
    handleSwitchAddTip,
    removeItem,
    placeOrder,
  };
}
