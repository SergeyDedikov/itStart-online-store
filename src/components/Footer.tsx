import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import ContactGroup, { ContactVariantType } from './ContactGroup';
import Container from './Container';

import './Footer.sass';
import List from './List';
import Button from './UI/Button';
import Input from './UI/Input';
import Logo from './UI/Logo';
import PaymentSystem from './UI/PaymentSystem';
import SimpleForm from './UI/SimpleForm';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__wrapper">
          <div className="footer__company">
            <Logo isInverted={true} />
            <p className="footer__company-info">
              Компания &laquo;Султан&raquo;&nbsp;&mdash; снабжаем розничные магазины товарами
              &laquo;под ключ&raquo; в&nbsp;Кокчетаве и&nbsp;Акмолинской области
            </p>
            <div className="footer__form-wrapper">
              <p>Подпишись на&nbsp;скидки и&nbsp;акции</p>
              <SimpleForm>
                <Input
                  type="email"
                  placeholder="Введите ваш E-mail"
                />
                <Button
                  status={"arrow"}
                  type="button"
                >
                  &#10095;
                </Button>
              </SimpleForm>
            </div>

          </div>
          <div className="footer__columns-wrapper">
            <div className="footer__column">
              <h3>
                Меню сайта:
              </h3>
              <nav>
                <ul>
                  <li><Link to="/about">О компании</Link></li>
                  <li><Link to="/delivery">Доставка и оплата</Link></li>
                  <li><Link to="/refund">Возврат</Link></li>
                  <li><Link to="/contacts">Контакты</Link></li>
                </ul>
              </nav>
            </div>
            <div className="footer__column">
              <h3>
                Категории:
              </h3>
              <nav>
                <ul>
                  <li><Link to="/household">Бытовая химия</Link></li>
                  <li><Link to="/cosmetics">Косметика и гигиена</Link></li>
                  <li><Link to="/housewares">Товары для дома</Link></li>
                  <li><Link to="/momchild">Товары для детей и мам</Link></li>
                  <li><Link to="/tableware">Посуда</Link></li>
                </ul>
              </nav>
            </div>
            <div className="footer__column">
              <h3>
                Скачать прайс-лист:
              </h3>
              <ul>
                <li>
                  <Button type="button" status={"download"}>
                    Прайс-лист
                  </Button>
                </li>
                <li>
                  <p>Связь в мессенджерах:</p>
                  <div className='inline'>
                    <Button type="button" status={"whatsapp"} />
                    <Button type="button" status={"telegram"} />
                  </div>
                </li>
              </ul>

            </div>
            <div className="footer__column">
              <h3>Контакты:</h3>
              <ul>
                <li>
                  <ContactGroup
                    icon={ContactVariantType.tel}
                    isDisplayIcon={false}
                    isInverted={true}
                    firstLine={'+7 (777) 490-00-91'}
                    secondLine={'время работы: 9:00-20:00'}
                    textLink={'Заказать звонок'}
                  />
                </li>
                <li>
                  <ContactGroup
                    icon={ContactVariantType.email}
                    isDisplayIcon={false}
                    isInverted={true}
                    firstLine={'opt.sultan@mail.ru'}
                    secondLine={'На связи в любое время'}
                  />
                </li>
                <li>
                  <div className='inline'>
                    <PaymentSystem sistem={'visa'} />
                    <PaymentSystem sistem={'mastercard'} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

    </footer>
  );
}

export default Footer;

