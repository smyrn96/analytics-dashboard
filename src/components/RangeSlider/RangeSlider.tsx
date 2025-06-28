import { Slider } from "@mui/material";

type RangeSliderPropsType = {
  value: number[];
  min: number;
  max: number;
  step: number;
  label: string;
  labelValue?: boolean;
  onChange: (val: number[]) => void;
};

const monthNames = [
  "", // so index 1 = January
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const RangeSlider = ({
  value,
  min,
  max,
  step,
  label,
  labelValue = false,
  onChange,
}: RangeSliderPropsType) => (
  <div className="w-[200px]">
    <div className="block mb-1 text-sm font-medium text-gray-700">{label}</div>
    <Slider
      className="slider"
      value={value}
      onChange={(_, newValue) => onChange(newValue as number[])}
      min={min}
      max={max}
      valueLabelDisplay={labelValue ? "on" : "auto"}
      valueLabelFormat={(val) => (labelValue ? monthNames[val] : val)}
      step={step}
    />
  </div>
);

export default RangeSlider;
