import type { ItemMenu } from "../types";
import { formatCurrency } from "../helpers/index";
type MenuItemProps = {
  item: ItemMenu;
  addItem: (item: ItemMenu) => void;
};
export const MenuItem = ({ item, addItem }: MenuItemProps) => {
  return (
    <button
      className="border-2 rounded-lg border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">{formatCurrency(item.price)}</p>
    </button>
  );
};
