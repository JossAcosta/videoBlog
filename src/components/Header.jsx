import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  classNames from 'classnames';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
    const { user, isLogin, isRegister } = props;
    const hasUser = Object.keys(user).length > 0;
    const handleLogOut= () => {
        props.logoutRequest({});
    }
    const haderClass = classNames('header',{
        isLogin,
        isRegister,
    })
    return(
        <header className={haderClass}>
            <Link to="/">
                <img className="header__img" src={logo} alt="Platzi Video"/>
            </Link>
                <div className="header__menu">
                    <div className="header__menu--profile">
                        {hasUser ? 
                            <img src={gravatar(user.email)} alt={user.email}/> : 
                            <img src={userIcon} alt=""/>
                        }
                            <p>Perfil</p>
                    </div>
                    <ul>
                        {hasUser ?
                            <li><Link to="/">{user.name}</Link></li>
                            : null
                        }
                        {hasUser ?
                            <li><Link to="#logout" onClick={handleLogOut} >Cerrar Sesión</Link></li>
                            :
                            <li><Link to="/login">Inciar Sesión</Link></li>
                        }
                    </ul>
                </div>
        </header>
    )
}

const mapStateToProps = state => {
    return{
        user: state.user
    };
};

const mapDispatchToProps = {
    logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);