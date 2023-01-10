import React from 'react';
import './AboutModal.css';

function AboutModal(props) {
    return (
        <div className={`modal ${props.show}`}>
            <h2> <a href="https://github.com/" target="_blank" rel="noreferrer"> Github Finder </a> é um buscador de usuários e repositórios presentes no GitHub.</h2>
        </div>
    );
}

export default AboutModal;