import React, { ButtonHTMLAttributes } from 'react';

import cn from './Button.module.sass';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  status?:
  'primary' |
  'secondary' |
  'catalog' |
  'download' |
  'buy' |
  'search' |
  'remove' |
  'edit' |
  'email' |
  'whatsapp'
}

export default function Button({
  status,
  children,
  className,
  ...rest
}: IButtonProps) {

  const iconClasses: string[] = [cn.icon];

  if (status && status !== 'primary') {
    iconClasses.push(cn[`icon--${status}`]);
  } else {
    iconClasses.push(cn[`not-visible`]);
    // statusMode = 'button--primary';
  };

  const iconClass: string = iconClasses.join(' ');

  return (
    <button
      className={`${cn.button} ${className || ''}`}
      {...rest}
    >
      {children}
      <div className={iconClass}></div>
    </button>
  )
}
