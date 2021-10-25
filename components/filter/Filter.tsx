import { IoFilterCircleOutline, IoFilterCircleSharp } from 'react-icons/io5';

interface IProps {
  filtered: boolean;
}

export default function Filter({ filtered }: IProps) {
  return filtered ? (
    <IoFilterCircleSharp style={{ fontSize: '2rem' }} />
  ) : (
    <IoFilterCircleOutline style={{ fontSize: '2rem' }} />
  );
}
