import React, { FC } from 'react';

import './Header.sass';
import Container from './Container';
import Navbar from './UI/Navbar';
import ContactGroup, { ContactVariantType, ContactVariantAlign } from './ContactGroup';
import Logo from './Logo';

const Header: FC = () => {

  return (
    <header className='header'>

      <div className='header__wrapper'>
        <Container>
          <div className='header__row'>
            <div className="header__group">
              <ContactGroup
                icon={ContactVariantType.address}
                firstLine={'г. Кокчетав, ул. Ж. Ташенова 129Б'}
                secondLine={'(Рынок Восточный)'}
              />
              <ContactGroup
                icon={ContactVariantType.email}
                firstLine={'opt.sultan@mail.ru'}
                secondLine={'На связи в любое время'}
              />
              <ContactGroup
                icon={ContactVariantType.tel}
                isLargeIcon={true}
                firstLine={'+7 (777) 490-00-91'}
                secondLine={'время работы: 9:00-20:00'}
                align={ContactVariantAlign.right}
                textLink={'Заказать звонок'}
              />
            </div>
            <div className="header__group">
              <Navbar />
            </div>
          </div>
        </Container>
      </div>

      <div className='header__wrapper header__wrapper--border'>
        <Container>
          <div className='header__row'>
            <div className="header__group">
              <Logo />
            </div>
            <div className="header__group"></div>
          </div>
        </Container>
      </div>

    </header>
  )
}

export default Header;
