import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link as Link } from 'react-router-dom';
import './index.scss';

const Sidebar = ({isOpen, toggle}) => {
    if(isOpen){
        return (
            <>
                <aside className={isOpen ? "SidebarContainerClosed": null}>
                    <div className="Icon" onClick={toggle}>
                        <FaTimes className="CloseIcon"></FaTimes>
                    </div>
                    <div className="SidebarWrapper">
                        <ul className="SidebarMenu">
                            <Link className="SidebarLink" to="/pueblosmagicos">
                                Pueblos Mágicos
                            </Link>
                            <Link className="SidebarLink" to="/pricing">
                                Pricing
                            </Link>
                            <Link className="SidebarLink" to="/comunidad">
                                Comunidad
                            </Link>
                            <Link className="SidebarLink" to="/soporte">
                                Soporte
                            </Link>
                        </ul>
                        <div className="SideBtnWrap">
                            <Link className="SidebarRouteLogIn" to="/iniciarsesion">Iniciar Sesión</Link>
                        </div>
                        <div className="SideBtnWrap">
                        <Link className="SidebarRouteSignUp" to="registrate">Regístrate</Link>
                        </div>
                    </div>
    
                </aside>
            </>
        )
    }
    return null;
}

export default Sidebar
