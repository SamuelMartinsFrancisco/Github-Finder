import React from 'react';
import { useOutletContext } from 'react-router-dom';
import  QuestionMark from '../question-mark.png';
import './FoundUser.css';

function FoundUser() {
    const { userInfo } = useOutletContext();

    const userNameValidation = () => {
        let name = userInfo.name || userInfo.login;

        if (name === undefined) {
            name = "Antes, busque por um usuário."
        }

        return name;
    }
    
    return (
        <div className="found-user-info">
            <div className="profile">
                <figure> <img src={userInfo.profileImage || QuestionMark} alt="user"></img> </figure>
                <h2> {userNameValidation()} </h2>
            </div>
        </div>
    )
}

export default FoundUser;