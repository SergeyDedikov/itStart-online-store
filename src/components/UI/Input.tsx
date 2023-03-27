import React, { InputHTMLAttributes } from 'react';

import cn from './Input.module.sass';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  status?:
  'search' |
  'arrow'
}

export default function Input({
  status,
  className,
  ...rest
}: IInputProps) {

  const inputClasses: string[] = [cn.input];

  if (status) inputClasses.push(cn[`input--${status}`]);

  const inputClass: string = inputClasses.join(' ');

  return (
    <input
      className={`${inputClass}`}
      {...rest}
    >
    </input>
  )
}
