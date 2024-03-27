import { ToggleSwitch } from "flowbite-react";
import { OrderAccions } from "../reducers/order-reducer";
const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];
type TipPercentageFormProps = {
  tip: number;
  dispatch: React.Dispatch<OrderAccions>;
};
export const TipPercentageForm = ({
  tip,
  dispatch,
}: TipPercentageFormProps) => {
  return (
    <div>
      <h3 className="font-back text-2xl">Propina:</h3>
      <form>
        {tipOptions.map((tipOption) => (
          <ToggleSwitch
            key={tipOption.id}
            className="m-2"
            checked={tipOption.value === tip}
            label={tipOption.label}
            onChange={() =>
              dispatch({
                type: "handle-switch-add-tip",
                payload: { value: tipOption.value },
              })
            }
          />
        ))}
      </form>
    </div>
  );
};
