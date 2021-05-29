import React from 'react';

/*
 * This component displays the details about a repository
 */
const Repositorio = ({info}) => {
    const {name, html_url, stargazers_count, languages} = info;

    return (
        <a href={html_url} target="_blank" rel="noreferrer">
            <h2>{name}</h2> 
            <ul className="list list--languages">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
            <div className="stargazers">{stargazers_count}</div>
        </a> 
    )
}

/*
 * This component displays the repositories list 
 */
const GridRepositorios = ({reposInfo}) => {

    return (
        <ul className="list list--repositories">
            {reposInfo.map((info, index) => <li key={"repo-"+index}><Repositorio info={info}/></li>)}
        </ul>
    )
}

export default GridRepositorios;