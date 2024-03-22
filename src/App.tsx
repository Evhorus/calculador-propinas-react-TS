import { useState } from "react";
import { menuItems } from "./data/db";
import { MenuItem } from "./components/MenuItem";
import { useOrder } from "./hooks/useOrder";
import { OrderContents } from "./components/OrderContents";
import { OrderTotals } from "./components/OrderTotals";
import { TipPercentageForm } from "./components/TipPercentageForm";

function App() {
  const [data] = useState(menuItems);

  const { order, tip, addItem, handleSwitchAddTip, removeItem, placeOrder } =
    useOrder();
  return (
    <>
      <header className="bg-cyan-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculador de Propinas y Consumos
        </h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="space-y-3 mt-10">
            {data.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-1">
          {order.length === 0 ? (
            <p className="text-center font-black text-4xl">
              La orden esta vacia
            </p>
          ) : (
            <>
              <OrderContents order={order} removeItem={removeItem} />
              <TipPercentageForm
                tip={tip}
                handleSwitchAddTip={handleSwitchAddTip}
              />
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
