import React, { FormHTMLAttributes } from 'react';

import cn from './SimpleForm.module.sass';

export interface ISimpleFormProps extends FormHTMLAttributes<HTMLFormElement> {
  bgColor?: 'gray',
}

export default function SimpleForm({
  bgColor,
  children,
  ...rest
}: ISimpleFormProps) {

  const formClasses: string[] = [cn.form];

  if (bgColor) formClasses.push(cn[`form--${bgColor}`]);

  const formClass: string = formClasses.join(' ');

  return (
    <form
      className={`${formClass}`}
      {...rest}
    >
      <label>
        {children}
      </label>
    </form>
  )
}
