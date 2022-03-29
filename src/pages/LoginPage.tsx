import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ServerError from '../components/ServerError';
import { checkInputData } from '../fetch';
import {
    CheckBox,
    FormButton,
    Label,
    LoginForm,
    LoginInput,
} from '../styles';
import { TLoginForm, TServerResponse } from '../types';

const LoginPage = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TLoginForm>({
        defaultValues: {
            login: '',
            password: '',
        },
    });


    const [isBtnDisabled, setIsBtnDisabled] = React.useState(false);


    const [serverResponse, setServerResponse] = React.useState<TServerResponse>();


    const onSubmit = async (data: TLoginForm) => {
        setIsBtnDisabled(true);
        localStorage.setItem('email', data.login);
        let resposne = await checkInputData(data)
        setServerResponse(resposne); 
        setIsBtnDisabled(false);
        if (resposne.logon){navigate('/profile');}
        
    };


    return (
        <div>
            <Header />
            {serverResponse !== undefined ? <ServerError errorMessage={serverResponse.message} /> : null }
            <LoginForm onSubmit={handleSubmit(onSubmit)}>
                <Label htmlFor="login">Логин</Label>
                <LoginInput
                    {...register('login', { required: 'Обязательное поле' })}
                    style={{ border: errors.login?.message ? '2px solid red' : '' }}
                    type="text"
                    id="login"
                    placeholder="login"
                />
                <div style={{ color: 'red', marginBottom: 20 }}>{errors.login?.message}</div>
                <Label htmlFor="password">Пароль</Label>
                <LoginInput
                    {...register('password', { required: 'Обязательное поле' })}
                    style={{ border: errors.password ? '2px solid red' : '' }}
                    type="password"
                    id="password"
                    placeholder="password"
                />
                <div style={{ color: 'red', marginBottom: 20 }}>{errors.password?.message}</div>
                <CheckBox>
                    <input type="checkbox" id="rememberPass" />
                    <Label htmlFor="rememberPass">Запомнить пароль</Label>
                </CheckBox>

                <FormButton disabled={isBtnDisabled}>Войти</FormButton>
            </LoginForm>
        </div>
    );
};

export default LoginPage;
