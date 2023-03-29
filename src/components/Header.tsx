import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.sass';
import Container from './Container';
import Navbar from './UI/Navbar';
import ContactGroup, { ContactVariantType, ContactVariantAlign } from './ContactGroup';
import Logo from './UI/Logo';
import Button from './UI/Button';
import CartInformer from './CartInformer';
import SimpleForm from './UI/SimpleForm';
import Input from './UI/Input';

const Header: FC = () => {

  const navigate = useNavigate();

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
              <Button
                status='catalog'
                type='button'
                onClick={() => navigate('/catalog')}
              >
                Каталог
              </Button>
              <SimpleForm bgColor={'gray'}>
                <Input
                  type="text"
                  placeholder="Поиск..."
                />
                <Button
                  status={"search"}
                  type="button"
                />
              </SimpleForm>
            </div>
            <ul className="header__group header__group--separate">
              <li><ContactGroup
                icon={ContactVariantType.tel}
                isLargeIcon={true}
                firstLine={'+7 (777) 490-00-91'}
                secondLine={'время работы: 9:00-20:00'}
                align={ContactVariantAlign.right}
                textLink={'Заказать звонок'}
              />
              </li>
              <li>
                <Button
                  status='download'
                  type='button'
                >
                  Прайс-лист
                </Button>
              </li>
              <li>
                <CartInformer amount={1234} count={7} />
              </li>
            </ul>
          </div>
        </Container>
      </div>

    </header>
  )
}

export default Header;
