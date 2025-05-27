import classNames from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit';
}

const Button: React.FC<Props> = ({ type = 'submit', children, className, ...rest }) => {
  return (
    <button
      type={type}
      className={classNames('btn', className)}
      {...rest} // spreads disabled, onClick, etc.
    >
      {children}
    </button>
  );
};

export default Button;
