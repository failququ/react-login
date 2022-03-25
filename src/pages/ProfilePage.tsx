import React from 'react';
import Header from '../components/Header';
import { LogOutBtn, ProfileGreetingsDiv, ProfilePage } from '../styles';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate();

    const onLogOut = () => {
        localStorage.removeItem('email')
        navigate('/login');
    }

    return (
        <ProfilePage>
            <Header/>
            <ProfileGreetingsDiv>
                Здравствуйте, <b>{localStorage.getItem('email')}</b>
            </ProfileGreetingsDiv>
            <LogOutBtn onClick={onLogOut}>Выйти</LogOutBtn>
        </ProfilePage>
    );
};

export default LoginPage;