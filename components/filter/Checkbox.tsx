interface Props {
  label: string;
  checked: boolean;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export default function Checkbox({ label, checked, onChange }: Props) {
  return (
    <label>
      <input type='checkbox' checked={checked} onChange={onChange} />
      {label}
    </label>
  );
}
