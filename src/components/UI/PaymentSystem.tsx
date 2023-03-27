import React from 'react';

import cn from './PaymentSystem.module.sass';

export interface PaymentSystemProps {
  sistem:
  'visa' |
  'mastercard'
}

export default function PaymentSystem({
  sistem,
  ...rest
}: PaymentSystemProps) {

  const sistemClasses: string[] = [cn.sistem];

  if (sistem) sistemClasses.push(cn[`sistem--${sistem}`]);

  return (
    <div
      className={`${sistemClasses.join(' ')}`}
      {...rest}
    >

    </div>
  );

}
