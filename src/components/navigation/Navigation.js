import React from 'react'
import { NavLink } from 'react-router-dom';
import { routesPages } from '../../routes';
import { NavigationWrapper } from './styledNavigation';
// import sprite from "../../img/sptite.svg"


const Navigation = () => {
    return (
        <NavigationWrapper>

            {/* <svg >
                <use href="#icon-video-camera" />
            </svg> */}
            <h1 className="navigationTitle"><span>&#127916;</span>The Best Movies<span>&#127916;</span></h1>
            <ul className="navigationList">
                {routesPages.map(({ path, name, exact }) => (
                    <li key={path} className="navigationItem">
                        <NavLink exact={exact} to={path} className="navigation-link"
                            activeClassName="navigation-link-active">
                            {name}
                        </NavLink>
                    </li>
                )
                )}
            </ul>
        </NavigationWrapper>
    )
}
export default Navigation