import { forwardRef } from 'react';

interface Props {
  title: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (event: any) => void;
  isErrorMessage: boolean;
  message: string;
  buttonTitle?: string;
  onButtonClick?: () => void;
  onKeyDown?: (event: any) => void;
}

const InputBox = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <div className="input-box">
      <input
        type={props.type}
        title={props.title}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        ref={ref}
      />
      {props.isErrorMessage && props.message && <div className="error-message">{props.message}</div>}
    </div>
  );
});

export default InputBox; 