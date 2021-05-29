import React, { useState, useEffect } from 'react';
import Busqueda from './components/Busqueda';

const App = () => {

    const [username, setUsername] = useState('');
    const [userInfo, setUserInfo] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(({message, ...data}) => {
          setErrorMessage('');
         
          if (message === "Not Found") {
            setErrorMessage('No hemos podido encontrar a nadie con ese username. :(');
          } else {
            setUserInfo(data);
          }
        })
    }, [username]);

    const getUsername = username => setUsername(username);

    return (
        <main>
            <Busqueda 
                passUsername={getUsername} 
                errorMessage={errorMessage}></Busqueda>
        </main>
    );
}

export default App;

/*
 * PASOS:
 * x 1. Conectar con API 
 * 2. Componente Búsqueda (de user)
 * 3. UsuarioInfo (card)
 * 4. GridRepositorios
 * 5. Repositorio
 * 
 * user -> https://api.github.com/users/${username}
 * repos -> https://api.github.com/users/${username}/repos
*/