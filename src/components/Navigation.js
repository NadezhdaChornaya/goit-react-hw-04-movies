import React from 'react'
import { NavLink } from 'react-router-dom';
import { routesPages } from '../routes';


const Navigation = () => {
    return (
        <ul>
            {routesPages.map(({ path, name, exact }) => (
                <li key={path}>
                    <NavLink exact={exact} to={path} className="navigation-link"
                        activeClassName="navigation-link-active">
                        {name}
                    </NavLink>
                </li>
            )
            )}
        </ul>
    )
}
export default Navigation