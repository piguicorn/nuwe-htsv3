import React from 'react';

const UserInfo = ({userInfo}) => {

    const {
        username,
        avatar_url,
        public_repos
    } = userInfo;

    return (
        <div className="user-info">
            <img src={avatar_url} alt="imagen de perfil"/>
            <p>@{username}</p>
            <p>{public_repos} repositorios públicos creados</p>
        </div>
    )
}

export default UserInfo;