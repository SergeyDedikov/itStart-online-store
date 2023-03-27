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
  'arrow' |
  'edit' |
  'email' |
  'whatsapp' |
  'telegram'
}

export default function Button({
  status,
  children,
  className,
  ...rest
}: IButtonProps) {

  const buttonClasses: string[] = [cn.button];
  const iconClasses: string[] = [cn.icon];

  if (status && status !== 'primary') {
    iconClasses.push(cn[`icon--${status}`]);

    switch (status) {
      case 'search':
      case 'remove':
      case 'arrow':
      case 'whatsapp':
      case 'telegram':
        buttonClasses.push(cn[`button--circle`]);
        break;
    }

    switch (status) {
      case 'whatsapp':
      case 'telegram':
        buttonClasses.push(cn[`button--${status}`]);
        break;
    }

    if (status === 'arrow') iconClasses.push(cn[`not-visible`]);

  } else {
    iconClasses.push(cn[`not-visible`]);
    // statusMode = 'button--primary';
  };

  const iconClass: string = iconClasses.join(' ');
  const buttonClass: string = buttonClasses.join(' ');

  return (
    <button
      className={`${buttonClass} ${className || ''}`}
      {...rest}
    >
      {children}
      <div className={iconClass}></div>
    </button>
  )
}
