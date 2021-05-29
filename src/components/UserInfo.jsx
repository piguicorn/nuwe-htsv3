import React from 'react';

/*
 * This component displays the user information
 */
const UserInfo = ({userInfo}) => {

    const {
        username,
        avatar_url,
        public_repos,
        html_url
    } = userInfo;

    return (
        <div className="user-info">
            <img src={avatar_url} alt="imagen de perfil"/>
            <h1><a href={html_url}>@{username}</a></h1>
            <p><span>{public_repos}</span> repositorios</p>
        </div>
    )
}

export default UserInfo;