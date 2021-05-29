import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Login from './components/Login';
import Perfil from './components/Perfil';

const App = () => {

    /* states */
    const [username, setUsername] = useState('');
    const [userInfo, setUserInfo] = useState({});
    const [reposInfo, setReposInfo] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    /* effects */
    useEffect(() => getUserInfo(username), [username]);
    useEffect(() => getReposInfo(userInfo.repos_url), [userInfo]);

    /* fetching API (user info) */
    const getUserInfo = username => {
        fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(({message, avatar_url, html_url, public_repos, repos_url}) => {

          setErrorMessage('');
         
          // checking if the user was found
          if (message === "Not Found") {
            setErrorMessage('No hemos podido encontrar a nadie con ese username. :(');
          } else {

            let info = {
                username,
                avatar_url,
                html_url,
                public_repos,
                repos_url
            };

            setUserInfo(info);
          }
        })

    };

    /* fetching API (repos info) */
    const getReposInfo = url => {
        fetch(url)
        .then(res => res.json())
        .then(repos => {
            return (
                repos.map(({name, html_url, id, stargazers_count, languages_url}) => {
                    return ({
                        name, 
                        html_url, 
                        id,
                        stargazers_count,
                        languages_url
                    })
                })
            )
        }).then(info => {
            setReposInfo(info)
        })
    }

    // getting the username from child component (Login)
    const getUsername = username => setUsername(username);

    return (
        <>
            <main>
                <Router>
                    <Switch>
                        <Route exact path="/"   
                            render={(props) => (
                                <Login {...props} 
                                passUsername={getUsername} 
                                errorMessage={errorMessage}/>
                            )}/>
                        <Route exact path="/perfil"
                            render={(props) => (
                                <Perfil {...props} 
                                userInfo={userInfo} 
                                reposInfo={reposInfo}/>
                            )}/>
                    </Switch>
                </Router>
            </main>
        </>
    );
}


export default App;

/*
 * 
 * Iconos de:
 * https://free-icon-rainbow.com/
 * 
*/