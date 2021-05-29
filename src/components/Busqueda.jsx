import React, { useState, useEffect } from 'react';

const Busqueda = ({passUsername, errorMessage}) => {

    const [username, setUsername] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        passUsername(username);
        resetUsername();
    };

    const resetUsername = () => setUsername('');

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">
                Introduce un nombre de usuario:
            </label>
            { errorMessage ? <p>{errorMessage}</p> : null }
            <input 
                type="text" 
                name="username" 
                id="username" 
                onChange={e => setUsername(e.target.value)}
                value={username} />
            
            <input type="submit" value="Buscar" />
        </form>
    );
};

export default Busqueda;

/*
 * Este componente guarda el valor introducido en el input 
 * y lo pasa al componente padre (App) con passUsername.
 * 
 * Si la llamada a la API devuelve "Not Found", muestra un mensaje de error. 
 */