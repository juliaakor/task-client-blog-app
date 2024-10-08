type SelectValue = string | number;

export interface SelectOptionType {
  value: SelectValue;
  label: SelectValue;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: SelectOptionType[];
  validation?: options;
}
