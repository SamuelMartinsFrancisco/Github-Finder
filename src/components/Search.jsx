import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

import { BsPerson } from "react-icons/bs";
import { RiGitRepositoryLine, RiSendPlaneFill } from "react-icons/ri";

// No options o repository deve ser opcional. Quando o usuário clicar então aparece o input do repository

function Search(props) {
    const [searchBarValue, setSearchBarValue] = useState({ user: '', repository: '' });
    const [userWasSearched, setUserWasSearched] = useState(false);
    const [searchRepository, setSearchRepository] = useState(false);
    
    const filteredName = (name) => {
        return name.replace(/\s/g, '');
    }

    const loadUser = async (userName) => {
        const data = await fetch(`https://api.github.com/users/${userName}`).then((response) => {
            return response.json();
        }).catch((error) => console.error('Error: ', error));

        props.setUserInfo({
            name: data.message === 'Not Found' ? 'Usuário não encontrado' : data.name,
            login: data.message === 'Not Found' ? 'Usuário não encontrado' : data.login,
            profileImage: data.avatar_url,
        });

        console.log(data);
    }

    const loadRepository = async (userName, repositoryName) => {
        const data = await fetch(`https://api.github.com/repos/${filteredName(userName)}/${repositoryName}`).then((response) => {
            return response.json();
        }).catch((error) => console.error('Error: ', error));

        props.setRepositoryInfo({
            name: data.message === 'Not Found' ? 'Repositório não encontrado' : data.full_name,
            access: data.html_url,
            description: data.description,
            message: data.message === null ? 'ok' : data.message
        })

        console.log(data);
    }

    return (
        <>
            <div className="search">
                <div className="bar">
                    <span>
                        <input type="text" 
                            placeholder="Quem quer encontrar?" 
                            value={searchBarValue.user} 
                            onChange={ (event) => setSearchBarValue({ user: event.target.value, repository: searchBarValue.repository }) } 
                        />

                        <Link to="search/user">
                            <button type="submit" 
                                    className='send-button' 
                                    onClick={ () => { 
                                        loadUser(searchBarValue.user); /*setSearchBarValue('');*/ 
                                        setUserWasSearched(true); 
                                    }
                                    }> 
                                <RiSendPlaneFill /> 
                            </button>
                        </Link>
                    </span>

                    <span style={ !searchRepository ? {display: 'none', opacity: 0} : null }>
                        <input type="text" 
                            placeholder="E qual repositório?" 
                            value={searchBarValue.repository} 
                            onChange={ (event) => setSearchBarValue({ user: searchBarValue.user, repository: event.target.value }) } 
                        />

                        <Link to="search/user/repository">
                            <button type="submit" 
                                    className='send-button' 
                                    onClick={ () => { 
                                        loadRepository(searchBarValue.user, searchBarValue.repository)
                                        setSearchBarValue({ user: '', repository: ''}); 
                                        setUserWasSearched(false);
                                        setSearchRepository(false);
                                    }}> 
                                <RiSendPlaneFill /> 
                            </button>
                        </Link>
                    </span>
                </div>

                <div className="options">
                    <div className="current"> 
                        <BsPerson /> 
                    </div>
                    <div className={searchRepository ? 'current' : null} 
                         onClick={() => { if (userWasSearched) { setSearchRepository(!searchRepository); } 
                    }}> 
                        <RiGitRepositoryLine /> 
                    </div>
                </div>
            </div>
        </>
    );
}

export default Search;

// ctrl + ;  -> comentário automático:
