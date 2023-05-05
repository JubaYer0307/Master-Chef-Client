import React from 'react';
import { NavLink } from 'react-bootstrap';
import './ActiveLink.css'

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
  to={to}
  exact
  activeClassName="active"
>
  {children}
</NavLink>

    );
};

export default ActiveLink;