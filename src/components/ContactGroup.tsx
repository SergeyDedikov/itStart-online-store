import React from 'react';

import cn from './ContactGroup.module.sass';

export enum ContactVariantType {
  address = 'address',
  email = 'email',
  tel = 'tel'
}

export enum ContactVariantAlign {
  right = 'right'
}

interface IContactProps {
  icon: ContactVariantType,
  isDisplayIcon?: boolean,
  isLargeIcon?: boolean,
  isInverted?: boolean,
  firstLine: string,
  secondLine?: string,
  align?: ContactVariantAlign,
  textLink?: string,
}

export default function ContactGroup({
  icon,
  isDisplayIcon = true,
  isLargeIcon = false,
  isInverted = false,
  firstLine,
  secondLine,
  align,
  textLink
}: IContactProps) {

  let iconClasses: string[] = [cn.icon];
  let wrapperClasses: string[] = [cn.contact__wrapper];
  let contactClasses: string[] = [cn.contact];

  if (isDisplayIcon) {
    switch (icon) {
      case 'address':
        iconClasses.push(cn.address);
        break;

      case 'email':
        iconClasses.push(cn.email);
        break;

      case 'tel':
        iconClasses.push(cn.tel);
        break;
    }
  } else {
    iconClasses.push(cn['not-visible']);
  }

  if (isLargeIcon) iconClasses.push(cn['icon--large']);

  if (align === 'right') {
    wrapperClasses.push(cn['contact__wrapper--right']);
    contactClasses.push(cn['contact--right']);
  }

  if (isInverted) wrapperClasses.push(cn['contact__wrapper--inverted']);

  return (
    <div className={contactClasses.join(' ')}>
      <div className={iconClasses.join(' ')}></div>
      <div className={wrapperClasses.join(' ')}>
        <p>{firstLine}</p>
        <p>{secondLine}</p>
        <a href="#">{textLink}</a>
      </div>
    </div>
  );
};
