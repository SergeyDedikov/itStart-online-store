import React from 'react';
import { Link } from "react-router-dom";

import cn from './Navbar.module.sass';

const Navbar = () => {

  return (
    <nav>
      <ul className={cn.navigation}>
        <Link to="/about">О компании</Link>
        <Link to="/delivery">Доставка и оплата</Link>
        <Link to="/refund">Возврат</Link>
        <Link to="/contacts">Контакты</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
