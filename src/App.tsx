import { useEffect, useReducer } from "react";
import { MenuItem } from "./components/MenuItem";
import { OrderContents } from "./components/OrderContents";
import { OrderTotals } from "./components/OrderTotals";
import { TipPercentageForm } from "./components/TipPercentageForm";
import { initialState, orderReducer } from "./reducers/order-reducer";

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  useEffect(() => {
    if (state.order.length === 0) {
      state.tip = 0;
    }
  }, [state]);

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
            {state.data.map((item) => (
              <MenuItem key={item.id} item={item} dispatch={dispatch} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-1">
          {state.order.length === 0 ? (
            <p className="text-center font-black text-4xl">
              La orden esta vacia
            </p>
          ) : (
            <>
              <OrderContents order={state.order} dispatch={dispatch} />
              <TipPercentageForm tip={state.tip} dispatch={dispatch} />
              <OrderTotals
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
              />
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
