import type { ItemMenu } from "../types";
import { formatCurrency } from "../helpers/index";
import { OrderAccions } from "../reducers/order-reducer";
type MenuItemProps = {
  item: ItemMenu;
  dispatch: React.Dispatch<OrderAccions>;
};
export const MenuItem = ({ item, dispatch }: MenuItemProps) => {
  return (
    <button
      className="border-2 rounded-lg border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
      onClick={() => dispatch({ type: "add-item", payload: { item: item } })}
    >
      <p>{item.name}</p>
      <p className="font-black">{formatCurrency(item.price)}</p>
    </button>
  );
};
