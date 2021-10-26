interface IProps {
  label: string;
  checked: boolean;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export default function Checkbox({ label, checked, onChange }: IProps) {
  return (
    <label>
      <input type='checkbox' checked={checked} onChange={onChange} />
      {label}
    </label>
  );
}
