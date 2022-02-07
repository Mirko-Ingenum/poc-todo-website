/* eslint-disable react/button-has-type */
import React from 'react';

export interface Props {
  type: 'button' | 'reset' | 'submit';
  value?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = (props: Props) => {
  const {
    value,
    type,
    onClick,
    style,
    disabled,
  } = props;



  return (
    <button
      type={type}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {value && <span>{value}</span>}
    </button>
  );
};

export default Button;
