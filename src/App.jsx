import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import GridRepositorios from './components/GridRepositorios';
import UserInfo from './components/UserInfo';

const App = () => {

    const [username, setUsername] = useState('');
    const [userInfo, setUserInfo] = useState({});
    const [reposInfo, setReposInfo] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => getUserInfo(username), [username]);
    useEffect(() => getReposInfo(userInfo.repos_url), [userInfo]);

    const getUserInfo = username => {

        fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(({message, avatar_url, html_url, public_repos, repos_url}) => {

          setErrorMessage('');
         
          if (message === "Not Found") {
            setErrorMessage('No hemos podido encontrar a nadie con ese username. :(');
          } else {

            setUserInfo({
                username,
                avatar_url,
                html_url,
                public_repos,
                repos_url
            });
          }
        })

    };

    const getReposInfo = url => {
        fetch(url)
        .then(res => res.json())
        .then(repos => {
            console.log(repos);
            return repos.map(({name, html_url, id, stargazers_count, languages_url}) => ({
                name, 
                html_url, 
                id,
                stargazers_count,
                languages_url
            }));
        }).then(info => {
            setReposInfo(info)
        })
    }

    const getLanguagesInfo = url => {
        
        fetch(url)
        .then(res => res.json())
        .then(console.log)
    }

    const getUsername = username => setUsername(username);

    return (
        <>
            <section className="screen--login">
                <Login 
                    passUsername={getUsername} 
                    errorMessage={errorMessage}></Login>
            </section>
            <section className="screen--profile">
                <header>
                    <button>Salir</button>
                </header>
                <main>
                    <UserInfo userInfo={userInfo}></UserInfo>
                    {   reposInfo.length > 0 ?
                        <GridRepositorios reposInfo={reposInfo}></GridRepositorios> : 
                        <p>Todavía no se ha creado ningún repositorio.</p> 
                    }
                </main>
            </section>

        </>
    );
}

export default App;

/*
 * PASOS:
 * x 1. Conectar con API 
 * x 2. Componente Búsqueda (de user)
 * x 3. UsuarioInfo (card)
 * 4. GridRepositorios
 * 5. Repositorio
 * x 6. Llamar API (user). Guardar user info
 * x 7. Llamar API (repos). Guardar repos info
 * 8. estilos
 * 
 * user -> https://api.github.com/users/${username}
 * repos -> https://api.github.com/users/${username}/repos
 * 
 * Cuando recibimos un nuevo username, llamamos a la API para obtener la información de ese perfil
 * y a continuación hacemos otra llamada para obtener los datos sobre los repositorios.
 * 
 * https://free-icon-rainbow.com/
*/