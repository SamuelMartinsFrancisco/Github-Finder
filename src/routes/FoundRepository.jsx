import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './FoundRepository.css';

import { RiGitRepositoryLine } from "react-icons/ri";

function FoundRepository() {
    const { repositoryInfo } = useOutletContext();

    const repositoryNameValidation = repositoryInfo.name === undefined ?  'Antes, busque por um repositório.' : repositoryInfo.name;
    const showMoreInfoLink = () => {
        let show = 'Veja mais';

        if (repositoryNameValidation !== repositoryInfo.name || repositoryInfo.name === 'Repositório não encontrado') {
            show = '';
        }

        return show;
    }

    return (
        <div className="found-repository-info">
            <h2> {repositoryNameValidation} </h2>
            <p> {repositoryInfo.description} </p>
            <a href={repositoryInfo.access} target="_blank" rel="noreferrer"> {showMoreInfoLink()} </a>
            <figure> <RiGitRepositoryLine style={{ color: '#FFFFFF', fontSize: 'clamp(40px, 3vw, 50px)' }} /> </figure>
        </div>
    );
}

export default FoundRepository;