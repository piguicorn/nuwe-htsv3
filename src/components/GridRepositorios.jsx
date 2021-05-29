import React, {useEffect} from 'react';

const Repositorio = ({info}) => {
    const {name, html_url, stargazers_count} = info;

    return (
        <a href={html_url} target="_blank">
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

const GridRepositorios = ({reposInfo}) => {

    return (
        <ul className="list list--repositories">
            {reposInfo.map((info) => <li key={"repo-"+info.id}><Repositorio info={info}/></li>)}
        </ul>
    )
}

export default GridRepositorios;