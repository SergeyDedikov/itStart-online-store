import React from 'react';
import { Link } from "react-router-dom";

import cn from './Navbar.module.sass';

const Navbar = () => {

  return (
    <nav>
      <ul className={cn.navigation}>
        <li><Link to="/about">О компании</Link></li>
        <li><Link to="/delivery">Доставка и оплата</Link></li>
        <li><Link to="/refund">Возврат</Link></li>
        <li><Link to="/contacts">Контакты</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
