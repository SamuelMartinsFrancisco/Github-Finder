import React from 'react';
import './AboutModal.css';

function AboutModal(props) {
    return (
        <div className={`modal ${props.show}`}>
            <h2> <a href="https://github.com/SamuelMartinsFrancisco/Github-Finder/" target="_blank" rel="noreferrer"> Github Finder </a> é um buscador de usuários e repositórios presentes no <a href="https://pt.wikipedia.org/wiki/GitHub" target="_blank" rel="noreferrer">GitHub</a>.</h2>
        </div>
    );
}

export default AboutModal;
