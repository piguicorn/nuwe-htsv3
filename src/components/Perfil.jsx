import React from 'react';
import GridRepositorios from './GridRepositorios';
import UserInfo from './UserInfo';

/*
 * This component wraps the UserInfo and GridRepositorios components
 */
const Perfil = ({userInfo, reposInfo}) => {

    return (
        <section className="screen screen--profile">
            <div className="screen__close-btn">
                <a href="/" rel="noreferrer">Cerrar sesión</a>
            </div>
            <UserInfo userInfo={userInfo}></UserInfo>
            { reposInfo.length > 0 ? 
                <GridRepositorios reposInfo={reposInfo}></GridRepositorios> : 
                <p>Aún no existen repositorios públicos en este perfil.</p>
            }
        </section>
    )
}

export default Perfil;