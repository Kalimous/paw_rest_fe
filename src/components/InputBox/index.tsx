import { ChangeEvent, KeyboardEvent } from 'react';

interface Props {
  type: 'text' | 'password';
  title: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  isErrorMessage?: boolean;
  massage?: string;
}

export default function InputBox({ type, title, placeholder, value, onChange, onKeyDown, isErrorMessage, massage }: Props) {
  return (
    <div className="input-box">
      <input
        type={type}
        title={title}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {isErrorMessage && massage && <div className="error-message">{massage}</div>}
    </div>
  );
} 