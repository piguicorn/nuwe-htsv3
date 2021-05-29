import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

/*
 * This component displays the login/register form
 */
const Login = ({passUsername, errorMessage}) => {

    const [username, setUsername] = useState('');
    const [redirect, setRedirect] = useState('');
    const [screen, setScreen] = useState('login');

    useEffect(() => setRedirect(""), []);

    const handleSubmit = e => {
        e.preventDefault();

        passUsername(username);
        resetUsername();
        setRedirect("/perfil");
    };

    const resetUsername = () => setUsername('');

    const changeScreen = () => setScreen(screen === "login" ? "registro" : "login");

    if (redirect) {
        return <Redirect to={redirect}/>
    }

    return (
        <>
            <section className="screen screen--login">
                <h1>{screen}</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">
                        Nombre de usuario:
                    </label>
                    { errorMessage ? <span className="login-error">{errorMessage}</span> : null }
                    <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        onChange={e => setUsername(e.target.value)}
                        value={username} />

                    <label htmlFor="password">
                        Contraseña:
                    </label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" />
                    
                    <input type="submit" value={screen} />
                </form>
                {
                    screen === "login" ? 
                    <p>¿Aún no tienes una cuenta? <a href="#" onClick={changeScreen}>Regístrate</a> ahora.</p> :
                    <p>¿Ya tienes una cuenta? <a href="#" onClick={changeScreen}>Loguéate</a> ahora.</p>
                }
                
            </section>
        </>
    );
};

export default Login;