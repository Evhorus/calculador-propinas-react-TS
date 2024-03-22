import { ToggleSwitch } from "flowbite-react";
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
  handleSwitchAddTip: (value: number) => void;
};
export const TipPercentageForm = ({
  tip,
  handleSwitchAddTip,
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
            onChange={() => handleSwitchAddTip(tipOption.value)}
          />
        ))}
      </form>
    </div>
  );
};
