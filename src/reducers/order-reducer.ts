import type { OrderItem, ItemMenu } from "../types";
import { menuItems } from "../data/db";
import Swal from "sweetalert2";
export type OrderAccions =
  | { type: "add-item"; payload: { item: ItemMenu } }
  | { type: "handle-switch-add-tip"; payload: { value: number } }
  | { type: "remove-item"; payload: { id: OrderItem["id"] } }
  | { type: "place-order" };

export type OrderState = {
  data: ItemMenu[];
  order: OrderItem[];
  tip: number;
};

export const initialState: OrderState = {
  data: menuItems,
  order: [],
  tip: 0,
};

export const orderReducer = (
  state: OrderState = initialState,
  action: OrderAccions
) => {
  if (action.type === "add-item") {
    const itemExist = state.order.find(
      (orderItem) => orderItem.id === action.payload.item.id
    );

    let updateOrder: OrderItem[] = [];
    if (itemExist) {
      updateOrder = state.order.map((orderItem) => {
        return orderItem.id === action.payload.item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem;
      });
    } else {
      const newItem: OrderItem = {
        ...action.payload.item,
        quantity: 1,
      };
      updateOrder = [...state.order, newItem];
    }
    return { ...state, order: updateOrder };
  }
  if (action.type === "handle-switch-add-tip") {
    let updateTip: number;
    if (action.payload.value === state.tip) {
      updateTip = 0;
    } else {
      updateTip = action.payload.value;
    }
    return { ...state, tip: updateTip };
  }
  if (action.type === "remove-item") {
    return {
      ...state,
      order: state.order.filter(
        (itemOrder) => itemOrder.id !== action.payload.id
      ),
    };
  }
  if (action.type === "place-order") {
    Swal.fire({
      title: "Se ha creado la orden. ",
      icon: "success",
    });
    return {
      ...state,
      order: [],
      tip: 0,
    };
  }
  return state;
};
